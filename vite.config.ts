import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  // Load env file based on `mode`
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        '/igdb': {
          target: 'https://api.igdb.com/v4',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/igdb/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              // Safely add headers with fallback
              const clientId = env.VITE_IGDB_CLIENT_ID || '';
              const accessToken = env.VITE_IGDB_ACCESS_TOKEN || '';
              
              if (clientId) {
                proxyReq.setHeader('Client-ID', clientId);
              }
              if (accessToken) {
                proxyReq.setHeader('Authorization', `Bearer ${accessToken}`);
              }
            });
          }
        }
      },
      // Add CORS headers
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, Client-ID'
      }
    }
  }
})