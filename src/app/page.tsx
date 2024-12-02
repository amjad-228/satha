import { Amiri } from 'next/font/google'
import { FaWhatsapp } from 'react-icons/fa'

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white ${amiri.className}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            سطحة جدة
          </h1>
          <p className="text-xl md:text-2xl">لنقل وسحب السيارات المتعطلة وفتح أبواب السيارات المقفلة</p>
        </header>

        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
          <ul className="list-disc list-inside text-right">
            <li>نقل السيارات المتعطلة</li>
            <li>سحب السيارات</li>
            <li>فتح أبواب السيارات المقفلة</li>
            <li>خدمة على مدار 24 ساعة</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">سرعة الاستجابة</h3>
              <p>نصل إليك في أسرع وقت ممكن لتقديم المساعدة الفورية</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">فريق محترف</h3>
              <p>لدينا فريق من الفنيين المدربين والمحترفين لضمان جودة الخدمة</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">تغطية واسعة</h3>
              <p>نقدم خدماتنا في جميع أنحاء مدينة جدة والمناطق المحيطة</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">أسعار معقولة</h3>
              <p>نقدم خدماتنا بأسعار تنافسية ومعقولة لجميع العملاء</p>
            </div>
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اتصل بنا</h2>
          <p className="mb-4">نحن متاحون على مدار الساعة لمساعدتك</p>
          <a
            href="https://wa.me/+966XXXXXXXXX?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة%20في%20جدة"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            <FaWhatsapp className="mr-2" size={24} />
            تواصل معنا عبر واتساب
          </a>
        </section>

        <footer className="text-center text-sm">
          <p>© {new Date().getFullYear()} سطحة جدة - جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </main>
  )
}

