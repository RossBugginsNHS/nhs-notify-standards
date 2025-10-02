import $RefParser from 'json-schema-ref-parser';
import fs from 'fs';
import path from 'path';

/*
 * bundle-schema.ts
 * -----------------
 * Produces a single self-contained JSON Schema document with all $ref
 * resolutions inlined (using json-schema-ref-parser's bundle capability).
 *
 * Why both bundle & dereference?  We choose bundle here so that:
 *  - Internal circular references are preserved (if any)
 *  - Definitions ($defs) are kept rather than fully duplicated
 *  - External file references are pulled into the root schema's $defs
 *
 * Usage:
 *   npx ts-node bundle-schema.ts <entry-schema> <output-file>
 * or via npm script:
 *   npm run bundle -- nhs-notify-example-event.schema.json dist/nhs-notify-example-event.bundle.schema.json
 */

async function main() {
  const [entry, outFile] = process.argv.slice(2);
  if (!entry || !outFile) {
    console.error('Usage: ts-node bundle-schema.ts <entry-schema.json> <output-file.json>');
    process.exit(1);
  }

  // Accept relative paths; keep original relative for nicer $ref roots
  const entryPath = path.isAbsolute(entry) ? entry : path.join(process.cwd(), entry);
  if (!fs.existsSync(entryPath)) {
    console.error(`Entry schema not found: ${entryPath}`);
    process.exit(1);
  }

  try {
    // Use bundle (not dereference) to keep shared $defs only once.
    const bundled = await $RefParser.bundle(entryPath, {
      resolve: {
        file: { order: 1 },
        http: { order: 2 }
      },
      dereference: { circular: 'ignore' }
    });

    // Optionally set/override $id for the bundled artifact (remove query strings, etc.)
    if (typeof bundled === 'object' && bundled) {
      const baseName = path.basename(outFile);
      const idCandidate = `https://nhsdigital.github.io/nhs-notify-standards/cloudevents/${baseName}`;
      // Only set if not already meaningful
      if (!('$id' in bundled) || (bundled as any).$id?.includes('example') ) {
        (bundled as any).$id = idCandidate;
      }
      (bundled as any).$comment = ((bundled as any).$comment ? (bundled as any).$comment + ' | ' : '') + 'Bundled schema (all external $ref inlined).';

      // Strip nested $id fields to avoid AJV treating sub-schemas as separate roots and breaking local $ref resolution.
      const root = bundled as any;
      const rootId = root.$id;
      const seen = new Set<object>();
      function cleanse(node: any) {
        if (!node || typeof node !== 'object' || seen.has(node)) return;
        seen.add(node);
        if (node !== root && typeof node.$id === 'string') {
          // Drop nested $id to keep all refs inside single document coordinate space
          delete node.$id;
        }
        for (const key of Object.keys(node)) {
          const val = node[key];
          if (typeof val === 'object') cleanse(val);
        }
      }
      cleanse(root);

      // Rewrite any refs that json-schema-ref-parser emitted pointing deep via encoded path segments
      // Example currently causing issue: "#/allOf/0/properties/data/properties/notify-payload/%24defs/DataPlane"
      // We can detect pattern /notify-payload/%24defs/... and map to a top-level unique path in $defs.
      // For simplicity, if root.$defs does not have these, we hoist them.
      if (!root.$defs) root.$defs = {};
      // Hoist DataPlane & ControlPlane if they exist under notify-payload.$defs
      try {
        const dataPlane = root.allOf?.[0]?.properties?.data?.properties?.['notify-payload']?.$defs?.DataPlane;
        const controlPlane = root.allOf?.[0]?.properties?.data?.properties?.['notify-payload']?.$defs?.ControlPlane;
        if (dataPlane) root.$defs.DataPlane = dataPlane;
        if (controlPlane) root.$defs.ControlPlane = controlPlane;
      } catch {}
      function rewriteRefs(node: any) {
        if (!node || typeof node !== 'object') return;
        for (const key of Object.keys(node)) {
          const val = node[key];
          if (key === '$ref' && typeof val === 'string') {
            const match = val.match(/#\/allOf\/0\/properties\/data\/properties\/notify-payload\/%24defs\/(DataPlane|ControlPlane)$/);
            if (match) {
              node[key] = `#/$defs/${match[1]}`;
            }
          } else if (typeof val === 'object') {
            rewriteRefs(val);
          }
        }
      }
      rewriteRefs(root);
    }

    const outDir = path.dirname(path.resolve(outFile));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, JSON.stringify(bundled, null, 2));
    console.log(`Bundled schema written to ${outFile}`);
  } catch (err) {
    console.error('Failed to bundle schema:', err);
    process.exit(1);
  }
}

main();
