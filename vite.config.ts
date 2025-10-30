import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

/** https://vitejs.dev/config/ */
export default defineConfig({
    base: 'https://www.thororen.com/beycord',
    plugins: [react(), tsconfigPaths()],
    server: {
        allowedHosts: [".thororen.com"],
        port: 8080,
        strictPort: true,
    },
    preview: {
        allowedHosts: [".thororen.com"],
        port: 8080,
        strictPort: true,
    },
})