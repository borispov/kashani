import { defineConfig } from 'astro-imagetools/config';
import { astroImageTools } from "astro-imagetools"

import solid from '@astrojs/solid-js';

export default defineConfig({
  base: "/",
  vite: {
    plugins: [
      {
        name: "import.meta.url-transformer",
        transform: (code, id) => {
          if (id.endsWith(".astro"))
            return code.replace(/import.meta.url/g, `"${id}"`);
        },
      },
    ],
  },

  experimental: {
    integrations: true,
  },

  integrations: [solid(), astroImageTools],
});