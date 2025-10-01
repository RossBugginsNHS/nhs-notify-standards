# Letters OpenAPI Swagger Server

Simple Express server to serve the existing `openapi/letters-api.yaml` with Swagger UI.

## Scripts

- `npm install` – install dependencies
- `npm run dev` – start server on port 8080 (default) with swagger UI at `/docs`
- `npm start` – production mode start

## Environment

Set `PORT` to change the listening port.

## Endpoints

- `/docs` – Swagger UI
- `/openapi.json` – Raw JSON form of spec
- `/health` – Health check

## Updating the spec

Edit `openapi/letters-api.yaml` then restart the server (or add a watcher like `nodemon` if desired).
