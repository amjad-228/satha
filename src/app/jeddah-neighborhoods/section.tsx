import Link from 'next/link'
import { Building } from 'lucide-react'
export default function JeddahNeighborhoodsSection() {
    return (
        <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">أحياء جدة</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                تعرف على أحياء جدة المختلفة وخصائصها الفريدة. سواء كنت تبحث عن سكن أو ترغب في استكشاف المدينة، ستجد معلومات قيمة عن كل حي.
              </p>
              <Link href="/jeddah-neighborhoods" className="inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                <Building className="ml-2" />
                استكشف أحياء جدة
              </Link>
            </div>
        </div>
    )
}