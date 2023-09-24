/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: process.en.MONGODB_URL
  }
}

module.exports = nextConfig
