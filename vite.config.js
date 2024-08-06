import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Define __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@subComponents': path.resolve(
                __dirname,
                'src/components/Sub_Components'
            ),
            '@JSP': path.resolve(
                __dirname,
                'src/components/Pages/javascriptPrincipals'
            ),
            '@react': path.resolve(__dirname, 'src/components/Pages/react'),
            '@fundamentals': path.resolve(
                __dirname,
                'src/components/Pages/fundamentals'
            ),
        },
    },
    build: {
        outDir: 'dist',
    },
})
