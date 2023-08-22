import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const env = loadEnv("mock", process.cwd(), "");

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(env.VITE_PORT) || 3000,
  },
  base: env.VITE_BASE_PATH || "./",
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "404-html",
          async writeBundle(options) {
            const indexHtmlPath = resolve(options.dir, "index.html");
            const buildIndexHtmlPath = resolve(options.dir, "404.html");
            try {
              const indexHtmlContent = await readFile(indexHtmlPath, "utf-8");
              await writeFile(buildIndexHtmlPath, indexHtmlContent);
            } catch (error) {
              console.error("Error duplicating index.html:", error);
            }
          },
        },
      ],
    },
  },
});
