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

  // Collect base schema files in project root (authoritative sources)
  const allFiles = fs.readdirSync(repoRoot);
  const baseSchemas = allFiles.filter(f => f.startsWith(SOURCE_GLOB_PREFIX) && f.endsWith('.schema.json'));
  if (baseSchemas.length === 0) {
    console.error('No schema files found matching pattern:', SOURCE_GLOB_PREFIX + '*.schema.json');
    process.exit(1);
  }

  // Collect variant schemas (bundled & flattened) in repo root (by naming convention)
  const variantSchemas = allFiles.filter(f => f.startsWith(SOURCE_GLOB_PREFIX) && (f.endsWith('.bundle.schema.json') || f.endsWith('.flattened.schema.json')));

  const allSchemaFiles = [
    ...baseSchemas.map(f => ({ file: f, variant: false })),
    ...variantSchemas.map(f => ({ file: f, variant: true }))
  ];

  // Normalise schemas into temp dir
  for (const { file, variant } of allSchemaFiles) {
    const srcPath = path.join(repoRoot, file);
    try {
      const raw = fs.readFileSync(srcPath, 'utf-8');
      const json = JSON.parse(raw);
      const baseName = path.basename(file);
      json.$id = baseName; // simplified id
      if (variant) {
        // Add variant metadata to description/title
        const variantTag = file.includes('.flattened.') ? 'Flattened' : 'Bundled';
        json.title = json.title ? `${json.title} (${variantTag})` : `${baseName} (${variantTag})`;
        json.$comment = (json.$comment ? json.$comment + ' | ' : '') + `${variantTag} variant included in docs.`;
      }
      const outPath = path.join(tempDir, baseName);
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
