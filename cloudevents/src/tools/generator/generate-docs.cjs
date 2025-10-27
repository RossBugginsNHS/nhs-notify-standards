#!/usr/bin/env node
/**
 * Generate static documentation for JSON Schemas using json-schema-static-docs.
 *
 * Usage: node generate-docs.cjs <input-dir> <output-dir>
 *
 * The script will generate markdown documentation for all JSON schemas in the input
 * directory, preserving the folder structure in the output directory.
 */
const path = require("path");
const fs = require("fs");
const JsonSchemaStaticDocs = require("json-schema-static-docs");

(async () => {
  // Parse command line arguments
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Usage: node generate-docs.cjs <input-dir> <output-dir>");
    console.error("Example: node generate-docs.cjs ./output ./docs");
    process.exit(1);
  }

  const inputDir = path.resolve(args[0]);
  const outputDir = path.resolve(args[1]);

  console.log("Input directory:", inputDir);
  console.log("Output directory:", outputDir);

  if (!fs.existsSync(inputDir)) {
    console.error("Input directory does not exist:", inputDir);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Generating documentation...");

  // Generate documentation directly from input directory
  // Include all .schema.json files, excluding example event JSON files
  const generator = new JsonSchemaStaticDocs({
    inputPath: inputDir,
    outputPath: outputDir,
    inputFileGlob: "**/*.schema.{yml,json}",
    jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
    ajvOptions: {
      allowUnionTypes: true,
      strict: false,
      strictSchema: false,
      strictTypes: false,
      strictTuples: false,
      strictRequired: false,
      formats: {
        "nhs-number": {
          type: "string",
          validate: (s) =>
            /^(?:[0-9]{10}|[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4})$/.test(s),
        },
      },
    },
  });
  try {
    await generator.generate();

    console.log(`\n✅ Documentation generated in: ${outputDir}`);
  } catch (err) {
    console.error("Failed to generate docs:", err);
    process.exit(1);
  }
})();
