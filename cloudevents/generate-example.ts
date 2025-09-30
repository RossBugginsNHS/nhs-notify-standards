import $RefParser from "json-schema-ref-parser";
import jsf from "json-schema-faker";
import fs from "fs";

// Register a custom UUID format for jsf
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
jsf.format('uuid', uuid);

// Custom property generator for 'source' to match the required pattern
//jsf.define('source', () => {
//  return `/customer/${uuid()}/ordering/${uuid()}/item/${uuid()}`;
//});

// Ensure jsf uses pattern for string generation
jsf.option({ alwaysFakeOptionals: true });

async function main() {
  const args = process.argv.slice(2);
  // Accept optional --plane=<data|control>
  let plane: 'data' | 'control' = 'data';
  const planeArgIdx = args.findIndex(a => a.startsWith('--plane='));
  if (planeArgIdx !== -1) {
    const val = args[planeArgIdx].split('=')[1];
    if (val === 'control' || val === 'data') plane = val;
    args.splice(planeArgIdx, 1);
  }
  const [ schemaPathRaw, outputPath ] = args;
  if (!schemaPathRaw || !outputPath) {
    console.error("Usage: ts-node generate-example.ts [--plane=data|control] <schema.json> <output.json>");
    process.exit(1);
  }
  // Add cache-busting query param if schemaPath is a URL
  let schemaPath = schemaPathRaw;
  try {
    const url = new URL(schemaPathRaw);
    url.searchParams.set('_cb', Date.now().toString());
    schemaPath = url.toString();
  } catch (e) {
    // Not a URL, use as-is
  }
  const dereferencedSchema = await $RefParser.dereference(schemaPath);
  const example = jsf.generate(dereferencedSchema);


  if (example && typeof example === 'object') {
    if ('subject' in example) {
      example.subject = `customer/${uuid()}/order/${uuid()}/item/${uuid()}`;
    }
    if ('source' in example) {
      // Derive a pseudo service segment for sample
      const service = 'ordering';
      example.source = `/${plane}-plane/${service}`;
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(example, null, 2));
  console.log(`Example written to ${outputPath}`);
}

main();
