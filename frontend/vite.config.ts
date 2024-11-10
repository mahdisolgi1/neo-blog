import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
   plugins: [react(), tsconfigPaths()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "src"),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `
          @use "@/styles/mixins.scss" as *;
        `,
         },
      },
   },
});
