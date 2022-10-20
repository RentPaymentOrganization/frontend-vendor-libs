import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'frontend-vendor-libs',
      fileName: 'frontend-vendor-libs',
    },
    rollupOptions: {
      external: [
        'vue',
        'quill',
      ],
      output: {
        globals: {
          vue: 'Vue',
          quill: 'quill'
        },
      },
    },
    build: {
      commonjsOptions: {
        requireReturnsDefault: true,
      },
    },
  },
});
