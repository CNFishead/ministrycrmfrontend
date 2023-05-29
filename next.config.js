/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // set image domains
  images: {
    // localhost:5000
    domains: ["localhost", ""],
  },
  env: {
    API_URL: process.env.API_URL,
    DEV_API_URL: process.env.DEV_API_URL,
  },
};

module.exports = nextConfig;
