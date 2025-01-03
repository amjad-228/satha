'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaFileContract } from 'react-icons/fa'

export default function TermsAndConditions() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    acceptance: true,
    description: true,
    responsibility: true,
    payments: true,
    cancellation: true,
    modifications: true,
    contact: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">الشروط والأحكام</h1>
            
            <div className="flex justify-center mb-6">
              <FaFileContract className="text-5xl text-green-500" />
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg text-center">
                مرحبًا بك في الشروط والأحكام الخاصة بـ سطحة جدة. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.
              </p>
              
              {[
                { key: 'acceptance', title: 'قبول الشروط', content: 'باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.' },
                { key: 'description', title: 'وصف الخدمة', content: 'نقدم خدمات سحب ونقل السيارات في مدينة جدة. نحن نسعى جاهدين لتقديم خدمة موثوقة وفعالة.' },
                { key: 'responsibility', title: 'المسؤولية', content: 'نحن نبذل قصارى جهدنا لضمان سلامة سيارتك أثناء النقل، ولكننا لا نتحمل المسؤولية عن أي أضرار ناتجة عن ظروف خارجة عن سيطرتنا.' },
                { key: 'payments', title: 'الرسوم والمدفوعات', content: 'يتم تحديد رسوم خدماتنا بناءً على المسافة ونوع الخدمة. سيتم إبلاغك بالتكلفة قبل بدء الخدمة.' },
                { key: 'cancellation', title: 'إلغاء الخدمة', content: 'يمكنك إلغاء الخدمة قبل وصول السطحة دون أي رسوم. قد يتم تطبيق رسوم إلغاء إذا تم إلغاء الخدمة بعد وصول السطحة.' },
                { key: 'modifications', title: 'تعديل الشروط', content: 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.' },
                { key: 'contact', title: 'اتصل بنا', content: 'إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا على الرقم 0535142000.' },
              ].map(({ key, title, content }) => (
                <div key={key} className="border-t border-gray-200 pt-4">
                  <button
                    onClick={() => toggleSection(key)}
                    className="flex justify-between items-center w-full text-right focus:outline-none transition-colors duration-300 hover:bg-green-50 p-2 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    {expandedSections[key] ? <FaChevronUp className="text-green-500" /> : <FaChevronDown className="text-green-500" />}
                  </button>
                  {expandedSections[key] && (
                    <p className="mt-2 pr-6 text-gray-600 bg-green-50 p-4 rounded-lg shadow-inner">
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

