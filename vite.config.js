import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const target = 'https://localhost:7138';

  return defineConfig({
    server: {
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
  });
};
