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
  }
};

export default nextConfig;
