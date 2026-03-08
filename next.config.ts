import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ClaudeAgent",
  assetPrefix: "/ClaudeAgent/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
