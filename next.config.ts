import { NextConfig } from 'next'
const isProd = process.env.NODE_ENV === 'production'; // تعريف isProd

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // تمكين خرائط المصدر في الإنتاج

  async redirects() {
    return isProd ? [
      {
        source: "/:path*", // أي مسار في الموقع
        has: [
          {
            type: "host", // نحدد أن التوجيه يحدث بناءً على المضيف
            key: "host",
            value: "www.sathaapp.com", // إذا كان الرابط يحتوي على www
          },
        ],
        destination: "https://sathaapp.com/:path*", // التوجيه إلى sathaapp.com بدون www
        permanent: true, // التوجيه دائم (301)
      },
      {
        source: "/:path*", // يطابق أي مسار
        has: [
          {
            type: "protocol",
            key: "protocol",
            value: "http", // إعادة التوجيه من HTTP
          },
        ],
        destination: "https://sathaapp.com/:path*", // الوجهة
        permanent: true, // إعادة توجيه 301
      },
    ]
    : [];
  },

  // تفعيل وضع Strict Mode ل React
  reactStrictMode: true, 


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

}

export default nextConfig
