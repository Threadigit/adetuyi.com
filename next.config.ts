import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.adetuyi.com",
          },
        ],
        destination: "https://adetuyi.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
