import $RefParser from "json-schema-ref-parser";
import jsf from "json-schema-faker";
import fs from "fs";

async function main() {
  const [,, schemaPath, outputPath] = process.argv;
  if (!schemaPath || !outputPath) {
    console.error("Usage: ts-node generate-example.ts <schema.json> <output.json>");
    process.exit(1);
  }
  const dereferencedSchema = await $RefParser.dereference(schemaPath);
  const example = jsf.generate(dereferencedSchema);
  fs.writeFileSync(outputPath, JSON.stringify(example, null, 2));
  console.log(`Example written to ${outputPath}`);
}

main();
