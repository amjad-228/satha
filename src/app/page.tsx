'use client'

import { Amiri } from 'next/font/google'
import { FaWhatsapp, FaPhone, FaCar, FaTools, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { useState } from 'react'

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'],
})

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`${amiri.className} bg-gray-100 min-h-screen text-right`} dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-800">سطحة جدة</h1>
          <button onClick={toggleMenu} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4 md:space-x-reverse">
              <li><a href="#services" className="text-blue-600">خدماتنا</a></li>
              <li><a href="#about" className="text-blue-600">من نحن</a></li>
              <li><a href="#contact" className="text-blue-600">اتصل بنا</a></li>
            </ul>
          </nav>
        </div>
        <meta name="description" content="خدمة سطحة في جميع أنحاء جدة" />
        <meta name="keywords" content="سطحة جدة, سطحة قريبة مني, موقع السطحة الذي أنشأه أمجد والحرق وهذه كلمة مفتاحية للتحقق" />
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            سطحة جدة لنقل وسحب السيارات المتعطلة
          </h2>
          <p className="text-xl text-gray-700 mb-6">خدمة سريعة وموثوقة على مدار الساعة</p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <a 
              href="https://wa.me/966535142000?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة" 
              className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center hover:bg-green-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="ml-2" />
              واتساب
            </a>
            <a 
              href="tel:0535142000" 
              className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center hover:bg-blue-600 transition duration-300"
            >
              <FaPhone className="ml-2" />
              اتصل الآن
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">خدماتنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCar className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-2xl text-gray-900 font-semibold mb-2">نقل السيارات</h4>
              <p  className="text-xl text-gray-700 font-semibold mb-2">نقل سريع وآمن لسيارتك إلى أي مكان في جدة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaTools className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-2xl text-gray-900 font-semibold mb-2">سحب السيارات المتعطلة</h4>
              <p className="text-xl text-gray-700 font-semibold mb-2">خدمة سحب للسيارات المتعطلة بسرعة واحترافية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaTools className="text-4xl text-blue-500 mb-4" />
              <h4 className="text-2xl text-gray-900 font-semibold mb-2">فتح أبواب السيارات المقفلة</h4>
              <p className="text-xl text-gray-700 font-semibold mb-2">فتح أبواب سيارتك المقفلة بدون أي أضرار</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">من نحن</h3>
          <p className="text-lg text-gray-700 mb-4">
            نحن شركة رائدة في مجال خدمات السيارات في جدة. نقدم خدمات سريعة وموثوقة لنقل وسحب السيارات المتعطلة وفتح أبواب السيارات المقفلة. فريقنا من الفنيين المهرة جاهز لمساعدتك على مدار الساعة.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>خبرة أكثر من 10 سنوات في مجال خدمات السيارات</li>
            <li>فريق متخصص ومدرب على أحدث التقنيات</li>
            <li>خدمة عملاء متميزة وسرعة في الاستجابة</li>
            <li>تغطية شاملة لجميع أنحاء جدة</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">اتصل بنا</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4 text-gray-900">نحن هنا لمساعدتك على مدار الساعة. لا تتردد في الاتصال بنا لأي استفسار أو خدمة.</p>
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
                <FaMapMarkerAlt className="text-red-500 text-2xl ml-2" />
                <span  className="text-gray-900">العنوان: جدة، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-orange-500 text-2xl ml-2" />
                <span className="text-gray-900">ساعات العمل: 24/7</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} سطحة جدة. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

