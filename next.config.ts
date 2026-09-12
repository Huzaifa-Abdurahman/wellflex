import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.flexwellphysiocenter.com" }],
        destination: "https://flexwellphysiocenter.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
