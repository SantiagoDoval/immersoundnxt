/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enforce React best practices
  swcMinify: true,        // Enable SWC-based minification for faster builds
  output: "standalone",   // For deployments (including Cloudflare Pages)
  experimental: {
    appDir: true,         // Next.js 14 feature: Use the `app` directory
    runtime: "edge",      // Set Edge Runtime for Cloudflare compatibility
  },
  i18n: {
    locales: ['en', 'es'],  // Define the supported languages
    defaultLocale: 'en',    // Default language
  },
  images: {
    domains: ['your-image-domain.com'],  // Add domains for remote images
  },
};

async function setupDevPlatform() {
  // Custom function for dev environment setup
  console.log("Development mode setup...");
  // Additional configurations can go here
}

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
