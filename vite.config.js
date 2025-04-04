import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    watch: { usePolling: true },
    open: true, // Abre automáticamente el navegador
  },
  plugins: [react()],
  base: "modulo-3-evaluacion-final-laiapozo"
});
