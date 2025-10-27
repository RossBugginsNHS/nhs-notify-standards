import $RefParser from "json-schema-ref-parser";
import jsf from "json-schema-faker";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// Utility random helpers (non-cryptographic; deterministic constraints only)
function randomInt(max: number) { return Math.floor(Math.random() * max); }
function randomChoice<T>(arr: T[]): T { return arr[randomInt(arr.length)]; }
function randomHex(len: number) {
  let out = ""; for (let i=0;i<len;i++) out += randomChoice("0123456789abcdef".split("")); return out;
}

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
  
  const [ schemaPathRaw, outputPath ] = args;
  if (!schemaPathRaw || !outputPath) {
    console.error("Usage: ts-node generate-example.ts [--plane=data|control] <schema.json|yaml> <output.json>");
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
  // Apply constrained overrides so we always satisfy combined pattern + semantic requirements.
  if (example && typeof example === 'object') {
    // 1. Enforce required CloudEvents profile fields if missing (some schemas rely on profile ref)
    example.specversion = '1.0';
    if (!example.profileversion) example.profileversion = '1.0.0';
    if (!example.profilepublished) example.profilepublished = '2025-10';

    // 2. Generate a stable type if schema didn't const it (avoid banned verbs)
    if (!example.type || typeof example.type !== 'string') {
      example.type = 'uk.nhs.notify.ordering.order.read.v1';
    }

    // 3. Generate IDs
    example.id = uuid();

    // 4. Environment / instance / plane domain (align with new source pattern)
    const environments = ['production','staging','development','uat'];
    const env = randomChoice(environments);
    // instance: primary | secondary | dev-<digits>
    const instance = randomChoice(['primary','secondary','dev-' + (10000 + randomInt(90000)).toString()]);
    const plane = 'data-plane'; // default plane for example generation
    // Attempt to infer domain token from schema patterns (fallback to 'ordering')
    const domainToken = 'ordering';
    example.source = `/nhs/england/notify/${env}/${instance}/${plane}/${domainToken}`;

    // 5. Subject pattern customer/{uuid}/order/{uuid}/item/{uuid}
    example.subject = `customer/${uuid()}/order/${uuid()}/item/${uuid()}`;

    // 6. Time & recordedtime: generate recent ISO times (UTC) ensuring recorded >= time
    const now = new Date();
    const timeDate = new Date(now.getTime() - 1000); // 1s earlier
    example.time = timeDate.toISOString();
    example.recordedtime = now.toISOString();

    // 7. traceparent (00-<32hex>-<16hex>-<2hex>) with sampled flag 01
    example.traceparent = `00-${randomHex(32)}-${randomHex(16)}-01`;
    if (!example.tracestate) {
      example.tracestate = 'rojo=00f067aa0ba902b7';
    }

    // 8. Severity coherent pair
    const severities = [
      { text: 'TRACE', number: 0 },
      { text: 'DEBUG', number: 1 },
      { text: 'INFO', number: 2 },
      { text: 'WARN', number: 3 },
      { text: 'ERROR', number: 4 },
      { text: 'FATAL', number: 5 }
    ];
    const sev = randomChoice(severities);
    example.severitytext = sev.text;
    example.severitynumber = sev.number;

    // 9. Partition key (prefer customer segment prefix)
    const customerId = example.subject.split('/')[1] || uuid();
    example.partitionkey = `customer-${customerId.substring(0,8)}`.toLowerCase();

    // 10. Sequence: zero padded 20-digit
    const seq = Math.floor(Math.random() * 1e9); // smaller number but still valid when padded
    example.sequence = seq.toString().padStart(20,'0');

    // 11. Sample rate default 1 (avoid absurd large numbers failing intent)
    example.sampledrate = 1;

    // 12. Data payload enforcement
    if (!example.data || typeof example.data !== 'object') {
      example.data = {} as any;
    }

    // Recursively find and set any nhsNumber property to a valid value
    const setValidNhsNumber = (obj: any): void => {
      if (!obj || typeof obj !== 'object') return;
      
      for (const key in obj) {
        if (key === 'nhsNumber' && typeof obj[key] === 'string') {
          // Set to known valid NHS number with correct checksum
          obj[key] = '9434765919';
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          // Recursively search nested objects and arrays
          setValidNhsNumber(obj[key]);
        }
      }
    };
    
    setValidNhsNumber(example.data);

    // 13. datacontenttype & dataschema stable defaults
    example.datacontenttype = 'application/json';
    if (!example.dataschema) {
      example.dataschema = 'https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json';
    }

    // 14. Data classification defaults (pick consistent set)
    example.dataclassification = example.dataclassification || 'restricted';
    example.dataregulation = example.dataregulation || 'ISO-27001';
    example.datacategory = example.datacategory || 'sensitive';
  }

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(example, null, 2));
  console.log(`Example written to ${outputPath}`);
}

main();
