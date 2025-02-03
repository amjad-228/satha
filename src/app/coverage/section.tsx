import Link from 'next/link'
import { Clock, ArrowLeft } from "lucide-react"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button';
export default function CoverageSection() {
  const coverageAreas = [
    { name: 'سطحة شمال جدة'},
    { name: 'سطحة جنوب جدة'},
    { name: 'سطحة وسط جدة'},
    { name: 'سطحة شرق جدة'},
    { name: 'سطحة غرب جدة'},
  ]
    return (
        <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">التغطية الجغرافية</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {coverageAreas.slice(0, 6).map((area, index) => (
                  <motion.div
                    key={index}
                    className="text-gray-700 bg-gray-100 p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="font-semibold text-lg mb-2">{area.name}</h4>
                    <p className="text-sm text-gray-900">
                      <Clock className="inline mr-2 ml-1 text-blue-500" />
                      نصلك في أقرب وقت !
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-2 px-6 shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <Link href="/coverage" className="flex items-center justify-center">
                    عرض جميع مناطق التغطية
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
        </div>
    )
}