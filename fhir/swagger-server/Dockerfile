# Letters OpenAPI Swagger UI Server
FROM node:20-alpine AS base
WORKDIR /app

# NOTE: This Dockerfile is built with build context = repo root (.)
# so we reference the swagger-server subfolder explicitly.

# Install dependencies (copy only manifests first for layer caching)
COPY swagger-server/package.json swagger-server/package-lock.json* ./
RUN npm ci --omit=dev

# Copy application source
COPY swagger-server/src ./src

# Copy OpenAPI spec folder (from repo root)
COPY openapi ./openapi

EXPOSE 8080
ENV NODE_ENV=production
CMD ["node", "src/server.js"]
