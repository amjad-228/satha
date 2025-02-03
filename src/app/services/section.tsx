import Image from 'next/image'
import Link from 'next/link'
import { Car, Axis3d, Key, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function ServicesSection() {
    return (
        <div>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">خدماتنا</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <Link href="/services/car-transport" className="bg-white p-6 rounded-lg shadow-md shadow-inner hover:shadow-lg transition duration-300 flex items-center">
                    <div>
                        <div className="flex items-center">
                            <Car className="text-lg text-blue-500 mb-2" />
                            <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">نقل السيارات</h4>
                        </div>
                        <p className="text-md text-gray-700 font-semibold text-center">أقرب سطحة في جدة لنقل سريع وآمن لسيارتك إلى أي مكان في جدة</p>
                    </div>
                    <Image
                        src="/images/satha2.webp"
                        alt="سطحة جدة لنقل السيارات في مدينة جدة"
                        title="سطحة جدة اقرب سطحة لنقل وسحب السيارات المتعطلة"
                        width={100}
                        height={100}
                        className="rounded-lg shadow-md mr-2"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                    />
                </Link>
                <Link href="/services/car-towing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                    <div>
                        <div className="flex items-center">
                            <Axis3d className="text-lg text-blue-500 mb-2" />
                            <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">سحب السيارات المتعطلة</h4>
                        </div>
                        <p className="text-md text-gray-700 font-semibold text-center">سطحة جدة أقرب خدمة سحب للسيارات المتعطلة بسرعة واحترافية</p>
                    </div>
                    <Image
                        className="rounded-lg shadow-md mr-3 "
                        src="/images/satha6.webp"
                        alt="سطحة جدة لسحب السيارات المتعطلة"
                        title="سطحة جدة تحت خدمة نقل وسحب السيارات المتعطلة"
                        width={100}
                        object-fit="cover"
                        height={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                    />
                </Link>
                <Link href="/services/car-unlocking" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                    <div>
                        <div className="flex items-center">
                            <Key className="text-lg text-blue-500 mb-2" />
                            <h4 className="text-lg text-gray-900 font-semibold mr-3 mb-1">فتح أبواب السيارات المقفلة</h4>
                        </div>
                        <p className="text-md text-gray-700 font-semibold text-center">أقرب سطحة في جدة لفتح أبواب سيارتك المقفلة بدون أي أضرار</p>
                    </div>
                    <Image
                        src="/images/satha7.webp"
                        alt="سطحة جدة لفتح ابواب السيارات المقفلة"
                        title="سطحة جدة لفتح أبواب السيارات المقفلة"
                        width={100}
                        height={100}
                        object-fit="cover"
                        className="rounded-lg shadow-md mr-3"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                    />
                </Link>
            </div>

            <div className="flex justify-center">
                <Button
                    asChild
                    size="lg"
                    className="rounded-[70] bg-gradient-to-r from-green-600 to-blue-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 shadow-lg transform transition duration-300 hover:scale-105 "
                >
                    <Link href="/services" className="flex items-center">
                        عرض جميع الخدمات
                        <ArrowLeft className="mr-2 h-5 w-5" />

                    </Link>
                </Button>
            </div>
        </div>
    )
}