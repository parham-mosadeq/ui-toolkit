import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
    outDir: "dist",
    lib: {
      entry: {
        lit: path.resolve(__dirname, "src/index.ts"), // Lit build
        react: path.resolve(__dirname, "src/react/index.ts"), // React build
      },
      name: "ui-toolkit",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ["lit", "react", "react-dom"],
      output: {
        globals: {
          lit: "Lit",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
