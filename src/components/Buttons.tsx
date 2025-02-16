import { FaPhone, FaWhatsapp } from "react-icons/fa";
export function Buttons() {
    return (
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
    )
}