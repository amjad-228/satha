'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'

const neighborhoods = [
  {
    id: 'albalad',
    name: 'البلد',
    description: 'المنطقة التاريخية في جدة، تشتهر بأسواقها التقليدية والعمارة الفريدة.',
    image: '/images/satha2.webp',
  },
  {
    id: 'alhamra',
    name: 'الحمراء',
    description: 'حي راقي يضم العديد من المطاعم الفاخرة والمتاجر الراقية.',
    image: '/images/satha2.webp',
  },
  {
    id: 'alnahda',
    name: 'النهضة',
    description: 'حي سكني هادئ، مناسب للعائلات ويحتوي على العديد من المدارس والحدائق.',
    image: '/images/satha2.webp',
  },
  {
    id: 'alshati',
    name: 'الشاطئ',
    description: 'حي ساحلي يتميز بشواطئه الجميلة والمطاعم البحرية.',
    image: '/images/satha2.webp',
  },
  {
    id: 'alsalamah',
    name: 'السلامة',
    description: 'حي حديث يضم العديد من المجمعات السكنية والمراكز التجارية.',
    image: '/images/satha2.webp',
  },
]

const JeddahNeighborhoods = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-green-600 hover:text-green-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          أحياء جدة
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            استكشف أحياء جدة المتنوعة والفريدة. كل حي له طابعه الخاص وميزاته التي تجعله مميزًا. سواء كنت تبحث عن منطقة سكنية هادئة أو حي نابض بالحياة، ستجد ما يناسبك في جدة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">اختر الحي</h2>
            <ul className="space-y-2">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood.id}>
                  <button
                    onClick={() => setSelectedNeighborhood(neighborhood)}
                    className={`w-full text-right px-4 py-2 rounded-md transition duration-300 ${
                      selectedNeighborhood.id === neighborhood.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {neighborhood.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            key={selectedNeighborhood.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-600">{selectedNeighborhood.name}</h2>
            <Image
              src={selectedNeighborhood.image}
              alt={selectedNeighborhood.name}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700 leading-relaxed">{selectedNeighborhood.description}</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            تواصل معنا للمساعدة في اختيار الحي المناسب
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JeddahNeighborhoods

