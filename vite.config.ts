import path from 'node:path'
import { crx } from '@crxjs/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import zip from 'vite-plugin-zip-pack'
import manifest from './manifest.config.ts'
import { name, version } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },

  plugins: [
    vue(),
    crx({ manifest }),
    zip({ outDir: 'release', outFileName: `crx-${name}-${version}.zip` }),
  ],

  server: {
    cors: {
      origin: [
        /chrome-extension:\/\//,
      ],
    },
  },

  css: {
    // 全局注入 CSS（原生 CSS 用 include: /\.css$/）
    preprocessorOptions: {
      // 若用 Scss，写 scss: { ... }；Less 写 less: { ... }
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'src/style.css')}";`,
      },
      sass: {
        additionalData: `@import "${path.resolve(__dirname, 'src/style.scss')}";`,
      },
      // 【Scss 示例】若用 Scss，替换为：
      // scss: {
      //   additionalData: `@import "${path.resolve(__dirname, 'src/styles/global.scss')}";`,
      // },
    },
  },
})
