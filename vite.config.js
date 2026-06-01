import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: [".vercel.run"],
  },
  preview: {
    allowedHosts: [".vercel.run"],
  },
});
