'use client'

import { SocialMediaButtons } from '@/components/SocialMediaButtons'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react'

const FaWhatsapp = dynamic(() => import('react-icons/fa').then((mod) => mod.FaWhatsapp));
const FaPhone = dynamic(() => import('react-icons/fa').then((mod) => mod.FaPhone));

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false); // إضافة حالة للتحكم في التأخير

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // تأخير 3 ثوانٍ
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="mt-4 flex justify-center">
      <SocialMediaButtons />
      </div>
      <h1
        className={`${isLoaded ? 'text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text' : 'text-xl font-bold mb-4 text-blue-600'}`}
      >
        سطحة جدة لنقل وسحب السيارات المتعطلة
      </h1>
      <p className={`${isLoaded ? 'text-xl text-gray-700 mb-6' : 'text-lg text-gray-600 mb-6'}`}>سطحة جدة هي خدمة سطحة سريعة وموثوقة على مدار الساعة</p>
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
    </div>
  )
}