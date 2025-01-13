'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaHome, FaCar, FaRoad, FaMapMarkedAlt, FaGasPump, FaParking } from 'react-icons/fa'
import { IconType } from 'react-icons';


const JeddahDriversGuide = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof content>('traffic');


    const tabs: { id: keyof typeof content; label: string; icon: IconType }[] = [
        { id: 'traffic', label: 'حركة المرور', icon: FaCar },
        { id: 'roads', label: 'الطرق الرئيسية', icon: FaRoad },
        { id: 'landmarks', label: 'المعالم', icon: FaMapMarkedAlt },
        { id: 'gas', label: 'محطات الوقود', icon: FaGasPump },
        { id: 'parking', label: 'مواقف السيارات', icon: FaParking },
      ];
      

  const content = {
    traffic: {
      title: 'حركة المرور في جدة',
      text: 'تتميز جدة بحركة مرور كثيفة، خاصة خلال ساعات الذروة. يُنصح بتجنب الطرق الرئيسية مثل طريق الملك عبد العزيز وطريق الأمير ماجد خلال هذه الأوقات. استخدم تطبيقات الملاحة مثل Google Maps أو Waze للحصول على أفضل الطرق.',
    },
    roads: {
      title: 'الطرق الرئيسية في جدة',
      text: 'تشمل الطرق الرئيسية في جدة طريق الملك عبد العزيز، طريق الملك فهد، طريق الأمير ماجد، وطريق الكورنيش. هذه الطرق تربط الأحياء الرئيسية في المدينة وتوفر وصولاً سريعًا إلى المناطق الهامة.',
    },
    landmarks: {
      title: 'المعالم الرئيسية للسائقين',
      text: 'من أهم المعالم التي يجب على السائقين معرفتها: نافورة الملك فهد، برج المملكة، مسجد الرحمة، وكورنيش جدة. هذه المعالم تساعد في التوجيه وتحديد المواقع بسهولة.',
    },
    gas: {
      title: 'محطات الوقود',
      text: 'تنتشر محطات الوقود في جميع أنحاء جدة. أشهر شركات الوقود هي أرامكو، ساسكو، والدريس. معظم المحطات تعمل على مدار 24 ساعة، وتوفر خدمات إضافية مثل الصيانة السريعة ومتاجر التموينات.',
    },
    parking: {
      title: 'مواقف السيارات',
      text: 'توجد العديد من مواقف السيارات في وسط المدينة والمناطق التجارية. استخدم تطبيق "مواقف" للعثور على أقرب موقف متاح. تذكر أن بعض المناطق تطبق نظام المواقف المدفوعة، لذا احرص على الالتزام بالقواعد لتجنب المخالفات.',
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
          دليل جدة للسائقين
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            مرحبًا بك في دليل جدة للسائقين! سواء كنت مقيمًا أو زائرًا، هذا الدليل سيساعدك على فهم حركة المرور والطرق الرئيسية والمعالم الهامة في مدينة جدة. استخدم هذه المعلومات لتحسين تجربة القيادة الخاصة بك في المدينة.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 m-2 rounded-full transition duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <tab.icon className="ml-2" />
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">{content[activeTab].title}</h2>
          <p className="text-gray-700 leading-relaxed">{content[activeTab].text}</p>
        </motion.div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">صور من جدة</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Image
                src="/images/صور-من-جدة/jeddah-corniche.webp" 
                alt="كورنيش جدة الجديد ليلاً مع أضواء الزينة"
                title="كورنيش جدة الجديد ليلاً"
                width={1024}
                height={768}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-md w-full h-64"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
              <Image
                src="/images/صور-من-جدة/king-fahd-fountain.webp" 
                alt="نافورة الملك فهد في جدة أثناء غروب الشمس"
                title="أطول نافورة في العالم - نافورة الملك فهد بجدة"
                width={1024}
                height={768}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-md w-full h-64"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
              <Image
                src="/images/صور-من-جدة/traffic-in-jeddah.webp" 
                alt="حركة المرور في مدينة جدة أثناء ساعة الذروة"
                title="حركة المرور في جدة وتكدس السيارات في الشوارع الرئيسية"
                width={1024}
                height={768}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-md w-full h-64"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            تواصل معنا للمساعدة
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JeddahDriversGuide

