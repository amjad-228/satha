"use client";
import { useState } from "react"
import Link from "next/link"

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

export default function DistrictsList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDistricts = districts.filter((district) => district.includes(searchTerm))

  return (
    <div id="districts" className="mb-12">
      <input
        type="text"
        placeholder="ابحث عن حيك ..."
        className="w-full mb-4 p-2 border border-gray-300 rounded text-center"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDistricts.map((district) => (
          <Link
            key={district}
            href={`/satahat-jeddah/${encodeURIComponent(district)}`}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-center text-blue-700">سطحة جدة {district}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

