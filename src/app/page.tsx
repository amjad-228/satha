'use client'

//import { Amiri } from 'next/font/google' 
import dynamic from 'next/dynamic';
import {FaCar, FaTools, FaMapMarkerAlt, FaClock, FaArrowLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button'


/*const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
})*/
const FaWhatsapp = dynamic(() => import('react-icons/fa').then((mod) => mod.FaWhatsapp));
const FaPhone = dynamic(() => import('react-icons/fa').then((mod) => mod.FaPhone));


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false); // إضافة حالة للتحكم في التأخير

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // بعد ثانية، نغير حالة `isLoaded` لتطبيق التدرج
    }, 3000); // تأخير 3 ثانية
    return () => clearTimeout(timer); // تنظيف المؤقت
  }, []);

  return (
    /* ${amiri.className} */
    <div className={` bg-gray-100 min-h-screen text-right`} dir="rtl">
      {/* أزرار الاتصال الثابتة */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
        <a 
          href="tel:0535142000" 
          title="اجراء مكالمة هاتفية"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-4 rounded-full flex items-center transition duration-300 hover:scale-105"
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
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-800">سطحة جدة لنقل السيارات</h1>
          <button onClick={toggleMenu} className="md:hidden" aria-label="فتح القائمة" aria-expanded={isMenuOpen ? 'true' : 'false'}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`} role="navigation">
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4 md:space-x-reverse">
              <li><a href="#خدماتنا" title="الذهاب الى قسم خدماتنا" className="text-blue-600" aria-current={typeof window !== "undefined" && window.location.hash === "#خدماتنا" ? "page" : undefined}>خدماتنا</a></li>
              <li><a href="#من نحن" title="الذهاب الى قسم من نحن" className="text-blue-600" aria-current={typeof window !== "undefined" && window.location.hash === "#من نحن" ? "page" : undefined}>من نحن</a></li>
              <li><a href="#اتصل بنا" title="الذهاب الى قسم اتصل بنا" className="text-blue-600" aria-current={typeof window !== "undefined" && window.location.hash === "#اتصل بنا" ? "page" : undefined}>اتصل بنا</a></li>
              <li><Link href="/faq" title="عرض الأسئلة الشائعة" className="text-blue-600 hover:text-yellow-600 transition duration-300">الأسئلة الشائعة</Link></li>
              <li><Link href="/blog" title="عرض المقالات" className="text-blue-600 hover:text-yellow-600 transition duration-300">المقالات</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 
            className={`${isLoaded ? 'text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text' : 'text-xl font-bold mb-4 text-blue-600'}`}
          >
            سطحة جدة لنقل وسحب السيارات المتعطلة
          </h2>
          <p className={`${isLoaded ?'text-xl text-gray-700 mb-6' : 'text-lg text-gray-600 mb-6'}`}>سطحة جدة هي خدمة سطحة سريعة وموثوقة على مدار الساعة</p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            
          <a 
              href="tel:0535142000" 
              title="اجراء مكالمة هاتفية"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full flex items-center transition duration-300 hover:scale-105"
              aria-label="اتصل الآن على الرقم 0535142000"
            >
              <FaPhone className="ml-2" />
              اتصل الآن
            </a>

            <a 
              href="https://wa.me/966535142000?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة" 
              title="الذهاب الى محادثة واتساب"
              className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center hover:bg-green-600 transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب للحصول على خدمة سطحة"
            >
              <FaWhatsapp className="ml-2 size-5" />
              واتساب
            </a>
          </div>
        </section>

        {/* خدماتنا Section */}
        <section id="خدماتنا" className="mb-12">
          <h3 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">خدماتنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Link href="/services/car-transport" className="bg-white p-6 rounded-lg shadow-md shadow-inner hover:shadow-lg transition duration-300 flex items-center">
              <div>
                <div className="flex items-center">
                  <FaCar className="text-lg text-blue-500 mb-2" />
                  <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">نقل السيارات</h4>
                </div>
                <p className="text-md text-gray-700 font-semibold text-center">أقرب سطحة في جدة لنقل سريع وآمن لسيارتك إلى أي مكان في جدة</p>
              </div>
              <Image
                src="/images/satha2.webp"
                alt="سطحة جدة لنقل السيارات في مدينة جدة"
                title="سطحة جدة اقرب سطحة لنقل وسحب السيارات المتعطلة"
                object-fit="cover"
                width={100}
                height={100}
                className="rounded-lg shadow-md mr-2"
                loading = "lazy"
              />
            </Link>
            <Link href="/services/car-towing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
              <div>
                <div className="flex items-center">
                  <FaTools className="text-lg text-blue-500 mb-2" />
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
                loading = "lazy"
              />
            </Link>
            <Link href="/services/car-unlocking" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
              <div>
                <div className="flex items-center">
                  <FaTools className="text-lg text-blue-500 mb-2" />
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
                loading = "lazy"
              />
            </Link>
          </div>
          
          <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-[50] bg-gradient-to-r from-green-600 to-blue-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 shadow-lg transform transition duration-300 hover:scale-105 "
          >
            <Link href="/services" className="flex items-center">
                عرض جميع الخدمات
                <FaArrowLeft className="mr-2 h-5 w-5" />
             
            </Link>
          </Button>
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
                <FaMapMarkerAlt className="text-red-500 text-2xl ml-2" />
                <span className="text-gray-900">العنوان: جدة، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-orange-500 text-2xl ml-2" />
                <span className="text-gray-900">نحن متاحون على مدار الساعة</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">الأسئلة الشائعة</h3>
          <p className="text-lg text-gray-700 mb-4">هل لديك أسئلة حول خدماتنا؟ تفضل بزيارة صفحة الأسئلة الشائعة للحصول على إجابات لأكثر الأسئلة شيوعًا.</p>
          <Link href="/faq" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
            الأسئلة الشائعة
          </Link>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-4 text-center">
    <p>&copy; {new Date().getFullYear()} سطحة جدة. جميع الحقوق محفوظة.</p>
    <div className="mt-4 space-y-2 md:space-y-0 md:flex md:justify-center md:items-center">
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


    </div>
  )
}
