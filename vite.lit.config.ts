import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    target: "esnext",
    outDir: "dist/lit",
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "UIToolkitLit",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: { lit: "lit" },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
    }),
  ],
});
