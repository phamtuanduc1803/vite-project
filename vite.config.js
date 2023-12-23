import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    watch: {
      usePolling: true
    },
  }
}
