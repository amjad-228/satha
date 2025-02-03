'use client'
import dynamic from 'next/dynamic';
import { Suspense } from 'react'
import Hero from '@/components/Hero'
import SatahatJeddahSection from '@/components/SatahatJeddahSection'
import JeddahNeighborhoodsSection from '@/app/jeddah-neighborhoods/section'
import ServicesSection from '@/app/services/section'
import JeddahDriversGuideSection from '@/app/jeddah-drivers-guide/section'
import AboutSection from '@/app/about/section'
import CoverageSection from '@/app/coverage/section'
import ContactSection from '@/app/contact/section'
import FaqSection from '@/app/faq/section'
import BlogSection from '@/app/blog/section'
import Testimonials from '@/components/Testimonials'
import SearchBar from '@/components/SearchBar'

const FaWhatsapp = dynamic(() => import('react-icons/fa').then((mod) => mod.FaWhatsapp));
const FaPhone = dynamic(() => import('react-icons/fa').then((mod) => mod.FaPhone));

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <p>جاري تحميل الخريطة...</p>
})

export default function Home() {
  return (
    
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
          <section className="text-center mb-20">
            <Hero />
          </section>

          {/* SearchBar Section */}
          <section className="mb-12">
            <SearchBar />
          </section>

          {/*قسم سطحات جدة */}
          <section className="mb-12 text-gray-900">
            <SatahatJeddahSection />
          </section>

          {/*قسم خدماتنا*/}
          <section id="خدماتنا" className="mb-12">
            <ServicesSection />
          </section>

          {/* قسم دليل جدة للسائقين */}
          <section className="mb-12">
            <JeddahDriversGuideSection />
          </section>

          {/* قسم أحياء جدة */}
          <section className="mb-12">
            <JeddahNeighborhoodsSection />
          </section>

          {/* من نحن Section */}
          <section id="من نحن" className="mb-12">
            <AboutSection />
          </section>

          {/* قسم التغطية الجغرافية */}
          <section className="mb-12">
            <CoverageSection />
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
            <ContactSection />
          </section>

          {/* Testimonials Section */}
          <section id="آراء عملاؤنا" className="mb-12">
            <Testimonials />
          </section>

          {/* FAQ Section */}
          <section className="mb-16 text-center">
            <FaqSection />
          </section>

          {/* Blog Section */}
          <section className="mb-12 text-center">
            <BlogSection />
          </section>

        </main>
      </div>
  
  )
}

