import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import { astroImageTools } from "astro-imagetools";
// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), astroImageTools],
});
