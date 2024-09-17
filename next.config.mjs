// /** @type {import('next').NextConfig} */

// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// const nextConfig = {
    
// };

// export default nextConfig;
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Añadimos las alternativas de módulos de Node.js para el entorno del navegador
      config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url'),
      };
    }
    return config;
  },
};

export default nextConfig;
