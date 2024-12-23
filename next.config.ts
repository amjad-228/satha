import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // تمكين خرائط المصدر في الإنتاج

  async redirects() {
    return [
      {
        source: '/:path*', // أي مسار في الموقع
        has: [
          {
            type: 'host', // نحدد أن التوجيه يحدث بناءً على المضيف
            value: 'www.sathaapp.com', // إذا كان الرابط يحتوي على www
          },
        ],
        destination: 'https://sathaapp.com/:path*', // التوجيه إلى sathaapp.com بدون www
        permanent: true, // التوجيه دائم (301)
      },
    ]
  },

  // تفعيل وضع Strict Mode ل React
  reactStrictMode: true, 
  webpack(config, { isServer }) {
    if (!isServer) {
      // تأكيد تصفية ملفات CSS و JS في الإنتاج
      config.optimization!.minimize = true; // استخدام "!" للإشارة إلى أن minimize يجب أن يكون موجودًا
    }
    return config;
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

}

export default nextConfig
