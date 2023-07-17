/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
