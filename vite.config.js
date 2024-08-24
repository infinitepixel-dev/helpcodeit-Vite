import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
/* import { visualizer } from 'rollup-plugin-visualizer' */
import compression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'

import 'core-js/es/promise' // Polyfill for Promises
import 'core-js/es/map' // Polyfill for Map object
import 'core-js/es/set' // Polyfill for Set object

// Define __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [
        react(),
        /*         visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            template: 'treemap', // sunburst, treemap, network
            filename: 'bundle-stats.html',
        }), */
        compression({
            algorithm: 'gzip', // Enable gzip compression
        }),
        legacy({
            browsers: ['last 2 versions', 'safari >= 9'],
            useBuiltIns: 'entry',
            corejs: 3,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
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
            '@fullcalendar/react': '@fullcalendar/react',
            '@fullcalendar/daygrid': '@fullcalendar/daygrid',
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
    //overrides for node payments management
    overrides: [
        {
            files: {
                '/src/components/Product_Management/db_server/productServer.js':
                    '/src/components/Product_Management/db_server/productServer.js',
            },
            env: {
                node: true,
            },
            rules: {
                'global-require': 'off', // Allow use of require()
                'import/no-extraneous-dependencies': 'off', // Disable any import rules
            },
        },
    ],
    server: {
        host: '0.0.0.0', // This will allow access over the network
        port: 5173, // Default port; change if necessary
        strictPort: true, // Ensure the specified port is used
    },
})
