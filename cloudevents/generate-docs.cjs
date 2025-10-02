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

    // Post-processing: add anchors for property allOf subsections and link them in the top Properties table.
    try {
      const docsFiles = fs.readdirSync(outputPath).filter(f => f.endsWith('.md'));
      for (const f of docsFiles) {
        const p = path.join(outputPath, f);
        let md = fs.readFileSync(p, 'utf-8');

        // 1. Add explicit anchors for headings like `### type.0` so we can link deterministically.
        md = md.replace(/^### ([A-Za-z0-9_-]+)\.(\d+)\s*$/gm, (m, prop, idx) => {
          const anchorId = `${prop}-${idx}`.toLowerCase();
            // Avoid duplicating if already enhanced
          if (md.includes(`<a id="${anchorId}">`)) return m;
          return `### <a id="${anchorId}"></a> ${prop}.${idx}`;
        });

        // 2. In the top Properties summary table, convert the anonymous All of rows (repeated primitive types)
        //    into links pointing to the anchors we just added. We detect a pattern with rowspan+"All of:".
        //    Example row pattern (first row):
        //    <tr><td rowspan="9">type</td><td rowspan="9">All of:</td><td>String</td></tr>
        //    followed by N-1 rows like: <tr><td>String</td></tr>
        md = md.replace(/(<tr><td rowspan="(\d+)">([^<]+)<\/td><td rowspan="\2">All of:<\/td><td>)([^<]+)(<\/td><\/tr>)([\s\S]*?)(?=<\/tbody>)/, (full, startPrefix, countStr, propName, firstType, endSuffix, tail) => {
          const count = parseInt(countStr, 10);
          // Collect subsequent simple rows to modify; we'll rebuild them.
          // Extract each subsequent <tr><td>TypeName</td></tr>
          const rowRegex = /<tr><td>([^<]+)<\/td><\/tr>/g;
          const rows = [];
          let match;
          let consumedLength = 0;
          while ((match = rowRegex.exec(tail)) && rows.length < count - 1) {
            rows.push({ type: match[1], raw: match[0], index: rows.length + 1, start: match.index, end: match.index + match[0].length });
            consumedLength = match.index + match[0].length;
          }
          if (rows.length !== count - 1) {
            // Could not confidently parse; leave unchanged.
            return full;
          }

          // Build new first row with link to anchor id (propName-0)
          const safeProp = propName.trim().toLowerCase();
          let rebuilt = `${startPrefix}<a href="#${safeProp}-0">${firstType}</a>${endSuffix}`;
          // Rebuild subsequent rows linking to anchors
            for (let i = 0; i < rows.length; i++) {
              const r = rows[i];
              rebuilt += `\n<tr><td><a href="#${safeProp}-${i + 1}">${r.type}</a></td></tr>`;
            }
          // Append any remaining tail content after the rows we consumed
          const remainder = tail.slice(consumedLength).replace(/^/, '');
          return rebuilt + remainder;
        });

        fs.writeFileSync(p, md, 'utf-8');
      }
      console.log('Post-processing: enhanced allOf property links in docs.');
    } catch (ppErr) {
      console.warn('Post-processing of docs failed:', ppErr.message);
    }
  } catch (err) {
    console.error('Failed to generate docs:', err);
    process.exit(1);
  }
})();
