import { Suspense } from 'react'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          اتصل بنا
        </h1>
        <Suspense fallback={<div>جاري التحميل...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  )
}

