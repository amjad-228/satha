const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // أي إعدادات إضافية هنا
}

module.exports = withBundleAnalyzer(nextConfig)

