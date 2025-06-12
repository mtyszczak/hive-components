export const commonViteConfig = {
  build: {
    lib: {
      entry: "dist/index.js",
      formats: ["es" as const],
      fileName: "bundle",
    },
    cssMinify: "esbuild" as const,
    minify: "esbuild" as const,
    sourcemap: true,
    emptyOutDir: false,
    rollupOptions: {
      external: ["lit", "@hiveio/internal"],
    },
  },
};
