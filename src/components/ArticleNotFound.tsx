import Link from 'next/link'
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa'

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <FaExclamationTriangle className="h-24 w-24 text-yellow-500 mb-4" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            عذراً، المقالة غير موجودة
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            يبدو أن المقالة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link 
            href="/blog"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            <FaArrowLeft className="ml-2" />
            العودة إلى صفحة المدونة
          </Link>
          <p className="text-sm text-gray-500">
            أو يمكنك البحث عن مقالات أخرى مثيرة للاهتمام في مدونتنا.
          </p>
        </div>
      </div>
    </div>
  )
}

