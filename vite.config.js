import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/jeevitha-fullstack-portfolio/",
  plugins: [react()],
});