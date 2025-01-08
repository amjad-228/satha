'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { Suspense } from 'react'

// هذه الوظيفة ستحتاج إلى تنفيذ فعلي للبحث في محتوى الموقع
const searchContent = async (query: string) => {
  // هنا يمكنك تنفيذ البحث الفعلي في محتوى الموقع
  // هذا مجرد مثال بسيط
  const mockResults = [
    { title: 'خدمة سحب السيارات', url: '/services/car-towing' },
    { title: 'خدمة فتح أبواب السيارات', url: '/services/car-unlocking' },
    { title: 'أسعار خدماتنا', url: '/pricing' },
    { title: 'الأسئلة الشائعة', url: '/faq' },
  ]
  return mockResults.filter(result => 
    result.title.toLowerCase().includes(query.toLowerCase())
  )
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <SearchResults />
    </Suspense>
  )
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<Array<{ title: string, url: string }>>([])

  useEffect(() => {
    const fetchResults = async () => {
      const searchResults = await searchContent(query)
      setResults(searchResults)
    }
    fetchResults()
  }, [query])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaArrowLeft className="ml-2" />
            العودة إلى الصفحة الرئيسية
          </Link>
        </nav>

        <h1 className="text-3xl font-bold mb-6">نتائج البحث عن: {query}</h1>

        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                <Link href={result.url} className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">لم يتم العثور على نتائج لهذا البحث.</p>
        )}
      </div>
    </div>
  )
}
