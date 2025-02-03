import Link from 'next/link'
import {NotepadText} from 'lucide-react'
export default function JeddahDriversGuideSection() {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">دليل جدة للسائقين</h3>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <p className="text-lg text-gray-700 mb-4">
                            هل أنت جديد في جدة أو تحتاج إلى معلومات حول القيادة في المدينة؟ تصفح دليلنا الشامل للسائقين في جدة للحصول على معلومات قيمة عن حركة المرور، الطرق الرئيسية، ونصائح مفيدة.
                          </p>
                          <Link href="/jeddah-drivers-guide" className="inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                            <NotepadText className="ml-2" />
                            تصفح دليل جدة للسائقين
                          </Link>
                        </div>
        </div>
    )
}