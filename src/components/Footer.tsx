'use client'

import Link from 'next/link'
import { SocialMediaButtons } from '@/components/SocialMediaButtons'

const Footer = () => {

  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">سطحة جده</h3>
            <p className="text-indigo-200">أقرب خدمة سحب سيارات في جده</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
            <ul className="space-y-2">
              <li><Link href="/" className="text-indigo-200 hover:text-white">الرئيسية</Link></li>
              <li><Link href="/satahat-jeddah" className="text-indigo-200 hover:text-white">سطحات جدة</Link></li>
              <li><Link href="/services" className="text-indigo-200 hover:text-white">خدماتنا</Link></li>
              <li><Link href="/jeddah-drivers-guide" className="text-indigo-200 hover:text-white">دليل جدة للسائقين</Link></li>
              <li><Link href="/jeddah-neighborhoods" className="text-indigo-200 hover:text-white">أحياء جدة</Link></li>
              <li><Link href="/about" className="text-indigo-200 hover:text-white">من نحن</Link></li>
              
              </ul>
              </div>
              <ul className="space-y-2">
              <li><Link href="/coverage" className="text-indigo-200 hover:text-white">التغطية الجغرافية</Link></li>
              <li><Link href="/#مناطق الخدمة" className="text-indigo-200 hover:text-white">مناطق الخدمة</Link></li>
              <li><Link href="/contact" className="text-indigo-200 hover:text-white">اتصل بنا</Link></li>
              <li><Link href="/#آراء عملاؤنا" className="text-indigo-200 hover:text-white">آراء عملاؤنا</Link></li>
              <li><Link href="/faq" className="text-indigo-200 hover:text-white">الأسئلة الشائعة</Link></li>
              <li><Link href="/blog" className="text-indigo-200 hover:text-white">المدونة</Link></li>
            </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <p className="text-indigo-200">البريد الإلكتروني: sathatjida@gmail.com</p>
            <p className="text-indigo-200">الهاتف: 966535142000</p>
            <div className="mt-8 w-full flex justify-center">
            <SocialMediaButtons />
          </div>
          </div>
        </div>
        <div className="mt-4 pt-8 border-t border-indigo-800 text-center">
          <p className="text-indigo-200">&copy; 2025 سطحة جدة. جميع الحقوق محفوظة.</p>
        </div>
        <div className="mt-4 space-y-2 md:space-y-0 md:flex md:justify-center md:items-center text-center">
      <a 
        href="/privacy-policy" 
        title="عرض سياسة الخصوصية"
        className="text-white hover:text-gray-400 focus:outline focus:outline-2 focus:outline-gray-500"
        aria-label="عرض سياسة الخصوصية"
      >
        سياسة الخصوصية
      </a>
      <span className="mx-2 md:inline">|</span>
      <a 
        href="/terms-and-conditions" 
        title="عرض الشروط والاحكام"
        className="text-white hover:text-gray-400 focus:outline focus:outline-2 focus:outline-gray-500"
        aria-label="عرض الشروط والأحكام"
      >
      الشروط والأحكام
      </a>
    </div>
      </div>
    </footer>
  )
}

export default Footer

