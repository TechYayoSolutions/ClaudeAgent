import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ClaudeAgent",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
