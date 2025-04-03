const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  basePath: isProd ? "/Ragonezi96.github.io" : "", // Set base path for GitHub Pages
  assetPrefix: isProd ? "/Ragonezi96.github.io/" : "", // Set asset prefix for GitHub Pages
};

export default nextConfig;