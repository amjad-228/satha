'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaShieldAlt } from 'react-icons/fa'

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    collection: true,
    usage: true,
    protection: true,
    sharing: true,
    changes: true,
    contact: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">سياسة الخصوصية</h1>
            
            <div className="flex justify-center mb-6">
              <FaShieldAlt className="text-5xl text-blue-500" />
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg text-center">
                مرحبًا بك في سياسة الخصوصية الخاصة بـ سطحة جدة. نحن نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية.
              </p>
              
              {[
                { key: 'collection', title: 'جمع المعلومات', content: 'نقوم بجمع المعلومات التي تقدمها لنا عند استخدام خدماتنا، مثل الاسم ورقم الهاتف وموقع السيارة.' },
                { key: 'usage', title: 'استخدام المعلومات', content: 'نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والتواصل معك بخصوص طلبك.' },
                { key: 'protection', title: 'حماية المعلومات', content: 'نتخذ إجراءات أمنية لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف.' },
                { key: 'sharing', title: 'مشاركة المعلومات', content: 'لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا إذا كان ذلك ضروريًا لتقديم خدماتنا أو بموجب القانون.' },
                { key: 'changes', title: 'تغييرات على سياسة الخصوصية', content: 'قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية عن طريق نشر إشعار على موقعنا.' },
                { key: 'contact', title: 'اتصل بنا', content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على الرقم 0535142000.' },
              ].map(({ key, title, content }) => (
                <div key={key} className="border-t border-gray-200 pt-4">
                  <button
                    onClick={() => toggleSection(key)}
                    className="flex justify-between items-center w-full text-right focus:outline-none transition-colors duration-300 hover:bg-blue-50 p-2 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    {expandedSections[key] ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
                  </button>
                  {expandedSections[key] && (
                    <p className="mt-2 pr-6 text-gray-600 bg-blue-50 p-4 rounded-lg shadow-inner">
                      {content}
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

