import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import compression from 'vite-plugin-compression';
import path from 'path-browserify';
import { Buffer } from 'buffer';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        react(),
        compression({
            algorithm: 'gzip',
        }),
    ],
    resolve: {
        alias: {
            path: 'path-browserify', // Use path-browserify for frontend compatibility
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@subComponents': path.resolve(__dirname, 'src/components/Sub_Components'),
            '@JSP': path.resolve(__dirname, 'src/components/Pages/javascriptPrincipals'),
            '@react': path.resolve(__dirname, 'src/components/Pages/react'),
            '@fundamentals': path.resolve(__dirname, 'src/components/Pages/fundamentals'),
            '@fullcalendar/react': '@fullcalendar/react',
            '@fullcalendar/daygrid': '@fullcalendar/daygrid',
            'buffer' : 'buffer',
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
            },
        },
    },
});