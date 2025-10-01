import express from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';

const app = express();
const port = process.env.PORT || 8080;

// Resolve path to OpenAPI YAML (support both local dev and container)
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// Allow override via ENV OPENAPI_SPEC
const candidateSpecPaths = [
  process.env.OPENAPI_SPEC,
  path.resolve(__dirname, '../../openapi/letters-api.yaml'), // local dev (repo structure)
  path.resolve('/app/openapi/letters-api.yaml'),              // container path when copied
  path.resolve(__dirname, '../openapi/letters-api.yaml'),     // fallback
].filter(Boolean);

let specPath;
for (const p of candidateSpecPaths) {
  try {
    readFileSync(p, 'utf8');
    specPath = p;
    break;
  } catch (_) { /* try next */ }
}
if (!specPath) {
  console.error('Could not locate OpenAPI spec. Tried:', candidateSpecPaths.join(', '));
  process.exit(1);
}

let openapiDoc;
try {
  const file = readFileSync(specPath, 'utf8');
  openapiDoc = YAML.parse(file);
} catch (e) {
  console.error('Failed to read OpenAPI spec at', specPath, e);
  process.exit(1);
}

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc, {
  explorer: true,
  customSiteTitle: 'Letters API Docs'
}));

app.get('/openapi.json', (_req, res) => {
  res.json(openapiDoc);
});

const server = app.listen(port, () => {
  console.log(`Swagger UI available at http://localhost:${port}/docs`);
});

function shutdown(signal) {
  console.log(`\nReceived ${signal}, shutting down gracefully...`);
  server.close(err => {
    if (err) {
      console.error('Error during shutdown', err);
      process.exit(1);
    }
    console.log('Server closed. Bye.');
    process.exit(0);
  });
  // Fallback hard-exit if something hangs
  setTimeout(() => {
    console.warn('Forcing shutdown after 5s');
    process.exit(1);
  }, 5000).unref();
}

['SIGINT','SIGTERM'].forEach(sig => {
  process.on(sig, () => shutdown(sig));
});
