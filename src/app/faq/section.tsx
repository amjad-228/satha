import Link from 'next/link'
export default function FaqSection() {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text">الأسئلة الشائعة</h3>
            <p className="text-lg text-gray-700 mb-4">هل لديك أسئلة حول خدماتنا؟ تفضل بزيارة صفحة الأسئلة الشائعة للحصول على إجابات لأكثر الأسئلة شيوعًا.</p>
            <Link href="/faq" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
              الأسئلة الشائعة
            </Link>
        </div>
    )
}