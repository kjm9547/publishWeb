import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/publishWeb/',
  plugins: [
    react(),
    VitePWA({
      registerType:'autoUpdate',
      manifest:{
        theme_color: "#4E41DB",
        background_color: "#4E41DB",
        display: "standalone",
        scope: "https://kjm9547.github.io/publishWeb/",
        start_url: "https://kjm9547.github.io/publishWeb/",
        name: "Click",
        short_name: "Ck",
        icons: [
          {
            src: "https://kjm9547.github.io/publishWeb/favicon_32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "https://kjm9547.github.io/publishWeb/favicon_16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            //스플래시 뷰의 아이콘 역활
            src: "https://kjm9547.github.io/publishWeb/favicon_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            //스플래시 뷰의 아이콘 역활
            src: "https://kjm9547.github.io/publishWeb/favicon_180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "https://kjm9547.github.io/publishWeb/favicon_152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
         
        ]
      }
    })
  ]
})
