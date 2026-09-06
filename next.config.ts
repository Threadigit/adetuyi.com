import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Renamed when the fund became BuildX Fund 1.
        source: "/thesis/powering-nigeria-infrastructure-fund-1",
        destination: "/thesis/buildx-fund-1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
