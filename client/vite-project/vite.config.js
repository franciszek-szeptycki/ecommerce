import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    build: {
        outDir: '../proxy/public',
        emptyOutDir: true,
    },

    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                // changeOrigin: true,
            },
            '/auth': {
                target: 'http://127.0.0.1:8000',
                // changeOrigin: true,
            },
        },
    },
})