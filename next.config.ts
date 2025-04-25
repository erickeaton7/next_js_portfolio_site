/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  // Optional: Add basePath if deploying to subdirectory like <username>.github.io/<repo-name>
  // basePath: process.env.NODE_ENV === 'production' ? '/next_js_portfolio_site' : undefined,
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
};

export default nextConfig;
