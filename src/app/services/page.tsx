import { Metadata } from 'next'
import Link from 'next/link'
import { FaCar, FaTruck, FaKey, FaArrowLeft, FaHome, FaBook, FaLightbulb } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import Head from 'next/head'

const services = [
  {
    title: 'نقل السيارات',
    description: 'خدمة نقل سريعة وآمنة لسيارتك إلى أي مكان في جدة',
    icon: FaCar,
    color: 'blue',
    link: '/services/car-transport',
  },
  {
    title: 'سحب السيارات المتعطلة',
    description: 'خدمة سحب احترافية للسيارات المتعطلة بسرعة وكفاءة',
    icon: FaTruck,
    color: 'green',
    link: '/services/car-towing',
  },
  {
    title: 'فتح أبواب السيارات المقفلة',
    description: 'خدمة فتح أبواب السيارات المقفلة بدون أضرار وبسرعة',
    icon: FaKey,
    color: 'purple',
    link: '/services/car-unlocking',
  },
]

export const metadata: Metadata = {
  title: "سطحة جدة | خدماتنا - 0535142000 أفضل واقرب خدمة سطحة في جدة",
  description:
   "سطحة جدة هي اقرب سطحة في جدة 0535142000 توفر خدمة سحب السيارات بأسعار مناسبة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.",
  keywords: ["سطحة جدة", "سطحات جدة", "أقرب سطحة من موقعي", "سطحة قريبة مني", "أقرب سطحة", "سطحة جدة الحمراء", "سطحة جدة", "سطحة الحمراء", "اقرب سطحه", "سطحة جدة الأندلس", "سطحة جدة الشرفية", "سطحة جدة مشرفة", "سطحة جدة البغدادية الغربية", "سطحة جدة الشاطئ", "سطحة جدة الوروود", "سطحة جدة الخمرة", "سطحة جدة الفضيلة", "سطحة جدة القرنية", "سطحة جدة النزهة", "سطحة جدة الروضة", "سطحة جدة الصفاء", "سطحة جدة المروة", "سطحة جدة البوادي", "سطحة جدة الفيصلية", "سطحة جدة الربوة", "سطحة جدة الزهراء", "سطحة جدة السلامة", "سطحة جدة العزيزية", "سطحة جدة الفيحاء"],
  openGraph: {
    title: "سطحة جدة | خدماتنا - 0535142000 أفضل واقرب خدمة سطحة في جدة",
    description:
      "سطحة جدة هي اقرب سطحة في جدة 0535142000 توفر خدمة سحب السيارات بأسعار مناسبة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.",
    siteName: `سطحة جدة 0535142000`,
    url: "https://www.sathaapp.com/services",
    images: [
      {
        url: "https://www.sathaapp.com/images/satha2.webp",
        width: 1200,
        height: 630,
        alt: "سطحة جدة",
        type: "image/webp",
      },
    ],
    type: "website",
    locale: "ar_SA",
  },

  twitter: {
    card: "summary_large_image",
    title: "سطحة جدة | خدماتنا - 0535142000 أفضل واقرب خدمة سطحة في جدة",
    description: "سطحة جدة هي اقرب سطحة في جدة 0535142000 توفر خدمة سحب السيارات بأسعار مناسبة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.",
    site: "@sathaapp",
    images: ["https://sathaapp.com/images/satha2.webp"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "سطحة جدة",
      "description": "سطحة جدة هي اقرب سطحة في جدة 0535142000 توفر خدمة سحب السيارات بأسعار مناسبة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.",
      "url": "https://sathaapp.com/services",
      "telephone": "+966535142000",
      "serviceType": "نقل سيارات",
      "address": {
        "@type": "23212",
        "addressLocality": "جدة",
        "addressRegion": "مكة المكرمة",
        "postalCode": 23212,
        "addressCountry": "SA"
      },
      image: "https://www.sathaapp.com/images/satha2.webp",
      "priceRange": "SAR 50 - SAR 500",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.516305,
        "longitude": 39.163583,
      },
      "hasMap": "https://www.google.com/maps/place/21.516305,23212",
    }),
    "openingHours": "24/7",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61571033757810",
      "https://x.com/sathaapp",
      "https://www.instagram.com/sathat_jida"
    ]
  },
}

export default function ServicesPage() {
  return (
    <>
    <Head>
      <title>سطحة جدة | خدماتنا - 0535142000 أفضل واقرب خدمة سطحة في جدة </title>
      <meta name="description" content={"سطحة جدة هي اقرب سطحة في جدة 0535142000 توفر خدمة سحب السيارات بأسعار مناسبة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان."} />
    </Head>
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-6 lg:px-8 -mt-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-10 flex justify-between items-center">
          <Link href="/" className=" bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text hover:text-blue-800 transition duration-300 flex items-center">
            <FaHome className="ml-1 text-blue-600" />
            الرئيسية
          </Link>
          <div className="flex space-x-6 space-x-reverse ">
            <Link href="/blog" className=" bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text hover:text-blue-800 transition duration-300 flex items-center">
              <FaBook className="ml-1 text-blue-600" />
              المدونة
            </Link>
            <Link href="/faq" className=" bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text hover:text-blue-800 transition duration-300 flex items-center">
              <FaLightbulb className="ml-1 text-blue-600" />
              الأسئلة الشائعة
            </Link>
          </div>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          خدماتنا
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-t-4"
              style={{
                borderColor:
                  service.color === 'blue'
                    ? '#2563eb'
                    : service.color === 'green'
                    ? '#16a34a'
                    : '#7e22ce',
              }}
            >
              <div className="p-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor:
                      service.color === 'blue'
                        ? '#ebf8ff'
                        : service.color === 'green'
                        ? '#f0fdf4'
                        : '#f3e8ff',
                  }}
                >
                  <service.icon
                    className="text-3xl"
                    style={{
                      color:
                        service.color === 'blue'
                          ? '#2563eb'
                          : service.color === 'green'
                          ? '#16a34a'
                          : '#7e22ce',
                    }}
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-[70] text-white font-semibold py-3 px-6 shadow-lg transform transition duration-300 hover:scale-105"
                  style={{
                    backgroundColor:
                      service.color === 'blue'
                        ? '#2563eb'
                        : service.color === 'green'
                        ? '#16a34a'
                        : '#7e22ce',
                  }}
                >
                  <Link href={service.link}>
                    المزيد من التفاصيل
                    <FaArrowLeft className="mr-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
