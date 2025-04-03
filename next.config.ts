// const isProd = process.env.NODE_ENV === "production";

// const nextConfig = {
//   reactStrictMode: true,
//   output: "export", // Enables static export
//   basePath: isProd ? "/Ragonezi96.github.io" : "", // Set base path for GitHub Pages
//   assetPrefix: isProd ? "/Ragonezi96.github.io/" : "", // Set asset prefix for GitHub Pages
// };

// export default nextConfig;
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  // basePath: isProd ? "/Ragonezi96.github.io" : "", // Base path for GitHub Pages
  // assetPrefix: isProd ? "/Ragonezi96.github.io/" : "", // Asset prefix for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/my-portfolio',
//   assetPrefix: '/my-portfolio',
// };

// export default nextConfig;
