'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaHome, FaBook, FaShieldAlt } from 'react-icons/fa'

const faqs = [
  {
    question: "ما هي خدمة سطحة جدة؟",
    answer: "سطحة جدة هي خدمة متخصصة في نقل وسحب السيارات المعطلة في مدينة جدة. نحن نقدم خدمة سريعة وموثوقة على مدار الساعة."
  },
  {
    question: "كيف يمكنني طلب خدمة سطحة؟",
    answer: "يمكنك طلب خدمة سطحة عن طريق الاتصال بنا على الرقم 0535142000 أو عبر تطبيقنا المتوفر على الهواتف الذكية."
  },
  {
    question: "ما هي تكلفة خدمة السطحة؟",
    answer: "تعتمد التكلفة على عدة عوامل مثل المسافة ونوع السيارة. سنقدم لك تقديرًا دقيقًا للتكلفة عند طلب الخدمة."
  },
  {
    question: "هل خدمتكم متوفرة 24 ساعة؟",
    answer: "نعم، خدمة سطحة جدة متوفرة على مدار الساعة، 7 أيام في الأسبوع، لضمان تلبية احتياجاتك في أي وقت."
  },
  {
    question: "هل تقدمون خدمات أخرى غير سحب السيارات؟",
    answer: "نعم، بالإضافة إلى سحب السيارات، نقدم خدمات فتح الأبواب المغلقة وشحن البطاريات وتغيير الإطارات."
  }
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white py-12 px-4 sm:px-6 lg:px-8 -mt-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-10 flex justify-between items-center">
          <Link href="/" className="text-yellow-700 hover:text-yellow-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
          <div className="flex space-x-4 space-x-reverse">
            <Link href="/blog" className="text-yellow-700 hover:text-yellow-800 transition duration-300 flex items-center">
              <FaBook className="ml-1" />
              المدونة
            </Link>
            <Link href="/services" className="text-yellow-700 hover:text-yellow-800 transition duration-300 flex items-center">
              <FaShieldAlt className="ml-1" />
              الخدمات
            </Link>
          </div>
        </nav>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">الأسئلة الشائعة</h1>
            
            <div className="flex justify-center mb-6">
              <FaQuestionCircle className="text-5xl text-yellow-500" />
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-center w-full text-right focus:outline-none transition-colors duration-300 hover:bg-yellow-50 p-2 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold text-gray-900">{faq.question}</h2>
                    {expandedIndex === index ? <FaChevronUp className="text-yellow-500" /> : <FaChevronDown className="text-yellow-500" />}
                  </button>
                  {expandedIndex === index && (
                    <p className="mt-2 pr-6 text-gray-600 bg-yellow-50 p-4 rounded-lg shadow-inner transition-all duration-300 ease-in-out">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

