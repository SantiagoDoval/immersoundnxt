// /** @type {import('next').NextConfig} */

// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// const nextConfig = {
    
// };

// export default nextConfig;
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import webpack from 'webpack';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Solo en el lado del cliente: agregar polyfills para `crypto`
      config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url'),
      };

      // Añadir soporte para `process` y `Buffer`
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      );
    }

    return config;
  },
};

export default nextConfig;

