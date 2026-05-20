import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tuandung765.github.io',
  base: '/TuanDung-memories', // CỰC KỲ QUAN TRỌNG: Phải khớp với tên Repo của bạn
});
