import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [markdoc({
    allowHTML: true
  })]
});
