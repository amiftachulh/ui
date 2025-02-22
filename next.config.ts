import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com", pathname: "/photo-*" }],
  },
};

export default nextConfig;
