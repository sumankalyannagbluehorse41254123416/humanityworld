/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wip.tezcommerce.com",
        port: "3304",
        pathname: "/admin/module/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**", // allow all images
      },
    ],
  },
};

export default nextConfig;
