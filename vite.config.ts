import { defineConfig } from "vite";
import { commonViteConfig } from "./vite.config.common";

export default defineConfig({
  build: {
    ...commonViteConfig.build,
    lib: {
      ...commonViteConfig.build.lib,
      entry: "dist/all.js",
    },
    rollupOptions: {
      external: [...commonViteConfig.build.rollupOptions.external, /@hiveio/],
    },
  },
});
