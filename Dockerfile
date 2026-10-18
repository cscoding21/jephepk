# use the official Bun image
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=install /temp/prod/node_modules ./node_modules
COPY --from=prerelease /usr/src/app/package.json ./package.json
COPY --from=prerelease /usr/src/app/dist/ ./dist/
COPY --from=prerelease /usr/src/app/src/index.tsx ./dist/index.tsx

# 1. Make the SPA route only match /
RUN sed -i 's/"\/\*": index,/"\/": index,/' dist/index.tsx

# 2. Add a fetch fallback that serves static files from dist/
RUN sed -i '/development: process.env.NODE_ENV !== "production",/i \  async fetch(req) {\n    const url = new URL(req.url);\n    const file = Bun.file(`dist${url.pathname}`);\n    if (await file.exists()) {\n      return new Response(file);\n    }\n    return new Response(index);\n  },' dist/index.tsx

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "dist/index.tsx" ]
