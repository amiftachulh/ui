import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com", pathname: "/photo-*" }],
  },
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
