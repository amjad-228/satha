import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetails from "@/components/ServiceDetails"
import { generateDistrictMetadata } from "../metadata"

const districts = [
  "الحمراء",
  "الأندلس",
  "الشرفية",
  "مشرفة",
  "النزهة",
  "الروضة",
  "الصفا",
  "المروة",
  "البوادي",
  "الفيصلية",
  "الربوة",
  "الزهراء",
  "السلامة",
  "العزيزية",
  "الفيحاء",
]

export function generateStaticParams() {
  return districts.map((district) => ({ district }))
}

type Props = {
  params: Promise<{ district: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { district } = await params
  return generateDistrictMetadata(district)
}

export default async function DistrictPage({ params }: Props) {
  const { district } = await params

  if (!districts.includes(district)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">سطحة جدة {district}</h1>
        <ServiceDetails district={district} />
      </main>
    </div>
  )
}

