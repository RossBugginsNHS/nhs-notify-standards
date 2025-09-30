import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";

if (process.argv.length < 4) {
  console.error("Usage: node validate.js <schema.json> <data.json>");
  process.exit(1);
}

const [,, schemaPath, dataPath] = process.argv;
const schemaDir = path.dirname(schemaPath);

// Load all .schema.json files in the schema directory
function findAllJsonFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findAllJsonFiles(filePath));
    } else if (file.endsWith('.json') || file.endsWith('.schema.json')) {
      results.push(filePath);
    }
  }
  return results;
}

const allJsonFiles = findAllJsonFiles(schemaDir);
const schemas = {};
for (const fullPath of allJsonFiles) {
  const relPath = './' + path.relative(schemaDir, fullPath).replace(/\\/g, '/');
  const file = path.basename(fullPath);
  let content;
  try {
    content = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
  } catch (e) {
    continue;
  }
  if (typeof content !== 'object' || content === null || Array.isArray(content)) {
    continue;
  }
  // Overwrite $id with local relative path to ensure local refs are used
  content.$id = relPath;
  schemas[content.$id] = content;
  schemas[file] = content;
}

const ajv = new Ajv2020({ strict: false });
addFormats(ajv);
// Add all schemas to Ajv, but skip if already present
const added = new Set();
for (const [id, s] of Object.entries(schemas)) {
  if (!added.has(id)) {
    try {
      ajv.addSchema(s, id);
    } catch (e) {}
    added.add(id);
  }
}

// Always overwrite the main schema's $id to its local path
let mainSchemaFile = allJsonFiles.find(f => path.resolve(schemaPath) === path.resolve(f));
let mainSchema = mainSchemaFile ? schemas['./' + path.relative(schemaDir, mainSchemaFile).replace(/\\/g, '/')] : JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
if (mainSchemaFile) {
  mainSchema.$id = './' + path.relative(schemaDir, mainSchemaFile).replace(/\\/g, '/');
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
      for (const part of err.instancePath.replace(/^\//, '').split('/')) {
        if (part) value = value && value[part];
      }
    }
    console.error(`\nError at path: ${err.instancePath}`);
    console.error('  Value:', JSON.stringify(value));
    console.error('  Schema path:', err.schemaPath);
    console.error('  Keyword:', err.keyword);
    if (err.params) console.error('  Params:', JSON.stringify(err.params));
    if (err.message) console.error('  Message:', err.message);
  }
  process.exit(1);
}
