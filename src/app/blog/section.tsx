import Link from 'next/link'
export default function BlogSection() {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">المدونة</h3>
            <p className="text-lg text-gray-700 mb-4">اكتشف أحدث المقالات والنصائح المفيدة حول العناية بسيارتك وخدمات السطحة.</p>
            <Link href="/blog" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              تصفح المدونة
            </Link>
        </div>
    )
}