import Image from "next/image"
import { Phone, Clock, CreditCard, MapPin } from "lucide-react"

export default function ServiceDetails({ district }: { district: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <Image
          src="/images/satha2.webp"
          alt={`تقدم سطحة جدة خدمة نقل وسحب السيارت في مدينة جدة حي ${district}`}
          title={`تقدم سطحة جدة خدمة نقل وسحب السيارت في مدينة جدة حي ${district}`}
          className="rounded-lg shadow-md w-full h-64 object-cover"
          width={800}
          height={400}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">خدمات السطحة في حي {district}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-blue-500 mr-2 ml-2" />
          <span>خدمة على مدار الساعة</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-6 w-6 text-blue-500 mr-2 ml-2" />
          <span>تغطية كاملة لحي {district}</span>
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
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">اطلب سطحة الآن</h3>
        <p className="text-lg mb-4">نصلك في أقل من 30 دقيقة!</p>
        <a
          href="tel:0123456789"
          className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 inline-flex items-center"
        >
          <Phone className="h-5 w-5 mr-2 ml-2" />
          0123456789
        </a>
      </div>
    </div>
  )
}

