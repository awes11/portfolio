/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can deploy to GitHub Pages exactly as before.
  // Generates a fully static `out/` folder on `next build`.
  output: 'export',

  // GitHub Pages serves from paths that work best when every page is its own folder
  // with an index.html inside. /work/student-analytics/ -> /work/student-analytics/index.html
  trailingSlash: true,

  // Static export can't use next/image's runtime optimizer. We use plain <img>
  // with manual sizing instead — simpler and zero runtime cost.
  images: {
    unoptimized: true,
  },

  // Fail the build on type errors rather than ignoring them silently.
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
