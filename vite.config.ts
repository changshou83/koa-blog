/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver as AntDV } from 'unplugin-vue-components/resolvers';
import {
  createStyleImportPlugin,
  AndDesignVueResolve
} from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';
import { vueI18n } from '@intlify/vite-plugin-vue-i18n';
import Unocss from 'unocss/vite';
import { fileURLToPath, URL } from 'url';
import { resolve, dirname } from 'node:path';

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true // 开启prop默认值
    }),
    vueJsx(),
    vueI18n({
      // 资源预构建
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**'
      )
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n', '@vueuse/core'],
      dirs: [
        'src/composables',
        'src/composables/utils',
        'src/composables/event',
        'src/composables/core',
        'src/utils',
        'src/utils/common',
        'src/utils/route',
        'src/api'
      ],
      dts: 'src/auto-import.d.ts',
      vueTemplate: true,
      resolvers: [AntDV()]
    }),
    Unocss(),
    // 按需加载
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()],
      libs: [
        {
          libraryName: 'ant-design-vue',
          resolveStyle: (name) => {
            const ignoreList = ['radio-group', 'menu-item'];
            if (ignoreList.includes(name)) return '';
            return `ant-design-vue/es/${name}/style/css`;
          }
        },
        {
          libraryName: '@ant-design/icons-vue',
          resolveStyle: () => '',
          libraryNameChangeCase: 'paramCase'
        }
      ]
    }),
    visualizer()
  ],
  build: {
    rollupOptions: {
      external: []
    }
  },
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 路径别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'test/unit/vitestSetup.ts'
  }
});
