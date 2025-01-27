'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react'
import { FaBook, FaBuilding } from 'react-icons/fa' // Updated import for FaBook and added FaBuilding
import {} from 'react-icons/fa'
import { Car, Axis3d, Key, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {Button} from '@/components/ui/button'
import { SocialMediaButtons } from '@/components/SocialMediaButtons'
import Testimonials from '@/components/Testimonials'
import SearchBar from '@/components/SearchBar' // Added import for SearchBar
import { motion } from 'framer-motion';


/*const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
})*/
const FaWhatsapp = dynamic(() => import('react-icons/fa').then((mod) => mod.FaWhatsapp));
const FaPhone = dynamic(() => import('react-icons/fa').then((mod) => mod.FaPhone));
// استيراد المكون مع تعطيل الـ SSR
const MapComponent = dynamic(() => import('@/components/MapComponent'), { 
  ssr: false,
  loading: () => <p>جاري تحميل الخريطة...</p>
})

// بيانات مناطق التغطية
const coverageAreas = [
  { name: 'وسط جدة', response: '15-20 دقيقة' },
  { name: 'شمال جدة', response: '20-25 دقيقة' },
  { name: 'جنوب جدة', response: '20-25 دقيقة' },
  { name: 'شرق جدة', response: '25-30 دقيقة' },
  { name: 'غرب جدة', response: '15-20 دقيقة' },
  { name: 'أبحر الشمالية', response: '30-35 دقيقة' },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false); // إضافة حالة للتحكم في التأخير


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // بعد ثانية، نغير حالة `isLoaded` لتطبيق التدرج
    }, 3000); // تأخير 3 ثانية
    return () => clearTimeout(timer); // تنظيف المؤقت
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // تأخير 3 ثوانٍ
    return () => clearTimeout(timer);
  }, []);

  return (
    /* ${amiri.className} */
    <div className={` bg-gray-100 min-h-screen text-right`} dir="rtl">
      {/* أزرار الاتصال الثابتة */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
        <a 
          href="tel:0535142000" 
          title="اجراء مكالمة هاتفية"
          className="bg-blue-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-4 rounded-full flex items-center transition duration-300 hover:scale-105"
        >
          <FaPhone className="ml-2" />
        </a>
        <a 
          href="https://wa.me/966535142000?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة" 
          title="الذهاب الى محادثة واتساب"
          className="bg-green-500 text-white p-4 rounded-full flex items-center hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="ml-2 size-5" />
        </a>
      </div>

      {/* Header */}
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mt-4 w-full flex justify-center">
            <SocialMediaButtons />
          </div>
        <section className="text-center mb-20">
          <h1 
            className={`${isLoaded ? 'text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text' : 'text-xl font-bold mb-4 text-blue-600'}`}
          >
            سطحة جدة لنقل وسحب السيارات المتعطلة
          </h1>
          <p className={`${isLoaded ?'text-xl text-gray-700 mb-6' : 'text-lg text-gray-600 mb-6'}`}>سطحة جدة هي خدمة سطحة سريعة وموثوقة على مدار الساعة</p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            
          <a 
              href="tel:0535142000" 
              title="اجراء مكالمة هاتفية"
              className="bg-blue-600 hover:from-indigo-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full flex items-center transition duration-300 hover:scale-105"
              aria-label="اتصل الآن على الرقم 0535142000"
            >
              <FaPhone className="ml-2" />
              اتصل الآن
            </a>

            <a 
              href="https://wa.me/966535142000?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة" 
              title="الذهاب الى محادثة واتساب"
              className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-full flex items-center hover:bg-green-600 transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب للحصول على خدمة سطحة"
            >
              <FaWhatsapp className="ml-2 size-5" />
              واتساب
            </a>
          </div>
        </section>

        {/* SearchBar Section */}
        <section className="mb-12">
          <SearchBar />
        </section>

        {/* New Section: سطحات جدة */}
        <section className="mb-12 text-gray-900">
          <h2 className="text-gray-900 text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            سطحات جدة - اختر حيك
          </h2>
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-6 text-center">
            صفحة سطحات جدة تتيح لك اختيار خدمة السطحة بناءً على الحي الذي تتواجد فيه. ببساطة، اختر حيك للحصول على اقرب سطحة من موقعك تقدم خدمة نقل
            سريعة وموثوقة في منطقتك.
          </p>
          <Link href="/satahat-jeddah" className="inline-flex items-center bg-green-500 text-white px-7 py-2 rounded-full hover:bg-green-600 transition duration-300">
              <FaBuilding className="ml-2" />
              اختر حيك الان
              <ArrowLeft className="mr-3 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* خدماتنا Section */}
        <section id="خدماتنا" className="mb-12">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">خدماتنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Link href="/services/car-transport" className="bg-white p-6 rounded-lg shadow-md shadow-inner hover:shadow-lg transition duration-300 flex items-center">
              <div>
                <div className="flex items-center">
                  <Car className="text-lg text-blue-500 mb-2" />
                  <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">نقل السيارات</h4>
                </div>
                <p className="text-md text-gray-700 font-semibold text-center">أقرب سطحة في جدة لنقل سريع وآمن لسيارتك إلى أي مكان في جدة</p>
              </div>
              <Image
                src="/images/satha2.webp"
                alt="سطحة جدة لنقل السيارات في مدينة جدة"
                title="سطحة جدة اقرب سطحة لنقل وسحب السيارات المتعطلة"
                width={100}
                height={100}
                className="rounded-lg shadow-md mr-2"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
            </Link>
            <Link href="/services/car-towing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
              <div>
                <div className="flex items-center">
                  <Axis3d className="text-lg text-blue-500 mb-2" />
                  <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">سحب السيارات المتعطلة</h4>
                </div>
                <p className="text-md text-gray-700 font-semibold text-center">سطحة جدة أقرب خدمة سحب للسيارات المتعطلة بسرعة واحترافية</p>
              </div>
              <Image
                className="rounded-lg shadow-md mr-3 "
                src="/images/satha6.webp"
                alt="سطحة جدة لسحب السيارات المتعطلة"
                title="سطحة جدة تحت خدمة نقل وسحب السيارات المتعطلة"
                width={100}
                object-fit="cover"
                height={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
            </Link>
            <Link href="/services/car-unlocking" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
              <div>
                <div className="flex items-center">
                  <Key className="text-lg text-blue-500 mb-2" />
                  <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">فتح أبواب السيارات المقفلة</h4>
                </div>
                <p className="text-md text-gray-700 font-semibold text-center">أقرب سطحة في جدة لفتح أبواب سيارتك المقفلة بدون أي أضرار</p>
              </div>
              <Image
                src="/images/satha7.webp"
                alt="سطحة جدة لفتح ابواب السيارات المقفلة"
                title="سطحة جدة لفتح أبواب السيارات المقفلة"
                width={100}
                height={100}
                object-fit="cover"
                className="rounded-lg shadow-md mr-3"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
            </Link>
          </div>
          
          <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-[70] bg-gradient-to-r from-green-600 to-blue-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 shadow-lg transform transition duration-300 hover:scale-105 "
          >
            <Link href="/services" className="flex items-center">
                عرض جميع الخدمات
                <ArrowLeft className="mr-2 h-5 w-5" />
             
            </Link>
          </Button>
        </div>
        </section>

        {/* قسم دليل جدة للسائقين */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">دليل جدة للسائقين</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              هل أنت جديد في جدة أو تحتاج إلى معلومات حول القيادة في المدينة؟ تصفح دليلنا الشامل للسائقين في جدة للحصول على معلومات قيمة عن حركة المرور، الطرق الرئيسية، ونصائح مفيدة.
            </p>
            <Link href="/jeddah-drivers-guide" className="inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              <FaBook className="ml-2" />
              تصفح دليل جدة للسائقين
            </Link>
          </div>
        </section>

        {/* قسم أحياء جدة */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">أحياء جدة</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              تعرف على أحياء جدة المختلفة وخصائصها الفريدة. سواء كنت تبحث عن سكن أو ترغب في استكشاف المدينة، ستجد معلومات قيمة عن كل حي.
            </p>
            <Link href="/jeddah-neighborhoods" className="inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
              <FaBuilding className="ml-2" />
              استكشف أحياء جدة
            </Link>
          </div>
        </section>

        {/* من نحن Section */}
        <section id="من نحن" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">من نحن</h3>
          <p className="text-lg text-gray-700 mb-4">
            سطحة جدة هي سطحة رائدة في مجال خدمات السيارات في جدة. تقدم خدمات سريعة وموثوقة لنقل وسحب السيارات المتعطلة وفتح أبواب السيارات المقفلة. فريقنا من الفنيين المهرة جاهز للمساعدة على مدار الساعة.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>خبرة أكثر من 10 سنوات في خدمات السيارات</li>
            <li>فريق متخصص ومدرب على أحدث التقنيات</li>
            <li>خدمة عملاء متميزة وسرعة في الاستجابة</li>
            <li>تغطية شاملة لجميع أنحاء جدة</li>
            <li>أسعار مناسبة ورخيصة</li>
          </ul>
        </section>

        {/* قسم التغطية الجغرافية */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">التغطية الجغرافية</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {coverageAreas.slice(0, 6).map((area, index) => (
                <motion.div 
                  key={index}
                  className="text-gray-700 bg-gray-100 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="font-semibold text-lg mb-2">{area.name}</h4>
                  <p className="text-sm text-gray-600">
                    <Clock className="inline mr-2 text-blue-500" />
                    {area.response}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-2 px-6 shadow-lg transform transition duration-300 hover:scale-105"
              >
                <Link href="/coverage" className="flex items-center justify-center">
                  عرض جميع مناطق التغطية
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section id="مناطق الخدمة" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">مناطق الخدمة</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Suspense fallback={<div>جاري تحميل الخريطة...</div>}>
              <MapComponent />
            </Suspense>
          </div>
        </section>

        {/* اتصل بنا Section */}
        <section id="اتصل بنا" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">اتصل بنا</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-900">سطحة جدة هنا لمساعدتك على مدار الساعة. لا تتردد في الاتصال بنا لأي استفسار أو خدمة.</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 text-2xl ml-2" />
                <span className="text-gray-900">واتساب: 966535142000</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-500 text-2xl ml-2" />
                <span className="text-gray-900">هاتف: 0535142000</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-red-500 text-2xl ml-2" />
                <span className="text-gray-900">العنوان: جدة، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-orange-500 text-2xl ml-2" />
                <span className="text-gray-900">نحن متاحون على مدار الساعة</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="آراء عملاؤنا" className="mb-12">
          <Testimonials />
        </section>

        {/* FAQ Section */}
        <section className="mb-16 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">الأسئلة الشائعة</h3>
          <p className="text-lg text-gray-700 mb-4">هل لديك أسئلة حول خدماتنا؟ تفضل بزيارة صفحة الأسئلة الشائعة للحصول على إجابات لأكثر الأسئلة شيوعًا.</p>
          <Link href="/faq" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
            الأسئلة الشائعة
          </Link>
        </section>
        
        {/* Blog Section */}
        <section className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">المدونة</h3>
          <p className="text-lg text-gray-700 mb-4">اكتشف أحدث المقالات والنصائح المفيدة حول العناية بسيارتك وخدمات السطحة.</p>
          <Link href="/blog" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            تصفح المدونة
          </Link>
        </section>

      </main>
    </div>
  )
}

