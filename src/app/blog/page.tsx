'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaTag, FaChevronRight, FaSearch, FaHome, FaShieldAlt, FaLightbulb } from 'react-icons/fa'
import { article1 } from './articles/article1'
import { article2 } from './articles/article2'
import { article3 } from './articles/article3'
import { article4 } from './articles/article4'
import { ArticleType } from './types'

const articles: ArticleType[] = [article1, article2, article3, article4]

const categories = ['الكل', 'نصائح', 'أمان', 'صيانة']

export default function BlogPage() {
  const [posts, setPosts] = useState<ArticleType[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  useEffect(() => {
    setPosts(articles)
  }, [])

  const filteredPosts = posts.filter(post =>
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'الكل' || post.category === selectedCategory)
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8 -mt-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-10 flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaHome className="ml-1" />
            الرئيسية
          </Link>
          <div className="flex space-x-4 space-x-reverse">
            <Link href="/services" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
              <FaShieldAlt className="ml-1" />
              الخدمات
            </Link>
            <Link href="/faq" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
              <FaLightbulb className='ml-1'/>
              الأسئلة الشائعة
            </Link>
          </div>
        </nav>
        
        <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">مدونة سطحة جدة</h1>
        
        {/* حقل البحث وعوامل التصفية */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              className="w-full p-3 pr-10 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>
          <div className="flex space-x-2 space-x-reverse">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* قائمة المقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover transition duration-300 hover:opacity-80"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <FaCalendar className="ml-2 text-blue-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaTag className="ml-2 text-green-500" />
                    {post.category}
                  </span>
                </div>
                <Link href={`/blog/${post.id}`} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300 group">
                  اقرأ المزيد
                  <FaChevronRight className="mr-2 transform group-hover:translate-x-1 transition duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

