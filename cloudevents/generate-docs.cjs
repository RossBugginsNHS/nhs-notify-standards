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

          // Build new first row with link to anchor id (propName-0) and link property name itself to its section heading anchor
          const safeProp = propName.trim().toLowerCase();
          // Link property name in the first cell
          // Replace property name cell contents with anchor link (keep rowspan value intact)
          const startPrefixLinked = startPrefix.replace(
            new RegExp(`(<tr><td rowspan="${count}">)${propName}</td>`),
            `$1<a href="#${safeProp}">${propName}</a></td>`
          );
          let rebuilt = `${startPrefixLinked}<a href="#${safeProp}-0">${firstType}</a>${endSuffix}`;
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

        // 3. Surface 'not' patterns from original schema allOf subschemas (disallowed patterns) into each subsection table.
        try {
          const schemaJsonName = f.replace(/\.md$/, '.json');
          const schemaPath = path.join(repoRoot, schemaJsonName);
          if (fs.existsSync(schemaPath)) {
            const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
            if (schema && schema.properties) {
              const propsWithAllOf = [];
              for (const [propName, propDef] of Object.entries(schema.properties)) {
                if (Array.isArray(propDef.allOf) && propDef.allOf.length) {
                  propsWithAllOf.push(propName);
                  propDef.allOf.forEach((sub, idx) => {
                    const notPat = sub && sub.not && sub.not.pattern;
                    if (!notPat) return; // only care about disallowed pattern entries
                    // Anchor id we generated earlier
                    const anchorId = `${propName}-${idx}`.toLowerCase();
                    // Regex to capture the table body for this subsection heading
                    const sectionRegex = new RegExp(`(### <a id="${anchorId}"></a> ${propName}\\.${idx}\\n<table class="jssd-property-table">\\n  <tbody>\\n)([\\s\\S]*?)(\\n  </tbody>)`);
                    md = md.replace(sectionRegex, (m, start, body, end) => {
                      // Avoid duplication
                      if (body.includes('Disallowed Pattern')) return m;
                      const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
                      let rowsToAdd = '';
                      // Add description row if sub.description exists and not already present
                      if (sub.description && !body.includes('<th>Description</th>')) {
                        rowsToAdd += `    <tr>\n      <th>Description</th>\n      <td colspan="2">${esc(sub.description)}</td>\n    </tr>\n`;
                      }
                      rowsToAdd += `    <tr>\n      <th>Disallowed Pattern</th>\n      <td colspan="2"><code>${esc(notPat)}</code></td>\n    </tr>\n`;
                      return `${start}${rowsToAdd}${body}${end}`;
                    });
                  });
                }
              }
              // Add explicit heading anchor for each property with allOf and link its internal property-level All of rows.
              propsWithAllOf.forEach(propName => {
                const safeProp = propName.toLowerCase();
                // Insert anchor into heading if not already
                const headingRegex = new RegExp(`^## ${propName}$`, 'm');
                if (headingRegex.test(md) && !new RegExp(`^## <a id="${safeProp}"></a> ${propName}$`,'m').test(md)) {
                  md = md.replace(headingRegex, `## <a id="${safeProp}"></a> ${propName}`);
                }
                // Within the section for this property, link the property-level All of rows for Type the same way as the summary table
                const sectionRegex = new RegExp(`(## <a id="${safeProp}"></a> ${propName}[\s\S]*?<table class="jssd-property-table">[\s\S]*?)(<tr><td rowspan="(\\d+)">Type<\/td><td rowspan="\\3">All of:<\/td><td>)([^<]+)(<\/td><\/tr>)([\\s\\S]*?)(?<tblend><\/tbody>)`);
                md = md.replace(sectionRegex, (whole, before, startPrefix, countStr, firstType, endSuffix, tail, tblend) => {
                  const count = parseInt(countStr,10);
                  const rowRegex = /<tr><td>([^<]+)<\/td><\/tr>/g;
                  const rows = [];
                  let match; let consumedLength=0;
                  while ((match = rowRegex.exec(tail)) && rows.length < count -1) {
                    rows.push(match[1]);
                    consumedLength = match.index + match[0].length;
                  }
                  if (rows.length !== count -1) return whole; // give up
                  let rebuilt = `${startPrefix}<a href="#${safeProp}-0">${firstType}</a>${endSuffix}`;
                  rows.forEach((t,i) => { rebuilt += `\n<tr><td><a href="#${safeProp}-${i+1}">${t}</a></td></tr>`; });
                  const remainder = tail.slice(consumedLength);
                  return before + rebuilt + remainder + tblend;
                });
                // Secondary attempt: handle extra wrapping <tr><tr> pattern if first didn't apply
                if (!md.includes(`<a href="#${safeProp}-0">String</a>`)) {
                  const sectionRegex2 = new RegExp(`(## <a id="${safeProp}"></a> ${propName}[\\s\\S]*?<table class="jssd-property-table">[\\s\\S]*?)(<tr><tr><td rowspan="(\\d+)">Type<\\/td><td rowspan="\\3">All of:<\\/td><td>)([^<]+)(<\\/td><\\/tr>)([\\s\\S]*?)(<\\/tr><\\/tr>[\\s\\S]*?<\\/tbody>)`);
                  md = md.replace(sectionRegex2, (whole, before, startPrefix, countStr, firstType, endSuffix, tail, tblend) => {
                    const count = parseInt(countStr,10);
                    const rowRegex = /<tr><td>([^<]+)<\/td><\/tr>/g;
                    const rows = [];
                    let match; let consumedLength=0;
                    while ((match = rowRegex.exec(tail)) && rows.length < count -1) {
                      rows.push(match[1]);
                      consumedLength = match.index + match[0].length;
                    }
                    if (rows.length !== count -1) return whole;
                    let rebuilt = `${startPrefix}<a href="#${safeProp}-0">${firstType}</a>${endSuffix}`;
                    rows.forEach((t,i) => { rebuilt += `\n<tr><td><a href="#${safeProp}-${i+1}">${t}</a></td></tr>`; });
                    const remainder = tail.slice(consumedLength);
                    return before + rebuilt + remainder + tblend;
                  });
                }
                // Fallback: a very permissive parser for a property detail table lacking anchors yet (to catch generator markup anomalies)
                if (!md.includes(`#${safeProp}-0`) ) {
                  const genericSectionRegex = new RegExp(`(## <a id="${safeProp}"></a> ${propName}[\s\S]*?<table class="jssd-property-table">[\s\S]*?)(<tr>(?:<tr>)?<td rowspan="(\\d+)">Type<\/td><td rowspan="\\3">All of:<\/td><td>)([^<]+)(<\/td><\/tr>)([\s\S]*?)(<\/tbody>)`);
                  md = md.replace(genericSectionRegex, (whole, before, startPrefix, countStr, firstType, endSuffix, tail, tbodyEnd) => {
                    if (whole.includes(`#${safeProp}-0`)) return whole; // already linked
                    const count = parseInt(countStr,10);
                    // Collect up to count-1 subsequent simple cell rows
                    const rowRegex = /<tr><td>([^<]+)<\/td><\/tr>/g;
                    const rows = [];
                    let match; let consumedLength = 0;
                    while ((match = rowRegex.exec(tail)) && rows.length < count -1) {
                      rows.push(match[1]);
                      consumedLength = match.index + match[0].length;
                    }
                    if (rows.length !== count -1) return whole; // can't confidently transform
                    let rebuilt = `${startPrefix}<a href="#${safeProp}-0">${firstType}</a>${endSuffix}`;
                    rows.forEach((t,i) => { rebuilt += `\n<tr><td><a href="#${safeProp}-${i+1}">${t}</a></td></tr>`; });
                    const remainder = tail.slice(consumedLength);
                    return before + rebuilt + remainder + tbodyEnd;
                  });
                }
                // Strongest fallback: detect malformed double <tr><tr> block and reconstruct with links
                if (!md.includes(`#${safeProp}-0`)) {
                  const sectionStart = md.indexOf(`## <a id="${safeProp}"></a> ${propName}`);
                  if (sectionStart !== -1) {
                    const nextHeading = md.indexOf('\n## ', sectionStart + 5);
                    const sectionEnd = nextHeading === -1 ? md.length : nextHeading;
                    const section = md.slice(sectionStart, sectionEnd);
                    const blockRegex = /<tr><tr><td rowspan="(\d+)">Type<\/td><td rowspan="\1">All of:<\/td><td>([^<]+)<\/td><\/tr>((?:<tr><td>[^<]+<\/td><\/tr>){1,200})<\/tr>/;
                    if (blockRegex.test(section)) {
                      const updated = section.replace(blockRegex, (m, countStr, firstType, tailRows) => {
                        const count = parseInt(countStr,10);
                        const rowRegex = /<tr><td>([^<]+)<\/td><\/tr>/g;
                        const extras = [];
                        let mt;
                        while ((mt = rowRegex.exec(tailRows)) && extras.length < count -1) {
                          extras.push(mt[1]);
                        }
                        if (extras.length !== count -1) return m; // bail
                        let rebuilt = `<tr><tr><td rowspan="${count}">Type</td><td rowspan="${count}">All of:</td><td><a href="#${safeProp}-0">${firstType}</a></td></tr>`;
                        extras.forEach((t,i) => { rebuilt += `\n<tr><td><a href="#${safeProp}-${i+1}">${t}</a></td></tr>`; });
                        rebuilt += `</tr>`;
                        return rebuilt;
                      });
                      if (updated !== section) {
                        md = md.slice(0, sectionStart) + updated + md.slice(sectionEnd);
                      }
                    }
                    // Additional replacement: fully malformed cluster with double closing tag </tr></tr>
                    if (!md.includes(`#${safeProp}-0`)) {
                      const section2 = md.slice(sectionStart, sectionEnd);
                      const blockRegex2 = /<tr><tr><td rowspan="(\d+)">Type<\/td><td rowspan="\1">All of:<\/td><td>([^<]+)<\/td><\/tr>((?:<tr><td>[^<]+<\/td><\/tr>){1,200})<\/tr><\/tr>/;
                      if (blockRegex2.test(section2)) {
                        const updated2 = section2.replace(blockRegex2, (m, countStr, firstType, tailRows) => {
                          const count = parseInt(countStr,10);
                          const rowRegex = /<tr><td>([^<]+)<\/td><\/tr>/g;
                          const extras = [];
                          let mt;
                          while ((mt = rowRegex.exec(tailRows)) && extras.length < count -1) {
                            extras.push(mt[1]);
                          }
                          if (extras.length !== count -1) return m;
                          let rebuilt = `<tr><td rowspan="${count}">Type</td><td rowspan="${count}">All of:</td><td><a href="#${safeProp}-0">${firstType}</a></td></tr>`;
                          extras.forEach((t,i) => { rebuilt += `\n<tr><td><a href="#${safeProp}-${i+1}">${t}</a></td></tr>`; });
                          return rebuilt;
                        });
                        if (updated2 !== section2) {
                          md = md.slice(0, sectionStart) + updated2 + md.slice(sectionEnd);
                        }
                      }
                    }
                  }
                }
              });
              // Final fallback pass: for any property with allOf whose property-level Type table still lacks links, inject them.
              propsWithAllOf.forEach(propName => {
                const safeProp = propName.toLowerCase();
                // Locate section boundaries
                const headingPattern = new RegExp(`## <a id="${safeProp}"></a> ${propName}`,'m');
                const headingMatch = headingPattern.exec(md);
                if (!headingMatch) return;
                const sectionStart = headingMatch.index;
                const nextHeadingIdx = md.indexOf('\n## ', sectionStart + 5);
                const sectionEnd = nextHeadingIdx === -1 ? md.length : nextHeadingIdx;
                const section = md.slice(sectionStart, sectionEnd);
                // If already linked, skip
                if (section.includes(`<a href="#${safeProp}-0">`)) return;
                // Identify count from rowspan and capture table up to first subsection heading (### <a id="prop-0">)
                const firstSubHeadingIdx = section.indexOf(`### <a id="${safeProp}-0"></a>`);
                const preSub = firstSubHeadingIdx !== -1 ? section.slice(0, firstSubHeadingIdx) : section;
                const tableRegex = /<tr><tr><td rowspan="(\d+)">Type<\/td><td rowspan="\1">All of:<\/td><td>String<\/td><\/tr>((?:<tr><td>String<\/td><\/tr>){1,200})<\/tr>/;
                const m = tableRegex.exec(preSub);
                if (!m) return;
                const count = parseInt(m[1],10);
                const tailRows = m[2];
                // Count existing simple rows (should be count-1)
                const rowCount = (tailRows.match(/<tr><td>String<\/td><\/tr>/g) || []).length;
                if (rowCount !== count -1) return; // mismatch
                // Build replacement
                let rebuilt = `<tr><tr><td rowspan="${count}">Type</td><td rowspan="${count}">All of:</td><td><a href="#${safeProp}-0">String</a></td></tr>`;
                for (let i=1;i<count;i++) {
                  rebuilt += `\n<tr><td><a href="#${safeProp}-${i}">String</a></td></tr>`;
                }
                rebuilt += `</tr>`;
                const newSection = section.replace(tableRegex, rebuilt);
                if (newSection !== section) {
                  md = md.slice(0, sectionStart) + newSection + md.slice(sectionEnd);
                }
              });

              // 4. Replace primitive placeholder link text with subschema 'name' labels (if provided) for allOf entries.
              try {
                for (const [propName, propDef] of Object.entries(schema.properties)) {
                  if (!Array.isArray(propDef.allOf)) continue;
                  propDef.allOf.forEach((sub, idx) => {
                    if (!sub || typeof sub !== 'object') return;
                    // Derive a label: prefer explicit name; else attempt from description (first sentence up to 60 chars); else from not.pattern; else fallback to type.
                    let derivedLabel = sub.name;
                    if (!derivedLabel) {
                      if (sub.description) {
                        derivedLabel = sub.description.split(/\.(?:\s|$)/)[0].trim();
                      } else if (sub.not && sub.not.pattern) {
                        const pat = sub.not.pattern.replace(/\\/g,'');
                        // Extract token between literal dots if pattern targets a specific banned word
                        const tokenMatch = pat.match(/\.([a-z0-9-]+)\(/);
                        const token = tokenMatch ? tokenMatch[1] : null;
                        if (token) derivedLabel = `Disallow ${token}`;
                      } else if (sub.pattern) {
                        derivedLabel = 'Pattern constraint';
                      }
                    }
                    if (!derivedLabel) return; // nothing to change
                    const safeProp = propName.toLowerCase();
                    const esc = (s) => s
                      .replace(/&/g,'&amp;')
                      .replace(/</g,'&lt;')
                      .replace(/>/g,'&gt;')
                      .replace(/"/g,'&quot;');
                    // Replace link text if still a bare primitive (String, Integer, Object, Number, Boolean)
                    const linkRegex = new RegExp(`<a href="#${safeProp}-${idx}">(String|Integer|Object|Number|Boolean)</a>`, 'g');
                    // Show label plus primitive type in parentheses for clarity
                    md = md.replace(linkRegex, (m, prim) => `<a href="#${safeProp}-${idx}">${esc(derivedLabel)} (${prim})</a>`);
                    // Append the label to the subsection heading if not already present (idempotent)
                    const headingRegex = new RegExp(`(### <a id=\\"${safeProp}-${idx}\\"></a> ${propName}\\.${idx})(?!\\s– )`);
                    md = md.replace(headingRegex, `$1 – ${esc(derivedLabel)}`);
                    // Also replace in any top-level Properties table entry (already handled above but double-check)
                  });
                }
              } catch (e) {
                // non-fatal
              }
              fs.writeFileSync(p, md, 'utf-8');
            }
          }
          fs.writeFileSync(p, md, 'utf-8');
        } catch (e) {
          // Non-fatal: continue
        }
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
