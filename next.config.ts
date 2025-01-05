import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {protocol:"https",hostname:"*"},
      {protocol:"http",hostname:"*"}
    ]
  },
};

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

export default nextConfig;
