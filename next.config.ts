const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: './',              // ✅ Use relative asset paths
  trailingSlash: true,            // ✅ Helps static routing work
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
