/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // set image domains
  images: {
    // localhost:5000
    domains: ["localhost", "api.shepherdcms.org"],
  },
  env: {
    API_URL: `https://api.shepherdcms.org/api/v1`,
    ENV: "production",
    // ENV: "development",
  },
};

module.exports = nextConfig;
