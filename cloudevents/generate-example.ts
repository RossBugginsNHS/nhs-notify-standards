import $RefParser from "json-schema-ref-parser";
import jsf from "json-schema-faker";
import fs from "fs";

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
  fs.writeFileSync(outputPath, JSON.stringify(example, null, 2));
  console.log(`Example written to ${outputPath}`);
}

main();
