import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  base: "",
  plugins: [react(), viteTsconfigPaths(), vanillaExtractPlugin()],
  server: {
    open: true,
    port: 3000,
  },
});
