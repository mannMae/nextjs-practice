/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ['next/babel'],
  plugins: [],
  compiler: {
    styledComponents:
      true |
      {
        ssr: true,
      },
  },
};

module.exports = nextConfig;
