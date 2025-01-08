// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astounding-chebakia-eb3c83.netlify.app/",
  integrations: [preact()]
});