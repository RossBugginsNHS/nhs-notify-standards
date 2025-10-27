#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get command line arguments
const [sourceSchemaPath, outputDir, baseUrl] = process.argv.slice(2);

if (!sourceSchemaPath || !outputDir) {
  console.error(
    "Usage: ts-node build-schema.ts <source-schema.json> <output-dir> [base-url]"
  );
  console.error(
    "Example: ts-node build-schema.ts src/common/2025-10/nhs-notify-profile.schema.json output/common/2025-10"
  );
  console.error(
    "With URL: ts-node build-schema.ts src/common/2025-10/nhs-notify-profile.schema.json output/common/2025-10 https://schema.notify.nhs.uk"
  );
  process.exit(1);
}

interface JsonSchema {
  $id?: string;
  $ref?: string;
  [key: string]: any;
}

/**
 * Recursively process a schema object to update $ref paths
 * Converts relative file paths to either absolute URLs or built paths
 */
function processRefs(
  schema: any,
  sourceDir: string,
  outputBaseDir: string,
  baseUrl?: string
): any {
  if (typeof schema !== "object" || schema === null) {
    return schema;
  }

  if (Array.isArray(schema)) {
    return schema.map((item) =>
      processRefs(item, sourceDir, outputBaseDir, baseUrl)
    );
  }

  const result: any = {};

  for (const [key, value] of Object.entries(schema)) {
    if (key === "$ref" && typeof value === "string") {
      // Skip fragment-only references (e.g., "#/definitions/foo")
      if (value.startsWith("#")) {
        result[key] = value;
      }
      // Transform relative file path references (including simple filenames)
      else if (value.startsWith("..") || value.startsWith(".") || value.endsWith(".json")) {
        // Resolve the absolute path of the referenced schema
        const resolvedPath = path.resolve(sourceDir, value);
        
        // Calculate what the output path would be for this referenced schema
        // Assumes the same directory structure is maintained in output
        const relativePath = path.relative(
          path.join(process.cwd(), "src"),
          resolvedPath
        );
        
        if (baseUrl) {
          // Convert to URL
          const urlPath = relativePath.replace(/\\/g, "/");
          result[key] = `${baseUrl}/${urlPath}`;
        } else {
          // Keep as relative path but update to point to built location
          const fromOutputFile = path.dirname(
            path.join(outputBaseDir, path.basename(sourceSchemaPath))
          );
          const toBuiltFile = path.join(outputBaseDir, "..", "..", relativePath);
          const relativeRef = path
            .relative(fromOutputFile, toBuiltFile)
            .replace(/\\/g, "/");
          result[key] = relativeRef.startsWith(".")
            ? relativeRef
            : `./${relativeRef}`;
        }
      } else {
        // Keep absolute URLs as-is
        result[key] = value;
      }
    } else if (typeof value === "object") {
      result[key] = processRefs(value, sourceDir, outputBaseDir, baseUrl);
    } else {
      result[key] = value;
    }
  }

  return result;
}

/**
 * Build a schema from source to output with proper $id
 */
function buildSchema(
  sourceSchemaPath: string,
  outputDir: string,
  baseUrl?: string
): void {
  // Read source schema
  const sourceAbsolutePath = path.resolve(sourceSchemaPath);
  const sourceDir = path.dirname(sourceAbsolutePath);
  const sourceContent = fs.readFileSync(sourceAbsolutePath, "utf-8");
  const schema: JsonSchema = JSON.parse(sourceContent);

  // Calculate the output path
  const schemaFileName = path.basename(sourceSchemaPath);
  const outputPath = path.join(outputDir, schemaFileName);

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Calculate the $id
  let schemaId: string;
  if (baseUrl) {
    // Use provided base URL
    const relativePath = path.relative(
      path.join(process.cwd(), "src"),
      sourceAbsolutePath
    );
    schemaId = `${baseUrl}/${relativePath.replace(/\\/g, "/")}`;
  } else {
    // Use relative path from output root
    const relativePath = path.relative(
      path.join(process.cwd(), "output"),
      outputPath
    );
    schemaId = relativePath.replace(/\\/g, "/");
  }

  // Process the schema: add $id and transform $refs
  const builtSchema = {
    $id: schemaId,
    ...processRefs(schema, sourceDir, outputDir, baseUrl),
  };

  // Write the built schema
  fs.writeFileSync(outputPath, JSON.stringify(builtSchema, null, 2) + "\n");

  console.log(`Built: ${sourceSchemaPath}`);
  console.log(`  -> ${outputPath}`);
  console.log(`  $id: ${schemaId}`);
}

// Run the build
try {
  buildSchema(sourceSchemaPath, outputDir, baseUrl);
} catch (error) {
  console.error("Error building schema:", error);
  process.exit(1);
}
