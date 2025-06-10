import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "bundle",
    },
    sourcemap: true,
    emptyOutDir: false,
    rollupOptions: {
      external: ["lit"],
    },
  },
});
