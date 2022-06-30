/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'strapi.michal.kepka.dev'],
  },
};

module.exports = nextConfig;
