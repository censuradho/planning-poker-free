import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from '@honkhonk/vite-plugin-svgr'

const path = require('path')

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '.') }],
    
  },
  plugins: [
    react(), 
    reactRefresh(),
    svgr()
  ]
})
