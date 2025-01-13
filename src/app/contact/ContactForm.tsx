'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { submitContactForm } from '../actions/contact'

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false })

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const searchParams = useSearchParams()

  useEffect(() => {
    const status = searchParams.get('status')
    if (status === 'success') {
      setFormStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } else if (status === 'error') {
      setFormStatus('error')
      setErrorMessage(searchParams.get('message') || 'حدث خطأ غير معروف')
    }
  }, [searchParams])

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
        setFormStatus('success')
      } else {
        console.error('فشل في إرسال الرسالة:', result.error)
        throw new Error(result.error || 'حدث خطأ غير معروف')
      }
    } catch (error: unknown) {
      console.error('خطأ في إرسال النموذج:', error)
      setFormStatus('error')
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('حدث خطأ غير معروف')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">معلومات الاتصال</h2>
        <div className="space-y-4 mb-12">
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
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {formStatus === 'success' ? (
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
        ) : formStatus === 'error' ? (
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
              تفاصيل الخطأ: {errorMessage}
            </p>
            <button
              onClick={() => setFormStatus('idle')}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              حاول مرة أخرى
            </button>
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

      <motion.div 
        className="md:col-span-2 bg-white p-4 rounded-lg shadow-md"
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
  )
}

