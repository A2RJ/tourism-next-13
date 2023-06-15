/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // env: {
  //   CLERK_SECRET_KEY: "my-value",
  //   JWT_SECRET_KEY: "ga-secret",
  // },
  pageExtensions: ["tsx", "ts"],
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig
