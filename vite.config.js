import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],

    server: {
    host: '192.168.172.23',
    port: 5173,
    strictPort: true,
    cors: true,
        allowedHosts: [
          '.ngrok-free.app', 
        ],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  envPrefix: 'VITE_',
});
