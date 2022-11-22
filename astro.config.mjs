import { defineConfig } from 'astro-imagetools/config';

import solid from '@astrojs/solid-js';

export default defineConfig({
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
  integrations: [solid() ],
});