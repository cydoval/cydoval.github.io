import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: false,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
