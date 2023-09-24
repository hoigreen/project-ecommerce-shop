/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: process.env.MONGODB_URL
  },
  server: {
    port: process.env.PORT || 3000,
  },
}

module.exports = nextConfig