/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'drmichellebengtson.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'sanctifiedbychrist.com',
      },
      {
        protocol: 'https',
        hostname: 'americandecency.org',
      },
      {
        protocol: 'https',
        hostname: 'ibwcwealth.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bizcover.com.au',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lingayasvidyapeeth.edu.in',
      },
    ],
  },
};

module.exports = nextConfig;
