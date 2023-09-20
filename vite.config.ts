import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  plugins: [
    devServer({
      entry: './src/index.ts',
      cf: {
        bindings: {
          TOKEN: 'my-token-strings'
        },
        d1Databases: ['DB'],
        d1Persist: true
      }
    })
  ]
})
