import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // تفعيل وضع Strict Mode ل React
  reactStrictMode: true, 
  
  // تفعيل تقليص JavaScript
  swcMinify: true, 

  // إعدادات Webpack لتقليل حجم الملفات
  webpack(config) {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
      },
    }
    return config
  },

  // إعدادات الصور لتحسينها
  images: {
    domains: ['sathaapp.com'], // إضافة المجالات التي تحتوي على الصور في موقعك
    formats: ['image/avif', 'image/webp'], // إضافة تنسيقات صور جديدة لتقليل الحجم
    
  },

  // تكوين إعدادات الأمان
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // منع المتصفح من محاولة اكتشاف نوع الملف
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }, // تعزيز أمان الاتصال عبر HTTPS
        ],
      },
    ]
  },

  // تمكين استعمال PWA
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
}

export default nextConfig
