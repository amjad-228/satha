'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaKey, FaClock, FaUserSecret, FaCheckCircle } from 'react-icons/fa'

export default function CarUnlockingService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-800 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>
        
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">خدمة فتح أبواب السيارات المقفلة</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <Image
                src="/images/satha7.webp"
                alt="سطحة جدة لفتح ابواب السيارات المقفلة"
                title="سطحة جدة لفتح أبواب السيارات المقفلة"
                width={800}
                height={400}
                object-fit="cover"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-4">
              نقدم خدمة احترافية لفتح أبواب السيارات المقفلة دون إحداث أي ضرر. سواء نسيت مفاتيحك داخل السيارة أو واجهت مشكلة في قفل السيارة، فإن فريقنا المتخصص جاهز لمساعدتك في أي وقت.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaKey className="text-purple-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">فتح جميع أنواع أقفال السيارات</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-purple-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">خدمة سريعة على مدار الساعة</span>
              </div>
              <div className="flex items-center">
                <FaUserSecret className="text-purple-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">فريق محترف وموثوق</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-purple-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">ضمان عدم إلحاق أي ضرر بالسيارة</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">لماذا تختار خدمتنا لفتح أبواب السيارات؟</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>خبرة واسعة في التعامل مع جميع أنواع أقفال السيارات</li>
              <li>استخدام أحدث التقنيات والأدوات لفتح الأبواب بأمان</li>
              <li>خدمة سريعة وفعالة لتوفير وقتك وجهدك</li>
              <li>أسعار معقولة وشفافة دون أي رسوم خفية</li>
              <li>خدمة متاحة 24/7 لمساعدتك في أي وقت تحتاجها</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="inline-block bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 text-lg font-semibold">
            اطلب خدمة فتح أبواب السيارات الآن
          </Link>
        </div>
      </div>
    </div>
  )
}

