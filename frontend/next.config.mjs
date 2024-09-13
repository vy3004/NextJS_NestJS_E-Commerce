/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "salt.tikicdn.com",
      },
    ],
  },
};

export default nextConfig;
