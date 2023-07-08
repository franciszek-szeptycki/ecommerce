import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SERVER_URL = 'http://104.248.130.4:8000'

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
                target: SERVER_URL,
                // changeOrigin: true,
            },
            '/auth': {
                target: SERVER_URL,
                // changeOrigin: true,
            },
        },
    },
})
