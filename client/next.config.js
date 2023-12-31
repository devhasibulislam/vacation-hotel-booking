/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    bodyParser: {
      sizeLimit: "10mb",
      maxBodySize: "10mb",
    },
  },
  images: {
    domains: ["localhost", "placehold.co"],
  },
};

module.exports = nextConfig;
