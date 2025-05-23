import type { Metadata } from "next"
import DistrictsList from "@/components/DistrictsList"
import Hero from "./Hero"
import Features from "@/components/Features"
import { ArrowDown } from "lucide-react"

export const metadata: Metadata = {
  title: "سطحات جدة - اختر حيك | خدمة اقرب سطحة اختر حيك وابشر بأقرب سطحة",
  description:
    "خدمة اقرب سطحة من موقعي: سطحات جدة تتيح لك اختيار خدمة السطحة بناءً على الحي الذي تتواجد فيه.",
  keywords: ["سطحة جدة", "سطحات جدة", "أقرب سطحة من موقعي", "سطحة قريبة مني", "أقرب سطحة", "سطحة جدة الحمراء", "سطحة جدة", "سطحة الحمراء", "اقرب سطحه", "سطحة جدة الأندلس", "سطحة جدة الشرفية", "سطحة جدة مشرفة", "سطحة جدة البغدادية الغربية", "سطحة جدة الشاطئ", "سطحة جدة الوروود", "سطحة جدة الخمرة", "سطحة جدة الفضيلة", "سطحة جدة القرنية", "سطحة جدة النزهة", "سطحة جدة الروضة", "سطحة جدة الصفاء", "سطحة جدة المروة", "سطحة جدة البوادي", "سطحة جدة الفيصلية", "سطحة جدة الربوة", "سطحة جدة الزهراء", "سطحة جدة السلامة", "سطحة جدة العزيزية", "سطحة جدة الفيحاء"],
  openGraph: {
    title: "سطحات جدة | خدمة سحب وإنقاذ السيارات الشاملة",
    description:
      "خدمة سطحات سيارات في جميع أحياء جدة. نقدم خدمات سحب وإنقاذ السيارات على مدار الساعة بأسعار تنافسية وسرعة في الاستجابة.",
    url: "https://www.sathaapp.com/satahat-jeddah",
    locale: "ar",
    type: "website",
    images: [
      {
        url: "/images/satha2.webp",
        width: 1200,
        height: 630,
        alt: "خدمة سطحات جدة",
      },
    ],
  },
}

export default function SatahatJeddahPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900  ">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">كيف تعمل خدمة سطحات جدة؟</h2>
          <p className="text-lg mb-6">
            صفحة سطحات جدة تتيح لك اختيار خدمة السطحة بناءً على الحي الذي تتواجد فيه. ببساطة، اختر حيك من القائمة أدناه
            للحصول على خدمة سريعة وموثوقة.
          </p>
          <div className="flex justify-center items-center">
            <ArrowDown className="animate-bounce w-6 h-6 text-blue-500" />
          </div>
        </section>
        <h2 className="text-3xl font-bold text-center mb-8">اختر حيك للحصول على أقرب خدمة سطحة</h2>
        <DistrictsList />
        <Features />
      </main>
    </div>
  )
}

