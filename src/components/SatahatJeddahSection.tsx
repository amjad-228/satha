import Link from 'next/link'
import { ArrowLeft, Building } from 'lucide-react' 
export default function SatahatJeddahSection() {
    return (
        <div>
            <h2 className="text-gray-900 text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              سطحات جدة - اختر حيك
            </h2>
            <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-6 text-center">
                صفحة سطحات جدة تتيح لك اختيار خدمة السطحة بناءً على الحي الذي تتواجد فيه. ببساطة، اختر حيك للحصول على اقرب سطحة من موقعك تقدم خدمة نقل
                سريعة وموثوقة في منطقتك.
              </p>
              <Link href="/satahat-jeddah" className="inline-flex items-center bg-green-500 text-white px-7 py-2 rounded-full hover:bg-green-600 transition duration-300">
                <Building className="ml-2" />
                اختر حيك الان
                <ArrowLeft className="mr-3 h-5 w-5" />
              </Link>
            </div>
        </div>
    )
}