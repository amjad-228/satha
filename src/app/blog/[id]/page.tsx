'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaCalendar, FaTag, FaArrowLeft, FaShare } from 'react-icons/fa'
import { useState, useEffect } from 'react'

// نموذج لبيانات المقالات (في الواقع، ستأتي هذه البيانات من مصدر خارجي أو API)
const blogPosts = [
  {
    id: 1,
    title: 'كيفية التعامل مع أعطال السيارة المفاجئة',
    content: `
      <p>تعد أعطال السيارة المفاجئة من الأمور المزعجة التي قد يواجهها أي سائق. في هذا المقال، سنستعرض بعض الخطوات الأساسية للتعامل مع هذه المواقف بأمان وفعالية.</p>
      
      <h2>1. الحفاظ على الهدوء</h2>
      <p>أول خطوة هامة هي الحفاظ على هدوئك. الذعر قد يؤدي إلى اتخاذ قرارات خاطئة.</p>
      
      <h2>2. التحرك إلى مكان آمن</h2>
      <p>إذا كانت سيارتك لا تزال قادرة على الحركة، حاول الانتقال إلى جانب الطريق أو منطقة آمنة بعيدة عن حركة المرور.</p>
      
      <h2>3. تشغيل أضواء الطوارئ</h2>
      <p>قم بتشغيل أضواء الطوارئ لتنبيه السائقين الآخرين بوجود مشكلة.</p>
      
      <h2>4. تقييم الوضع</h2>
      <p>حاول تحديد المشكلة إذا كان ذلك ممكنًا. هل هو إطار مثقوب؟ مشكلة في المحرك؟ نفاد الوقود؟</p>
      
      <h2>5. طلب المساعدة</h2>
      <p>إذا لم تتمكن من حل المشكلة بنفسك، اتصل بخدمة المساعدة على الطريق أو بسطحة لنقل السيارة.</p>
      
      <h2>الخلاصة</h2>
      <p>التعامل مع أعطال السيارة المفاجئة يتطلب الهدوء والتصرف بحكمة. تذكر دائمًا أن سلامتك هي الأولوية القصوى.</p>
    `,
    date: '2024-01-15',
    category: 'نصائح',
    image: '/images/satha1.webp'
  },
  {
    id: 2,
    title: 'أهمية الصيانة الدورية لسيارتك',
    content: `
      <p>الصيانة الدورية لسيارتك ليست مجرد إجراء روتيني، بل هي استثمار في أداء سيارتك وسلامتها على المدى الطويل. في هذا المقال، سنستكشف أهمية الصيانة الدورية وكيف يمكنها أن توفر لك الكثير من المال والجهد.</p>
      
      <h2>1. إطالة عمر السيارة</h2>
      <p>الصيانة المنتظمة تساعد في الحفاظ على جميع أجزاء سيارتك في حالة جيدة، مما يطيل عمرها الافتراضي.</p>
      
      <h2>2. تحسين الأداء والكفاءة</h2>
      <p>سيارة تتم صيانتها بشكل جيد تعمل بكفاءة أعلى، مما يوفر في استهلاك الوقود ويحسن الأداء العام.</p>
      
      <h2>3. تجنب الإصلاحات المكلفة</h2>
      <p>الكشف المبكر عن المشاكل الصغيرة يمنع تطورها إلى مشاكل كبيرة ومكلفة.</p>
      
      <h2>4. الحفاظ على السلامة</h2>
      <p>الصيانة الدورية تضمن أن جميع أنظمة السلامة في سيارتك تعمل بشكل صحيح.</p>
      
      <h2>5. الحفاظ على قيمة السيارة</h2>
      <p>سيارة تتم صيانتها بانتظام تحتفظ بقيمتها لفترة أطول، مما يعني سعرًا أفضل عند البيع.</p>
      
      <h2>الخلاصة</h2>
      <p>الاستثمار في الصيانة الدورية لسيارتك هو قرار ذكي يوفر لك المال والوقت على المدى الطويل، ويضمن لك تجربة قيادة آمنة وممتعة.</p>
    `,
    date: '2024-01-22',
    category: 'صيانة',
    image: '/images/satha1.webp'
  },
  {
    id: 3,
    title: 'نصائح للقيادة الآمنة في الأحوال الجوية السيئة',
    content: `
      <p>القيادة في الأحوال الجوية السيئة يمكن أن تكون تحديًا كبيرًا حتى لأكثر السائقين خبرة. في هذا المقال، سنقدم لك بعض النصائح الهامة للحفاظ على سلامتك أثناء القيادة في ظروف الطقس الصعبة.</p>
      
      <h2>1. خفض السرعة</h2>
      <p>أهم نصيحة هي خفض سرعتك. القيادة ببطء يمنحك وقتًا أكبر للرد على أي مواقف طارئة.</p>
      
      <h2>2. زيادة المسافة بينك وبين السيارة أمامك</h2>
      <p>في الأحوال الجوية السيئة، يجب زيادة المسافة بينك وبين السيارة التي أمامك لمنحك وقتًا كافيًا للتوقف.</p>
      
      <h2>3. استخدام الأضواء</h2>
      <p>تأكد من تشغيل أضواء سيارتك لتحسين الرؤية وجعل سيارتك مرئية للآخرين.</p>
      
      <h2>4. تجنب استخدام مثبت السرعة</h2>
      <p>في الظروف الجوية السيئة، من الأفضل التحكم الكامل في سرعة سيارتك.</p>
      
      <h2>5. كن مستعدًا</h2>
      <p>تأكد من أن سيارتك مجهزة جيدًا للطقس السيئ، مع فحص الإطارات والمساحات والفرامل بانتظام.</p>
      
      <h2>الخلاصة</h2>
      <p>القيادة الآمنة في الأحوال الجوية السيئة تتطلب اليقظة والحذر. بإتباع هذه النصائح، يمكنك تقليل مخاطر الحوادث وضمان رحلة آمنة.</p>
    `,
    date: '2024-01-29',
    category: 'سلامة',
    image: '/images/satha1.webp'
  },
]

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // محاكاة جلب البيانات من API
    const fetchPost = () => {
      setIsLoading(true)
      setTimeout(() => {
        const foundPost = blogPosts.find(p => p.id.toString() === params.id)
        setPost(foundPost || null)
        setIsLoading(false)
      }, 500)
    }

    fetchPost()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">عذرًا، لم يتم العثور على المقال</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition duration-300">
            العودة إلى صفحة المدونة
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center">
            <FaArrowLeft className="ml-2" />
            العودة إلى المدونة
          </Link>
        </nav>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="flex items-center mr-4">
                <FaCalendar className="ml-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <FaTag className="ml-2" />
                {post.category}
              </span>
            </div>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: 'تحقق من هذا المقال المثير للاهتمام!',
                  url: window.location.href,
                })
              } else {
                // نسخ الرابط إلى الحافظة إذا لم تكن ميزة المشاركة متاحة
                navigator.clipboard.writeText(window.location.href)
                alert('تم نسخ الرابط إلى الحافظة')
              }
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
          >
            <FaShare className="ml-2" />
            مشاركة المقال
          </button>
          <Link 
            href="/blog" 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
          >
            العودة إلى قائمة المقالات
          </Link>
        </div>
      </div>
    </div>
  )
}

