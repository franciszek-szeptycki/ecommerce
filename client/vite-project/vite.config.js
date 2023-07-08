import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PROXY = {
    target: 'http://104.248.130.4:8000',
    // changeOrigin: true,
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    build: {
        outDir: '../proxy/public',
        emptyOutDir: true,
    },

    server: {
        proxy: {
            '/api': PROXY,
            '/auth': PROXY,
        },
    },
})
