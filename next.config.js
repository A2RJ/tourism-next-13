/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  env: {
    CLERK_SECRET_KEY: "my-value",
    JWT_SECRET_KEY: "ga-secret",
  },
  pageExtensions: ["tsx", "ts"],
};

module.exports = nextConfig
