'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaTag, FaChevronRight, FaSearch } from 'react-icons/fa'

// نموذج لبيانات المقالات (في الواقع، ستأتي هذه البيانات من مصدر خارجي أو API)
const blogPosts = [
  {
    id: 1,
    title: 'كيفية التعامل مع أعطال السيارة المفاجئة',
    excerpt: 'تعرف على الخطوات الأساسية للتعامل مع الأعطال المفاجئة في سيارتك أثناء القيادة.',
    date: '2024-01-15',
    category: 'نصائح',
    image: '/images/satha1.webp'
  },
  {
    id: 2,
    title: 'أهمية الصيانة الدورية لسيارتك',
    excerpt: 'اكتشف كيف يمكن للصيانة الدورية أن تطيل عمر سيارتك وتوفر عليك الكثير من المال على المدى الطويل.',
    date: '2024-01-22',
    category: 'صيانة',
    image: '/images/satha1.webp'
  },
  {
    id: 3,
    title: 'نصائح للقيادة الآمنة في الأحوال الجوية السيئة',
    excerpt: 'تعلم كيفية القيادة بأمان في ظروف الطقس الصعبة مثل الأمطار الغزيرة والضباب.',
    date: '2024-01-29',
    category: 'سلامة',
    image: '/images/satha1.webp'
  },
]

const categories = ['الكل', 'نصائح', 'صيانة', 'سلامة']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    const filtered = blogPosts.filter(post => 
      (selectedCategory === 'الكل' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>
        
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">مدونة سطحة جدة</h1>
        
        {/* فلتر الفئات والبحث */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* قائمة المقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <FaCalendar className="ml-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaTag className="ml-2" />
                    {post.category}
                  </span>
                </div>
                <Link href={`/blog/${post.id}`} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300">
                  اقرأ المزيد
                  <FaChevronRight className="mr-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            لم يتم العثور على مقالات مطابقة لبحثك. حاول استخدام كلمات مفتاحية مختلفة.
          </div>
        )}
      </div>
    </div>
  )
}

