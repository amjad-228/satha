import type { Metadata } from "next"
import DistrictsList from "@/components/DistrictsList"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import { ArrowDown } from "lucide-react"

export const metadata: Metadata = {
  title: "سطحات جدة | خدمة سحب وإنقاذ السيارات الشاملة",
  description:
    "خدمة سطحات سيارات في جميع أحياء جدة. نقدم خدمات سحب وإنقاذ السيارات على مدار الساعة بأسعار تنافسية وسرعة في الاستجابة.",
  keywords: ["سطحات جدة", "سحب سيارات جدة", "خدمة سيارات جدة", "إنقاذ سيارات جدة", "سطحة جدة", "ونش جدة"],
  openGraph: {
    title: "سطحات جدة | خدمة سحب وإنقاذ السيارات الشاملة",
    description:
      "خدمة سطحات سيارات في جميع أحياء جدة. نقدم خدمات سحب وإنقاذ السيارات على مدار الساعة بأسعار تنافسية وسرعة في الاستجابة.",
    url: "https://www.sathaapp.com/satahat-jeddah",
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
    <div className="min-h-screen bg-gray-100">
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

