#!/usr/bin/env node
/**
 * Generate static documentation for JSON Schemas using json-schema-static-docs.
 *
 * We normalise all schemas into a temporary directory with simplified $id values (the file names)
 * so that relative $ref resolution works locally and we avoid remote HTTP fetches during doc generation.
 */
const path = require('path');
const fs = require('fs');
const JsonSchemaStaticDocs = require('json-schema-static-docs');

const SOURCE_GLOB_PREFIX = 'nhs-';

(async () => {
  const repoRoot = __dirname;
  const tempDir = path.join(repoRoot, '.schema-docs-tmp');
  const outputPath = path.join(repoRoot, 'docs');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Collect schema files in project root (authoritative sources)
  const allFiles = fs.readdirSync(repoRoot);
  const schemaFiles = allFiles.filter(f => f.startsWith(SOURCE_GLOB_PREFIX) && f.endsWith('.schema.json'));
  if (schemaFiles.length === 0) {
    console.error('No schema files found matching pattern:', SOURCE_GLOB_PREFIX + '*.schema.json');
    process.exit(1);
  }

  // Normalise schemas into temp dir
  for (const file of schemaFiles) {
    const srcPath = path.join(repoRoot, file);
    try {
      const raw = fs.readFileSync(srcPath, 'utf-8');
      const json = JSON.parse(raw);
      // Overwrite $id with the file name itself to keep refs local & predictable
      json.$id = file; // simple identifier for local resolution
      const outPath = path.join(tempDir, file);
      fs.writeFileSync(outPath, JSON.stringify(json, null, 2));
    } catch (e) {
      console.warn('Skipping schema (failed to parse):', file, e.message);
    }
  }

  // Provide a custom formats + relaxed strictness for custom "nhs-number" format.
  const generator = new JsonSchemaStaticDocs({
    inputPath: tempDir,
    outputPath,
    jsonSchemaVersion: 'https://json-schema.org/draft/2020-12/schema',
    ajvOptions: {
      allowUnionTypes: true,
      strict: false,
      formats: {
        'nhs-number': {
          type: 'string',
          validate: (s) => /^(?:[0-9]{10}|[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4})$/.test(s)
        }
      }
    }
  });

  try {
    await generator.generate();
    console.log('Static schema docs generated at', outputPath);
  } catch (err) {
    console.error('Failed to generate docs:', err);
    process.exit(1);
  }
})();
