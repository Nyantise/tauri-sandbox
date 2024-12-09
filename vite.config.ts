import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    AutoImport({
      vueTemplate: true,
      viteOptimizeDeps: true,
      dirs: ["src/config/**", "src/stores/**",],
      dts: './dts/auto-imports.d.ts',
      imports: [
        "vue",
      ]
    }),
    Components({
      directoryAsNamespace: true,
      allowOverrides: true,
      deep: true,
      dirs: "src/components",
      dts: './dts/components.d.ts'
    }),
    VueRouter({
      routesFolder: "src/windows",
      dts: './dts/routes.d.ts',
    }),
    vue()],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    }
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
