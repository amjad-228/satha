'use client'

import Link from 'next/link'
import { FaCar, FaTruck, FaKey, FaArrowLeft, FaHome, FaBook, FaLightbulb } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

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

export default function ServicesPage() {
  return (
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
  )
}
