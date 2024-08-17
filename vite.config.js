import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/DNDCapstone/", // Update with your repository name
  build: { chunkSizeWarningLimit: 3600 },
});
