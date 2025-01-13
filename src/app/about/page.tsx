'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHome, FaEye, FaFlag, FaHeart, FaBullseye, FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function AboutPage() {
  // Explicitly define the type of activeSection as one of the keys of content
  const [activeSection, setActiveSection] = useState<'about' | 'vision' | 'mission' | 'values' | 'goals'>('about')

  const sections = [
    { id: 'about', title: 'من نحن', icon: FaHome },
    { id: 'vision', title: 'رؤيتنا', icon: FaEye },
    { id: 'mission', title: 'رسالتنا', icon: FaFlag },
    { id: 'values', title: 'قيمنا', icon: FaHeart },
    { id: 'goals', title: 'أهدافنا', icon: FaBullseye },
  ]

  const content = {
    about: {
      title: 'من نحن',
      text: 'نحن في سطحة جدة نفخر بكوننا الشريك الموثوق به في خدمات نقل وسحب السيارات في مدينة جدة. منذ تأسيسنا، نسعى جاهدين لتقديم خدمات عالية الجودة وسريعة الاستجابة لعملائنا الكرام. فريقنا المتخصص مجهز بأحدث التقنيات والمعدات لضمان سلامة وكفاءة عملية نقل سيارتك.',
    },
    vision: {
      title: 'رؤيتنا',
      text: 'نطمح أن نكون الخيار الأول والأفضل في مجال خدمات نقل وسحب السيارات في جدة والمملكة العربية السعودية. نسعى لتحقيق التميز من خلال الابتكار المستمر وتقديم خدمات تفوق توقعات عملائنا.',
    },
    mission: {
      title: 'رسالتنا',
      text: 'مهمتنا هي توفير خدمات نقل وسحب سيارات آمنة وموثوقة وسريعة لجميع عملائنا. نلتزم بتقديم حلول مخصصة تلبي احتياجات كل عميل، مع الحفاظ على أعلى معايير الجودة والسلامة في كل عملية.',
    },
    values: {
      title: 'قيمنا',
      text: 'نؤمن بالنزاهة والشفافية في جميع تعاملاتنا. نضع رضا العملاء في صميم عملنا، ونسعى دائمًا للتحسين والتطوير. نحترم البيئة ونلتزم بممارسات العمل المستدامة. نقدر موظفينا ونستثمر في تطويرهم المهني.',
    },
    goals: {
      title: 'أهدافنا',
      text: 'نهدف إلى توسيع نطاق خدماتنا لتغطية جميع مناطق المملكة. نسعى لتطوير تطبيقات ذكية لتسهيل طلب خدماتنا. نعمل على تقليل وقت الاستجابة لطلبات العملاء. نهدف لزيادة رضا العملاء من خلال التحسين المستمر لجودة خدماتنا.',
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          تعرف على سطحة جدة
        </h1>
        <div className="flex justify-center space-x-4 space-x-reverse mb-14">
            
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

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar navigation */}
          <nav className="md:w-1/4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id as 'about' | 'vision' | 'mission' | 'values' | 'goals')}
                    className={`w-full text-right px-4 py-2 rounded-md transition duration-300 flex items-center ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <section.icon className="text-xl ml-3" />
                    <span className="ml-2">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main content */}
          <main className="md:w-3/4">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{content[activeSection].title}</h2>
              <p className="text-gray-700 leading-relaxed">{content[activeSection].text}</p>
            </motion.div>
          </main>
        </div>

        {/* Timeline section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
            رحلتنا
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-1/2 h-full w-0.5 bg-blue-300"></div>
            
            {/* Timeline items */}
            {[
              { year: '2016', event: 'تأسيس سطحة جدة' },
              { year: '2018', event: 'توسيع نطاق الخدمات لتشمل جميع أنحاء جدة' },
              { year: '2021', event: 'توسيع نطاق الخدمات لتشمل أنحاء مدن المملكة' },
              { year: '2024', event: 'إطلاق موقع سطحة جدة على الويب' },
            ].map((item, index) => (
              <div key={index} className={`flex items-center justify-${index % 2 === 0 ? 'start' : 'end'} mb-8`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-left'}`}>
                  <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md ">
                    <h3 className="font-bold">{item.year}</h3>
                    <p>{item.event}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
