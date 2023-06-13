import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    cors: { origin: "*" },
    proxy:{
      '/api':{
        target:'https://fakestoreapi.com/products/',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})

// build: {
//   rollupOptions: {
//     input: {
//       app: '/index.html', // default
//     },
//   },
// },
// resolve: {
//   alias: {
//     "./runtimeConfig": "./runtimeConfig.browser",
//   },
// },
