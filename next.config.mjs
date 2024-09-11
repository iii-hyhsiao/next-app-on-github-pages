/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next-app-on-github-pages",
  output: "export",  // Enables static page generation.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
