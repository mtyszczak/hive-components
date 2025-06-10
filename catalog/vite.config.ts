import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  },
  server: {
    port: 3000,
    open: false
  },
});
