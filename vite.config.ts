import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
      "@public": "/public",
      "@components": "/src/components",
      "@containers": "/src/containers",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
    },
  },
});
