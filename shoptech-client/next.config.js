/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: process.env.REACT_APP_MONGODB_URL,
  },
  server: {
    port: process.env.REACT_APP_PORT || 3000,
  },
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
};

module.exports = nextConfig;
