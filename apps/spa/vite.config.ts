import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'

const shouldExtract = process.env.EXTRACT === '1'

const tamaguiConfig = {
  components: ['@loopa/ui', 'tamagui'],
  config: 'tamagui.config.ts',
  useReactNativeWebLite: true,
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: 'tamagui.config.ts',
      components: ['tamagui'],
    }),
    // optional, adds the optimizing compiler:
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ],
})
