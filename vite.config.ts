import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  plugins: [svelte(),nodePolyfills()],
});
