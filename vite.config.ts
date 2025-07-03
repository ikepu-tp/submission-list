import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      viteSingleFile(),
      viteStaticCopy({
        targets: [{ src: "./appsscript.json", dest: "./" }],
      }),
    ],
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
