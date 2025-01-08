'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaHome, FaBook, FaShieldAlt, FaSearch } from 'react-icons/fa'

const faqs = [
  {
    question: "ما هي خدمة سطحة جدة؟",
    answer: "سطحة جدة هي خدمة متخصصة في نقل وسحب السيارات المعطلة في مدينة جدة. نحن نقدم خدمة سريعة وموثوقة على مدار الساعة."
  },
  {
    question: "كيف يمكنني طلب خدمة سطحة؟",
    answer: "يمكنك طلب خدمة سطحة عن طريق الاتصال بنا على الرقم 0535142000 أو عبر تطبيقنا المتوفر على الهواتف الذكية."
  },
  {
    question: "ما هي تكلفة خدمة السطحة؟",
    answer: "تعتمد التكلفة على عدة عوامل مثل المسافة ون��ع السيارة. سنقدم لك تقديرًا دقيقًا للتكلفة عند طلب الخدمة."
  },
  {
    question: "هل خدمتكم متوفرة 24 ساعة؟",
    answer: "نعم، خدمة سطحة جدة متوفرة على مدار الساعة، 7 أيام في الأسبوع، لضمان تلبية احتياجاتك في أي وقت."
  },
  {
    question: "هل تقدمون خدمات أخرى غير سحب السيارات؟",
    answer: "نعم، بالإضافة إلى سحب السيارات، نقدم خدمات فتح الأبواب المغلقة وشحن البطاريات وتغيير الإطارات."
  },
  {
    question: "ما هي المناطق التي تغطيها خدمتكم؟",
    answer: "نغطي جميع أنحاء مدينة جدة وضواحيها. يمكنك الاطلاع على خريطة مناطق الخدمة على صفحتنا الرئيسية."
  },
  {
    question: "كم من الوقت يستغرق وصول السطحة؟",
    answer: "نسعى جاهدين للوصول في أسرع وقت ممكن، عادة في غضون 30 إلى 45 دقيقة، اعتمادًا على موقعك وحركة المرور."
  },
  {
    question: "هل يمكنني حجز خدمة السطحة مسبقًا؟",
    answer: "نعم، يمكنك حجز خدمة السطحة مسبقًا لنقل سيارتك في وقت محدد. يرجى الاتصال بنا لترتيب ذلك."
  },
  {
    question: "ما هي طرق الدفع المقبولة؟",
    answer: "نقبل الدفع النقدي وبطاقات الائتمان والدفع عبر التطبيقات الإلكترونية مثل Apple Pay وSTC Pay."
  },
  {
    question: "هل لديكم تأمين على السيارات أثناء النقل؟",
    answer: "نعم، جميع عمليات النقل مؤمنة بالكامل لضمان سلامة سيارتك."
  }
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const filtered = faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white py-12 px-4 sm:px-6 lg:px-8 -mt-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-10 flex justify-between items-center">
          <Link href="/" className="text-yellow-700 hover:text-yellow-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
          <div className="flex space-x-4 space-x-reverse">
            <Link href="/blog" className="text-yellow-700 hover:text-yellow-800 transition duration-300 flex items-center">
              <FaBook className="ml-1" />
              المدونة
            </Link>
            <Link href="/services" className="text-yellow-700 hover:text-yellow-800 transition duration-300 flex items-center">
              <FaShieldAlt className="ml-1" />
              الخدمات
            </Link>
          </div>
        </nav>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">الأسئلة الشائعة</h1>
            
            <div className="flex justify-center mb-6">
              <FaQuestionCircle className="text-5xl text-yellow-500" />
            </div>
            
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في الأسئلة الشائعة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-gray-700 w-full px-4 py-2 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-center w-full text-right focus:outline-none transition-colors duration-300 hover:bg-yellow-50 p-2 rounded-lg"
                  >
                    <h2 className="text-xl font-semibold text-gray-900">{faq.question}</h2>
                    {expandedIndex === index ? <FaChevronUp className="text-yellow-500" /> : <FaChevronDown className="text-yellow-500" />}
                  </button>
                  {expandedIndex === index && (
                    <p className="mt-2 pr-6 text-gray-600 bg-yellow-50 p-4 rounded-lg shadow-inner transition-all duration-300 ease-in-out">
                      {faq.answer}
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

