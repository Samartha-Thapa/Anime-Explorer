import type { NextConfig } from "next";

module.exports = {
  async redirect() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}
const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ["cdn.myanimelist.net"],
  // },


  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
