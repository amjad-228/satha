import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MapPin, Clock } from "lucide-react";
export default function ContactSection() {
    return (
        <div>
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
                  <MapPin className="text-red-500 text-2xl ml-2" />
                  <span className="text-gray-900">العنوان: جدة، المملكة العربية السعودية</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-orange-500 text-2xl ml-2" />
                  <span className="text-gray-900">نحن متاحون على مدار الساعة</span>
                </div>
              </div>
            </div>
        </div>
    )
}