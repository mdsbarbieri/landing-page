const withPWA = require('next-pwa');
/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    quality: 100,
  },
});

module.exports = nextConfig;
