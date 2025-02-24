import { defineConfig } from "vite";
import path from "path";

// * version system
const UI_TOOLKIT_VERSION = "ui-toolkit-v-beta-0-0-01";

export default defineConfig({
  root: ".",
  publicDir: "./public",
  build: {
    target: "esnext",
    modulePreload: false,
    outDir: "dist",
    assetsDir: "./public",
    rollupOptions: {
      // todo need modification
      output: {
        chunkFileNames: `chunks/[name]-${UI_TOOLKIT_VERSION}-[hash].js`,
        entryFileNames: `assets/[name]-${UI_TOOLKIT_VERSION}-[hash].js`,
        assetFileNames: `assets/[name]-${UI_TOOLKIT_VERSION}-[hash].[ext]`,
      },
    },
  },
  resolve: {
    alias: {
      "@/src": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
