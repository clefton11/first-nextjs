import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.jbcookiecutters.com",
        protocol: "https",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        hostname:"lh3.googleusercontent.com",
        protocol: "https",
        port:""
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port:"",
      }
    ]
  },
  serverExternalPackages:["@prisma/client", "prisma"],

  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;
