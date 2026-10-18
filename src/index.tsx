import { serve } from "bun";
// Import the built HTML from dist/ at runtime
import index from "../dist/index.html";

const server = serve({
  routes: {
    "/": index,
  },

  // Fallback: serve static files from dist/ then SPA
  async fetch(req) {
    const url = new URL(req.url);
    const file = Bun.file(`dist${url.pathname}`);
    if (await file.exists()) {
      return new Response(file);
    }
    return new Response(index);
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
