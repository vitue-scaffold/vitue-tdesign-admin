import path from 'path';

import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import createVuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { ExportBuildInfo } from '@vitue/export-build-info';
import { ExportEnvJson } from '@vitue/export-env-json';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "@/style/variables.less";`,
        },
        javascriptEnabled: true,
      },
    },
  },

  plugins: [
    createVuePlugin(),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
    vueJsx(),

    // https://github.com/anncwb/vite-plugin-mock
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, 'src/locales/**'),
    }),

    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),

    // https://github.com/vitue-scaffold/vite-plugin-export-build-info
    ExportBuildInfo(),

    // https://github.com/vitue-scaffold/vite-plugin-export-env-json
    ExportEnvJson(),
  ],

  server: {
    port: 3002,
    host: '0.0.0.0',
    // https://cn.vitejs.dev/config/#server-proxy
    proxy: {
      '/api': 'http://127.0.0.1:3000/',
    },
  },

  // https://cn.vitejs.dev/config/#envdir
  envDir: './env',
  envPrefix: 'W6S_',
});
