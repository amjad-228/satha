import Image from "next/image";
import { Phone, Clock, CreditCard, MapPin } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
export function SatahatJeddahMain(name: string) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-gray-900">
        <h1 className="text-3xl font-semibold mb-4 text-center text-purple-900">سطحة جدة {name}</h1>
        <div className="mb-6">
          <Image
            src="/images/satha2.webp"
            alt={`تقدم سطحات جدة خدمة نقل وسحب السيارت في مدينة جدة حي ${name}`}
            title={`تقدم سطحات جدة خدمة نقل وسحب السيارت في مدينة جدة حي ${name}`}
            className="rounded-lg shadow-md w-full h-64 object-cover"
            width={800}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          />
        </div>
        <h2 className="text-2xl font-semibold">خدمات السطحة في حي {name}</h2>
        <h3 className="text-xl mb-6 mr-2">تقدم سطحات جدة خدمة نقل وسحب السيارت في مدينة جدة حي {name}</h3>
        <div className="bg-blue-100 p-4 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">اطلب سطحة الآن</h3>
          <p className="text-lg mb-4">نصلك في أقرب وقت!</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-blue-500 mr-2 ml-2" />
            <span>خدمة على مدار الساعة</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-blue-500 mr-2 ml-2" />
            <span>تغطية كاملة لحي {name}</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-blue-500 mr-2 ml-2" />
            <span>أسعار تنافسية</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-500 mr-2 ml-2" />
            <span>دعم فني متخصص</span>
          </div>
        </div>
      </div>
    )
}