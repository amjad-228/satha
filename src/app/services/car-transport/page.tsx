'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaCar, FaClock, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa'

export default function CarTransportService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>
        
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">خدمة نقل السيارات</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <Image
                className="rounded-lg shadow-md w-full h-64 object-cover"
                src="/images/satha2.webp"
                alt="سطحة جدة لسحب السيارات المتعطلة"
                title="سطحة جدة تحت خدمة نقل وسحب السيارات المتعطلة"
                width={800}
                height={400}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-4">
              نقدم خدمة نقل السيارات بكفاءة عالية وأمان تام. سواء كنت بحاجة لنقل سيارتك لمسافات قصيرة أو طويلة، فإن فريقنا المتخصص جاهز لتلبية احتياجاتك.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaCar className="text-blue-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">نقل آمن لجميع أنواع السيارات</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">خدمة سريعة على مدار الساعة</span>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="text-blue-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">تأمين شامل أثناء النقل</span>
              </div>
              <div className="flex items-center">
                <FaMoneyBillWave className="text-blue-500 text-2xl mr-2 ml-2" />
                <span className="text-gray-700">أسعار تنافسية وشفافة</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">لماذا تختار خدمة نقل السيارات لدينا؟</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>فريق متخصص ومدرب على أعلى المستويات</li>
              <li>معدات حديثة ومتطورة لضمان سلامة سيارتك</li>
              <li>تغطية شاملة لجميع مناطق جدة والمناطق المحيطة</li>
              <li>خدمة عملاء متميزة وسرعة في الاستجابة</li>
              <li>أسعار شفافة بدون رسوم خفية</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 text-lg font-semibold">
            احجز خدمة نقل السيارات الآن
          </Link>
        </div>
      </div>
    </div>
  )
}

