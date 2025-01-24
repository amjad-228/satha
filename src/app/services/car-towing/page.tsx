'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaTruck, FaTools, FaRoad, FaHandshake } from 'react-icons/fa'

export default function CarTowingService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>
        
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">خدمة سحب السيارات المتعطلة</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <Image
                src="/images/satha6.webp"
                alt="سطحة جدة لنقل السيارات في مدينة جدة"
                title="سطحة جدة اقرب سطحة لنقل وسحب السيارات المتعطلة"
                width={800}
                height={400}
                className="rounded-lg shadow-md w-full h-64"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-4">
              نقدم خدمة سحب السيارات المتعطلة بسرعة واحترافية عالية. سواء كانت سيارتك معطلة بسبب حادث أو عطل فني، فإن فريقنا جاهز للوصول إليك وحل مشكلتك في أسرع وقت.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaTruck className="text-green-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">سحب لجميع أنواع المركبات</span>
              </div>
              <div className="flex items-center">
                <FaTools className="text-green-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">فريق فني متخصص</span>
              </div>
              <div className="flex items-center">
                <FaRoad className="text-green-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">تغطية لجميع الطرق في جدة</span>
              </div>
              <div className="flex items-center">
                <FaHandshake className="text-green-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">خدمة عملاء متميزة</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">كيف تعمل خدمة سحب السيارات لدينا؟</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>اتصل بنا على الرقم الموحد</li>
              <li>حدد موقعك ونوع المشكلة التي تواجهها</li>
              <li>سيصل فريقنا المتخصص في أسرع وقت ممكن</li>
              <li>نقوم بتقييم حالة السيارة وتحديد الحل الأمثل</li>
              <li>نقوم بسحب سيارتك بأمان إلى الوجهة المطلوبة</li>
            </ol>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 text-lg font-semibold">
            اطلب خدمة سحب السيارات الآن
          </Link>
        </div>
      </div>
    </div>
  )
}

