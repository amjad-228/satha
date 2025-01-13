'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaHome, FaPhone, FaWhatsapp } from 'react-icons/fa'

const neighborhoods = [
  {
    id: 'albalad',
    name: 'البلد',
    alt: 'الحي التاريخي في جدة - صورة لبلد جدة القديمة',
    title: 'صورة حي البلد التاريخي في جدة',
    description: 'يُعتبر حي البلد واحدًا من أقدم الأحياء في جدة وأكثرها شهرة. يمتاز بمبانيه التاريخية والأسواق التقليدية مثل سوق الندى و سوق العلوي، مما يجعله وجهة سياحية وثقافية رائعة. يُعرف حي البلد بأزقته الضيقة والمباني القديمة التي تعكس تاريخ جدة العريق.',
    image: '/images/صور-من-جدة/albalad-district-jeddah.webp',
  },
  {
    id: 'alandalus',
    name: 'الاندلس',
    alt: 'صورة لحي الأندلس في جدة',
    title: 'صورة حي الأندلس الفاخر في جدة',
    description: 'حي الأندلس هو من أرقى أحياء جدة، حيث يتميز بتطويره العمراني الحديث، والمجمعات السكنية الراقية. يحتوي الحي على العديد من المرافق التجارية، والمطاعم الفاخرة، والمراكز الصحية، مما يجعله من الوجهات المفضلة للسكان والمستثمرين في المدينة.',
    image: '/images/صور-من-جدة/alandalus-district-jeddah.webp',
  },
  {
    id: 'alhamra',
    name: 'الحمراء',
    alt: 'صورة لحي الحمراء في جدة',
    title: 'صورة حي الحمراء الراقي في جدة',
    description: 'يُعتبر حي الحمراء من الأحياء الراقية في جدة، ويتميز بموقعه المطل على البحر الأحمر. يحتوي على العديد من الفنادق الراقية، والمطاعم المميزة، ويعتبر وجهة مفضلة للعائلات والزوار الذين يبحثون عن إقامة فاخرة ومرافق ممتازة. يضم الحمراء أيضًا العديد من المجمعات التجارية.',
    image: '/images/صور-من-جدة/alhamra-district-jeddah.webp',
  },
  {
    id: 'alnahda',
    name: 'النهضة',
    alt: 'صورة لحي النهضة في جدة',
    title: 'صورة حي النهضة السكني في جدة',
    description: 'حي النهضة هو حي سكني يقع في وسط جدة، ويتميز بتنوعه من حيث المرافق والخدمات. يحتوي على العديد من المدارس، والمراكز التجارية، والمرافق الحكومية، ما يجعله مكانًا مثاليًا للعائلات التي تبحث عن الراحة والخدمات القريبة. يعتبر أيضًا حيًا حديثًا من حيث التطوير العمراني.',
    image: '/images/صور-من-جدة/alnahda-district-jeddah.webp',
  },
  {
    id: 'alshati',
    name: 'الشاطئ',
    alt: 'الواجهة البحرية لحي الشاطئ في جدة',
    title: 'صورة حي الشاطئ الساحلي في جدة',
    description: 'حي الشاطئ هو أحد أرقى أحياء جدة التي تطل على البحر الأحمر. يمتاز بإطلالاته البحرية الرائعة، والمنازل الفاخرة. الحي يحتوي على العديد من الشواطئ الخاصة والمرافق الترفيهية، وهو مقصد العديد من الزوار الباحثين عن الهدوء والاسترخاء بالقرب من البحر.',
    image: '/images/صور-من-جدة/alshatea-district-jeddah.webp',
  },
  {
    id: 'alsalamah',
    name: 'السلامة',
    alt: 'إطلالة على حي السلامة في جدة',
    title: 'صورة حي السلامة الحديث في جدة',
    description: 'يعد حي السلامة من الأحياء السكنية الهادئة في جدة، ويتميز بموقعه القريب من أبرز الطرق الرئيسية. يضم العديد من المدارس، والمراكز التجارية، والمرافق العامة التي تجعل منه مكانًا مثاليًا للعائلات. الحي معروف أيضًا بنظافته وهدوئه.',
    image: '/images/صور-من-جدة/alsalama-district-jeddah.webp',
  },
  {
    id: 'musharifah',
    name: 'مشرفة',
    alt: "صورة من حي مشرفة في جدة",
    title: "صورة حي مشرفة المركزي في جدة",
    description: "حي مشرفة هو حي سكني حيوي في جدة يتميز بتنوعه الثقافي والاجتماعي. يضم الحي العديد من الأسواق التجارية والمراكز الترفيهية. يعتبر حي مشرفة نقطة تواصل بين الأحياء القديمة والحديثة في جدة، وهو مقصد للعديد من الزوار والمقيمين.",
    image: '/images/صور-من-جدة/musharifah-district-jeddah.webp',
  },
  {
    id: 'alnaseem',
    name: 'النسيم',
    alt: "منطقة سكنية في حي النسيم جدة",
    title: "صورة حي النسيم الهادئ في جدة",
    description: "حي النسيم هو من الأحياء السكنية ذات الطبيعة الهادئة في جدة، ويتميز بتوافر الخدمات الأساسية والمرافق التعليمية والصحية. يعد مناسبًا للأسر التي تبحث عن بيئة سكنية مستقرة، ويضم الحي العديد من المنتزهات والمراكز التجارية الصغيرة.",
    image: '/images/صور-من-جدة/alnaseem-district-jeddah.webp',
  },
  {
    id: 'bani-malik',
    name: 'بني مالك',
    alt: "صورة لأحياء بني مالك في جدة",
    title: "صورة حي بني مالك الحيوي في جدة",
    description: "حي بني مالك يقع في الجزء الجنوبي من جدة ويعتبر من الأحياء التاريخية. يضم الحي العديد من الأسواق المحلية والمرافق الشعبية التي تمثل جزءًا من ثقافة المدينة. يشتهر هذا الحي بالحياة الاجتماعية النابضة والأنشطة المحلية.",
    image: '/images/صور-من-جدة/bani-malik-district-jeddah.webp',
  },
  {
    id: 'alworood',
    name: "الورود",
    alt: "جمال حي الورود في جدة",
    title: "صورة حي الورود السكني في جدة",
    description: "يعتبر حي الورود من الأحياء السكنية الهادئة التي تقع في شمال جدة. يتميز الحي بتوافر المساحات الخضراء، كما يضم العديد من المدارس والمراكز التجارية الصغيرة. يشهد الحي تطورًا ملحوظًا في السنوات الأخيرة ويعد مناسبًا للعائلات التي تبحث عن الاستقرار.",
    image: '/images/صور-من-جدة/alworood-district-jeddah.webp',
  },
  {
    id: 'alsharafia',
    name: "الشرفية",
    alt: "صورة لشوارع حي الشرفية في جدة",
    title: "صورة حي الشرفية القديم في جدة",
    description: "حي الشرفية هو حي تاريخي آخر في جدة يتميز بموقعه الاستراتيجي القريب من وسط المدينة. يشتهر بالأسواق الشعبية والأحياء السكنية القديمة. يعتبر مكانًا مميزًا للتسوق والأنشطة الثقافية، ويجذب الزوار الذين يرغبون في اكتشاف جدة القديمة وأصالتها.",
    image: '/images/صور-من-جدة/alsharafia-district-jeddah.webp',
  },
]

const JeddahNeighborhoods = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(neighborhoods[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-green-600 hover:text-green-800 transition duration-300 flex items-center">
            <FaHome className="ml-2" />
            الرئيسية
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          أحياء جدة
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <p className="text-lg text-gray-700 mb-4">
            استكشف أحياء جدة المتنوعة والفريدة. كل حي له طابعه الخاص وميزاته التي تجعله مميزًا. سواء كنت تبحث عن منطقة سكنية هادئة أو حي نابض بالحياة، ستجد ما يناسبك في جدة.
          </p>
        </div>

        <div className="flex justify-center space-x-4 space-x-reverse mb-14">
            
          <a 
              href="tel:0535142000" 
              title="اجراء مكالمة هاتفية"
              className="bg-blue-600 hover:from-indigo-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full flex items-center transition duration-300 hover:scale-105"
              aria-label="اتصل الآن على الرقم 0535142000"
            >
              <FaPhone className="ml-2" />
              اتصل الآن
            </a>

            <a 
              href="https://wa.me/966535142000?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة" 
              title="الذهاب الى محادثة واتساب"
              className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-full flex items-center hover:bg-green-600 transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب للحصول على خدمة سطحة"
            >
              <FaWhatsapp className="ml-2 size-5" />
              واتساب
            </a>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">اختر الحي</h2>
            <ul className="space-y-2">
              {neighborhoods.map((neighborhood) => (
                <li key={neighborhood.id}>
                  <button
                    onClick={() => setSelectedNeighborhood(neighborhood)}
                    className={`w-full text-right px-4 py-2 rounded-md transition duration-300 ${
                      selectedNeighborhood.id === neighborhood.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {neighborhood.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            key={selectedNeighborhood.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-600">{selectedNeighborhood.name}</h2>
            <Image
              src={selectedNeighborhood.image}
              alt={selectedNeighborhood.alt}
              title= {selectedNeighborhood.title}
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-md w-full h-64"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
            <br></br>
            <p className="text-gray-900 text-lg leading-relaxed text-center">{selectedNeighborhood.description}</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            تواصل معنا للمساعدة في اختيار الحي المناسب
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JeddahNeighborhoods

