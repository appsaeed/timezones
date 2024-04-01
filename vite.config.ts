import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const env = loadEnv("mock", process.cwd(), "");

const basename = env.VITE_BASENAME.toString().replace(/(^\/)|(\/$)/g, "");
const basepath = `/${basename}`;
export const manifest: Partial<ManifestOptions> = {
  theme_color: env.VITE_THEME_COLOR || "#282c34",
  background_color: env.VITE_THEME_COLOR_BG || "#282c34",
  display: "standalone",
  scope: "/",
  start_url: ".",
  name: env.VITE_NAME || "Timezones",
  short_name: env.VITE_NAME || "Timezones",
  description: env.VITE_DESCRIPTION || "Timezones all countries list",
  icons: [
    {
      src: `${basepath}/icon-192x192.png`,
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: `${basepath}/icon-256x256.png`,
      sizes: "256x256",
      type: "image/png",
    },
    {
      src: `${basepath}/icon-384x384.png`,
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: `${basepath}/icon-512x512.png`,
      sizes: "512x512",
      type: "image/png",
    },
  ],
};


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest,
      registerType: "autoUpdate"
    })
  ],
  server: {
    port: Number(env.VITE_PORT) || 3000,
  },
  base: env.VITE_BASENAME || "./",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]_[hash].js`,
        chunkFileNames: `[name]_chunk_[hash].js`,
        assetFileNames: `[name]_[hash].[ext]`,
      },
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


