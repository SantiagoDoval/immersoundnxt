// /** @type {import('next').NextConfig} */

// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// const nextConfig = {
    
// };

// // if (process.env.NODE_ENV === 'development') {
// //   await setupDevPlatform();
// // }
// export default nextConfig;

const webpack = require('webpack');

const nextConfig = {
  webpack: (config) => {
    // Añadir polyfill para `crypto`
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
    };

    // Añadir soporte para `process` y `Buffer`
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    );

    return config;
  },
};

export default nextConfig;





