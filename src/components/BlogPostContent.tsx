'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaTag, FaArrowLeft, FaShare } from 'react-icons/fa'
import { ArticleType } from '@/app/blog/types'
import styles from '@/app/blog/blogPost.module.css'

export default function BlogPostContent({ post }: { post: ArticleType }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaArrowLeft className="ml-2" />
            العودة إلى المدونة
          </Link>
        </nav>

        <article className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <FaCalendar className="ml-2 text-blue-500" />
                {post.date}
              </span>
              <span className="flex items-center">
                <FaTag className="ml-2 text-green-500" />
                {post.category}
              </span>
            </div>
            {isMounted ? (
              <div 
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className={styles.articleContent}>جاري تحميل المحتوى...</div>
            )}
          </div>
        </article>

        {isMounted && (
          <div className="mt-8">
            <button
              onClick={handleShare}
              className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              <FaShare className="ml-2" />
              مشاركة المقال
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

