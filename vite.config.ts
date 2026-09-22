import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is '/' by default, which is correct for a <username>.github.io user page.
export default defineConfig({
  plugins: [react()],
})
