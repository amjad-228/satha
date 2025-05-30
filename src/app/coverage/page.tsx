'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaClock, FaTruck, FaHome } from 'react-icons/fa'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false })

const coverageAreas = [
  { name: 'سطحة شمال جدة'},
  { name: 'سطحة جنوب جدة'},
  { name: 'سطحة وسط جدة'},
  { name: 'سطحة شرق جدة'},
  { name: 'سطحة غرب جدة'},
  { name: 'سطحة الحمراء جدة'},
  { name: 'سطحة الاندلس جدة'},
  { name: 'سطحة الشرفية جدة'},
  { name: 'سطحة مشرفة جدة'},
  { name: 'سطحة البغدادية الغربية جدة'},
  { name: 'سطحة الشاطئ جدة'},
  { name: 'سطحة الورود جدة'},
  { name: 'سطحة الخمرة جدة'},
  { name: 'سطحة الفضيلة جدة'},
  { name: 'سطحة القرنية جدة'},
  { name: 'سطحة النزهة جدة'},
  { name: 'سطحة الروضة جدة'},
  { name: 'سطحة الصفاء جدة'},
  { name: 'سطحة المروة جدة'},
  { name: 'سطحة البوادي جدة'},
  { name: 'سطحة الفيصلية جدة'},
  { name: 'سطحة الربوة جدة'},
  { name: 'سطحة الزهراء جدة'},
  { name: 'سطحة السلامة جدة'},
  { name: 'سطحة العزيزية جدة'},
  { name: 'سطحة الفيحاء جدة'},
  { name: 'سطحة النهضة جدة'},
  { name: 'سطحة الخالدية جدة'},
  { name: 'سطحة المرجان جدة'},
  { name: 'سطحة البساتين جدة'},
  { name: 'سطحة الرحاب جدة'},
  { name: 'سطحة النخيل جدة'},
  { name: 'سطحة السامر جدة'},
  { name: 'سطحة المنار جدة'},
  { name: 'سطحة الواحة جدة'},
  { name: 'سطحة ابحر الشمالية جدة'},
  { name: 'سطحة ابحر الجنوبية جدة'},
  { name: 'سطحة قويزة جدة'},
  { name: 'سطحة ابرق الرغامة جدة'},
  { name: 'سطحة الرويس جدة'},
  { name: 'سطحة الحمدانية جدة'},
  { name: 'سطحة الاجاويد جدة'},
  { name: 'سطحة الاجواد جدة'},
  { name: 'سطحة طيبة جدة'},
]

export default function GeographicCoverage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
        </nav>

        <motion.h1 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          التغطية الجغرافية لخدمات سطحة جدة
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">مناطق التغطية</h2>
            <div className="grid grid-cols-2 gap-4">
              {coverageAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className={`text-gray-700 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedArea === area.name ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedArea(area.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="font-semibold">{area.name}</h3>
                  <p className="text-sm mt-2">
                    <FaClock className="inline mr-1" /> نصلك في أقرب وقت !
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">تفاصيل التغطية</h2>
            {selectedArea ? (
              <div>
                <h3 className="text-blue-700 text-xl font-semibold mb-2">{selectedArea}</h3>
                <p className="text-gray-900 mb-4">وقت الاستجابة المتوقع: نصل في أقرب وقت استجابة متوقع (-:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>خدمة سحب السيارات متوفرة 24/7</li>
                  <li>فريق فني متخصص في المنطقة</li>
                  <li>تغطية شاملة لجميع أنواع المركبات</li>
                </ul>
              </div>
            ) : (
              <p className="text-gray-600">الرجاء اختيار منطقة لعرض التفاصيل</p>
            )}
          </motion.div>
        </div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">خريطة التغطية</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <MapComponent />
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link 
            href="/#اتصل بنا"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
          >
            <FaTruck className="inline-block mr-2" />
            اطلب خدمة سطحة الآن
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

