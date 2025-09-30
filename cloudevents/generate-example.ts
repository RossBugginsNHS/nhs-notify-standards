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
jsf.define('source', () => {
  return `/customer/${uuid()}/ordering/${uuid()}/item/${uuid()}`;
});

// Ensure jsf uses pattern for string generation
jsf.option({ alwaysFakeOptionals: true });

async function main() {
  const [,, schemaPathRaw, outputPath] = process.argv;
  if (!schemaPathRaw || !outputPath) {
    console.error("Usage: ts-node generate-example.ts <schema.json> <output.json>");
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

  // Post-process: set 'source' to a valid UUID path if present at the top level
  if (example && typeof example === 'object' && 'source' in example) {
    example.source = `/customer/${uuid()}/ordering/${uuid()}/item/${uuid()}`;
  }

  fs.writeFileSync(outputPath, JSON.stringify(example, null, 2));
  console.log(`Example written to ${outputPath}`);
}

main();
