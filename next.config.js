/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // trailingSlash: true,
  pageExtensions: ["tsx", "ts"],
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
