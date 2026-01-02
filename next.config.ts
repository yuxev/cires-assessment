import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixes the "No native build found" error for LevelDB
  serverExternalPackages: ["classic-level", "level"],

  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "localhost",
        "127.0.0.1:3000",
        "*.app.github.dev"
      ],
    },
  },
};

export default nextConfig;