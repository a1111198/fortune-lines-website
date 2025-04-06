/** @type {import('next').NextConfig} */
const nextConfig = {
// output: "export",
  images: {
    domains: ['cdn.sanity.io', 'storage.googleapis.com'],

  },
  // If you're using basePath, add it here
  // basePath: '',
  // If you want to use styled-components
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
