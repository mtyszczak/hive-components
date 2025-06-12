import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "bundle",
    },
    cssMinify: 'esbuild',
    minify: 'esbuild',
    sourcemap: true,
    emptyOutDir: false,
    rollupOptions: {
      external: ["lit", "@hiveio/internal"],
    },
  },
});
