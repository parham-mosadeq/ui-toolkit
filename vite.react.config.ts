import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
    outDir: "dist/react",
    lib: {
      entry: path.resolve(__dirname, "src/react/button.ts"),
      name: "ReactUIToolkitLit",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"], // Ensure both ESM and CJS formats are generated
    },
    rollupOptions: {
      external: ["react", "react-dom", "lit"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          lit: "lit",
        },
      },
    },
  },
});
