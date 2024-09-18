/** @type {import('next').NextConfig} */
const nextConfig = { 
  swcMinify: true,       
  output: "standalone",
  experimental:{
    runtime:'edge',
  },
  i18n: {
    locales: ['en', 'es'], 
    defaultLocale: 'en',   
  },
  // images: {
  //   domains: ['your-image-domain.com'], 
  // },
};

async function setupDevPlatform() {

  console.log("Development mode setup...");

}

if (process.env.NODE_ENV === "development") {
  setupDevPlatform();
}

export default nextConfig;
