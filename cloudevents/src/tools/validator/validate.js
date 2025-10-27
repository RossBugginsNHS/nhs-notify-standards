import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// Parse command line arguments
const args = process.argv.slice(2);
let schemaPath, dataPath, baseDir;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--base" && i + 1 < args.length) {
    baseDir = path.resolve(args[i + 1]);
    i++; // skip the next argument
  } else if (!schemaPath) {
    schemaPath = args[i];
  } else if (!dataPath) {
    dataPath = args[i];
  }
}

if (!schemaPath || !dataPath) {
  console.error(
    "Usage: node validate.js [--base <base-dir>] <schema.json|yaml> <data.json>"
  );
  console.error(
    "  --base: Base directory for resolving schema references (default: auto-detect 'src' or schema directory)"
  );
  process.exit(1);
}

// Determine schema directory for loading all schemas
let schemaDir;
if (baseDir) {
  // Use provided base directory
  schemaDir = baseDir;
} else {
  // Find the 'src' directory by walking up from the schema path
  schemaDir = path.dirname(schemaPath);
  while (schemaDir !== path.dirname(schemaDir)) {
    // Stop at root
    if (
      path.basename(schemaDir) === "src" ||
      path.basename(schemaDir) === "output"
    ) {
      break;
    }
    schemaDir = path.dirname(schemaDir);
  }
  // If we didn't find 'src' or 'output', fall back to the schema's directory
  if (
    path.basename(schemaDir) !== "src" &&
    path.basename(schemaDir) !== "output"
  ) {
    schemaDir = path.dirname(schemaPath);
  }
}

// Load all .schema.json and .schema.yaml files in the schema directory
function findAllSchemaFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findAllSchemaFiles(filePath));
    } else if (
      file.endsWith(".json") ||
      file.endsWith(".schema.json") ||
      file.endsWith(".yaml") ||
      file.endsWith(".yml")
    ) {
      results.push(filePath);
    }
  }
  return results;
}

const allSchemaFiles = findAllSchemaFiles(schemaDir);
const schemas = {};
const schemasById = {};

for (const fullPath of allSchemaFiles) {
  const relPath = "./" + path.relative(schemaDir, fullPath).replace(/\\/g, "/");
  const file = path.basename(fullPath);
  const absolutePath = path.resolve(fullPath);
  let content;
  try {
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    if (fullPath.endsWith(".yaml") || fullPath.endsWith(".yml")) {
      content = yaml.load(fileContent);
    } else {
      content = JSON.parse(fileContent);
    }
  } catch (e) {
    continue;
  }
  if (
    typeof content !== "object" ||
    content === null ||
    Array.isArray(content)
  ) {
    continue;
  }

  // Keep the original $id if it exists
  const originalId = content.$id;

  // Register by absolute file path (for proper relative $ref resolution)
  schemas[absolutePath] = content;
  // Also register by relative paths for flexible resolution
  schemas[relPath] = content;
  schemas[file] = content;
  schemas[relPath.substring(2)] = content; // without leading './'
  schemas["/" + relPath.substring(2)] = content; // with leading '/'
  schemas["./" + file] = content; // basename with ./

  if (originalId) {
    schemasById[originalId] = content;
  }
}

const ajv = new Ajv2020({ strict: false });
addFormats(ajv);

// Only add schemas by absolute file paths (ignore any relative $id in the schema files)
// This ensures proper $ref resolution based on file system location
const schemasByAbsolutePath = new Map();

// Collect schemas by absolute path
for (const [id, s] of Object.entries(schemas)) {
  if (path.isAbsolute(id)) {
    schemasByAbsolutePath.set(id, s);
  }
}

// Add each schema with its absolute path as $id
const added = new Set();
for (const [absolutePath, s] of schemasByAbsolutePath.entries()) {
  if (!added.has(absolutePath)) {
    try {
      // Always use absolute path as $id, overriding any $id in the schema file
      const schemaCopy = { ...s, $id: absolutePath };
      ajv.addSchema(schemaCopy);
    } catch (e) {
      // Silently ignore duplicate schema errors
    }
    added.add(absolutePath);
  }
}

ajv.addFormat("nhs-number", {
  type: "string",
  validate: (value) => {
    const digits = value.replace(/\s+/g, "");
    if (!/^\d{10}$/.test(digits)) return false;
    const nums = digits.split("").map((d) => parseInt(d, 10));
    const check = nums[9];
    const sum = nums.slice(0, 9).reduce((acc, d, i) => acc + d * (10 - i), 0);
    const remainder = sum % 11;
    const expected = 11 - remainder === 11 ? 0 : 11 - remainder;
    if (expected === 10) return false;
    return check === expected;
  },
});

// Detailed NHS Number diagnosis helper (used only for enriched error output)
function diagnoseNhsNumber(raw) {
  const original = raw;
  if (typeof raw !== "string") {
    return { valid: false, reason: "Value is not a string", original };
  }
  const digits = raw.replace(/\s+/g, "");
  if (!/^\d{10}$/.test(digits)) {
    return {
      valid: false,
      reason:
        "Must contain exactly 10 digits (spaces optional for readability)",
      original,
    };
  }
  const nums = digits.split("").map((d) => parseInt(d, 10));
  const providedCheck = nums[9];
  const sum = nums.slice(0, 9).reduce((acc, d, i) => acc + d * (10 - i), 0);
  const remainder = sum % 11;
  let expected = 11 - remainder;
  if (expected === 11) expected = 0; // 11 -> 0 per algorithm
  if (expected === 10) {
    return {
      valid: false,
      reason: "Computed check digit is 10 (reserved = invalid number)",
      expectedCheck: expected,
      providedCheck,
      original,
    };
  }
  if (providedCheck !== expected) {
    return {
      valid: false,
      reason: "Checksum mismatch",
      expectedCheck: expected,
      providedCheck,
      original,
    };
  }
  return {
    valid: true,
    reason: "OK",
    expectedCheck: expected,
    providedCheck,
    original,
  };
}

// Always overwrite the main schema's $id to its absolute file path
let mainSchemaFile = allSchemaFiles.find(
  (f) => path.resolve(schemaPath) === path.resolve(f)
);
let mainSchema;
if (mainSchemaFile) {
  mainSchema = schemas[path.resolve(mainSchemaFile)];
} else {
  const mainContent = fs.readFileSync(schemaPath, "utf-8");
  if (schemaPath.endsWith(".yaml") || schemaPath.endsWith(".yml")) {
    mainSchema = yaml.load(mainContent);
  } else {
    mainSchema = JSON.parse(mainContent);
  }
}
if (mainSchemaFile) {
  mainSchema.$id = path.resolve(mainSchemaFile);
}
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

let validate;
if (mainSchema.$id && ajv.getSchema(mainSchema.$id)) {
  validate = ajv.getSchema(mainSchema.$id);
} else {
  validate = ajv.compile(mainSchema);
}
const valid = validate(data);

if (valid) {
  console.log("Valid!");
  process.exit(0);
} else {
  console.error("Invalid:", validate.errors);
  // Print more debug info for each error
  for (const err of validate.errors || []) {
    // Traverse data to the error path
    let value = data;
    if (err.instancePath) {
      for (const part of err.instancePath.replace(/^\//, "").split("/")) {
        if (part) value = value && value[part];
      }
    }
    console.error(`\nError at path: ${err.instancePath}`);
    console.error("  Value:", JSON.stringify(value));
    console.error("  Schema path:", err.schemaPath);
    console.error("  Keyword:", err.keyword);
    if (err.params) console.error("  Params:", JSON.stringify(err.params));
    if (err.message) console.error("  Message:", err.message);
    // Enrich nhs-number format failures with checksum details
    if (
      err.keyword === "format" &&
      err.params &&
      err.params.format === "nhs-number"
    ) {
      const diag = diagnoseNhsNumber(value);
      if (!diag.valid) {
        const extra =
          `NHS Number invalid: ${diag.reason}` +
          (diag.expectedCheck !== undefined
            ? ` (expected check ${diag.expectedCheck}, got ${diag.providedCheck})`
            : "");
        console.error("  Detail:", extra);
      }
    }
  }
  process.exit(1);
}
