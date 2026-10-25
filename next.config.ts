import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Renamed when the fund became BuildX Fund 1, then BuildX Capital.
        source: "/thesis/powering-nigeria-infrastructure-fund-1",
        destination: "/thesis/buildx-capital",
        permanent: true,
      },
      {
        source: "/thesis/buildx-fund-1",
        destination: "/thesis/buildx-capital",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
