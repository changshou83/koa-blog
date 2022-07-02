import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
} from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    vueJsx(),
    // 按需加载
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()],
      libs: [
        {
          libraryName: 'ant-design-vue',
          resolveStyle: name => {
            if (name === 'radio-group') return '';
            return `ant-design-vue/es/${name}/style/css`;
          },
        },
        {
          libraryName: '@ant-design/icons-vue',
          resolveStyle: () => '',
          libraryNameChangeCase: 'paramCase',
        },
      ],
    }),
    vue({
      reactivityTransform: true, // 开启prop默认值
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
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  // 路径别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "test/unit/vitestSetup.ts",
  },
});
