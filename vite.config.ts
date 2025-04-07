
// Project: EventoGestor
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// import { TailwindCss } from 'vite-plugin-tailwindcss';


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EventoGestor',
        short_name: 'EventoGestor',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1D4ED8',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
