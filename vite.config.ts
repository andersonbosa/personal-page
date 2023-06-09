import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import presets from './presets/presets.ts'


// https://vitejs.dev/config/
export default defineConfig((env) => {

  //  Environment variables
  const viteEnv = loadEnv(env.mode, process.cwd())

  return {
    base: viteEnv.VITE_BASE,

    plugins: [
      presets(env),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': resolve(__dirname, './src'), /* TODO understand the differece */
        vue: 'vue/dist/vue.esm-bundler.js', /* NOTE https://koenwoortman.com/vitejs-fix-configure-your-bundler-to-alias-vue/ */
      }
    },

    // Dev server settings
    server: {
      open: true, // Automatically open the browser
      cors: true, // Cross-domain settings allow
      strictPort: true, // If the port has been occupied and exited directly
      // Interface agent
      proxy: {
        '/api': {
          // The interface agent of the local 8000 front-end code to the service port of 8888
          target: 'http://localhost:8888/',
          changeOrigin: true, // Allowed cross -domain
          rewrite: (path) => path.replace('/api/', '/'),
        },
      },
    },

    build: {
      outDir: './dist',
      sourcemap: true, /* TODO : make true only when in development */
      // reportCompressedSize: true,
      chunkSizeWarningLimit: 2000, /* Eliminate the packaging size exceeding 500KB warning */
      minify: 'esbuild',
      assetsDir: 'static/assets',
      rollupOptions: { /*  Static resource packaged to different directory under the deps */
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },

    css: {
      preprocessorOptions: {
        // Global introduced SCSS files
        scss: {
          additionalData: `
    @import "@/assets/styles/variables.scss";
  `,
          javascriptEnabled: true,
        },
      },
    },

    /* ... */
  }
})
