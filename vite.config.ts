import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Pasta de saída para os arquivos compilados
    minify: true,   // Minificar o código
    terserOptions: {
      compress: {
        drop_console: true, // Remover declarações de console.log durante a minificação
      },
    },
  },
})
