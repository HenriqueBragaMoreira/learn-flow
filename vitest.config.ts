/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__tests__/setup.ts",
    include: ["src/**/*.spec.{js,ts,jsx,tsx}"],
    alias: {
      "~/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
