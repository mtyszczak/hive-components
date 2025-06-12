import { defineConfig } from "vite";
import { createCommonViteConfigForEntry } from "./vite.config.common";

export default defineConfig(createCommonViteConfigForEntry("all.ts", /@hiveio/));
