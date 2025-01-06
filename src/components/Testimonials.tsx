import { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Testimonial {
  id: number
  name: string
  text: string
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'أحمد', text: 'خدمة ممتازة وسريعة. وصلوا في الوقت المحدد وكانوا محترفين للغاية.' },
  { id: 2, name: 'فاطمة', text: 'أنقذوني عندما تعطلت سيارتي. أوصي بشدة بخدماتهم.' },
  { id: 3, name: 'محمد', text: 'سعر معقول وخدمة موثوقة. سأستخدمهم مرة أخرى إذا احتجت.' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">آراء عملائنا</h3>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
            <p className="text-lg mb-4 text-gray-700">{testimonials[currentIndex].text}</p>
            <p className="font-bold text-right text-blue-600">- {testimonials[currentIndex].name}</p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
            aria-label="السابق"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
            aria-label="التالي"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

