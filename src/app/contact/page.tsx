'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { submitContactForm } from '../actions/contact'

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false })

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  useEffect(() => {
    if (status === 'success') {
      // إعادة تعيين حقول النموذج بعد الإرسال الناجح
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('message', message)

      console.log('بدء إرسال النموذج...')
      const result = await submitContactForm(formData)
      console.log('نتيجة إرسال النموذج:', result)

      if (result.success) {
        console.log('تم إرسال الرسالة بنجاح')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        window.location.href = '/contact?status=success'
      } else {
        console.error('فشل في إرسال الرسالة:', result.error)
        throw new Error(result.error || 'حدث خطأ غير معروف')
      }
    } catch (error) {
      console.error('خطأ في إرسال النموذج:', error)
      if (error instanceof Error) {
        // إذا كان من النوع Error، استخدم message الخاص به
        window.location.href = `/contact?status=error&message=${encodeURIComponent(error.message)}`
      } else {
        // إذا كان الخطأ غير معروف، قدم رسالة خطأ عامة
        window.location.href = `/contact?status=error&message=${encodeURIComponent('حدث خطأ غير معروف')}`
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          اتصل بنا
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* معلومات الاتصال - لم يتغير */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">معلومات الاتصال</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <FaWhatsapp className="text-green-500 text-2xl ml-2" />
                <span>واتساب: 966535142000</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaPhone className="text-blue-500 text-2xl ml-2" />
                <span>هاتف: 0535142000</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="text-blue-500 text-2xl ml-2" />
                <span>البريد الإلكتروني: info@sathaapp.com</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="text-red-500 text-2xl ml-2" />
                <span>العنوان: جدة، المملكة العربية السعودية</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaClock className="text-orange-500 text-2xl ml-2" />
                <span>نحن متاحون على مدار الساعة</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold text-green-600 mb-4">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-gray-600 mb-6">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
                <Link href="/"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  العودة للصفحة الرئيسية
                </Link>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold text-red-600 mb-4">حدث خطأ أثناء إرسال رسالتك</h3>
                <p className="text-gray-600 mb-6">
                  نعتذر عن هذا الخطأ. يرجى المحاولة مرة أخرى لاحقاً أو الاتصال بنا مباشرة.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  تفاصيل الخطأ: {searchParams.get('message') || 'خطأ غير معروف'}
                </p>
                <Link href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  حاول مرة أخرى
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">موقعنا</h2>
          <div className="h-[400px]">
            <MapComponent />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

