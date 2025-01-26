"use client";
import { useState } from "react"
import Link from "next/link"

export interface District{
  id: string
  name: string
}

const districts: District[] = [
{
  id: "Sathat-Jeddah-Alhamraa",
  name: "سطحة جدة الحمراء",
},
{
  id: "سطحة-جدة-الأندلس",
  name: "سطحة جدة الأندلس",
},
{
  id: "سطحة-جدة-الشرفية",
  name: "سطحة جدة الشرفية",
},
{
  id: "سطحة-جدة-مشرفة",
  name: "سطحة جدة مشرفة",
},
{
  id: "سطحة-جدة-البغدادية الغربية",
  name: "سطحة جدة البغدادية الغربية",
},
{
  id: "سطحة-جدة-الشاطئ",
  name: "سطحة جدة الشاطئ",
},
{
  id: "سطحة-جدة-الورود",
  name: "سطحة جدة الورود",
},
{
  id: "سطحة-جدة-النزهة",
  name: "سطحة جدة النزهة",
},
{
  id: "سطحة-جدة-الروضة",
  name: "سطحة جدة الروضة",
},
{
  id: "سطحة-جدة-الصفاء",
  name: "سطحة جدة الصفاء",
},
{
  id: "سطحة-جدة-المروة",
  name: "سطحة جدة المروة",
},
{
  id: "سطحة-جدة-البوادي",
  name: "سطحة جدة البوادي",
},
{
  id: "سطحة-جدة-الفيصلية",
  name: "سطحة جدة الفيصلية",
},
{
  id: "سطحة-جدة-الربوة",
  name: "سطحة جدة الربوة",
},
{
  id: "سطحة-جدة-الزهراء",
  name: "سطحة جدة الزهراء",
},
{
  id: "سطحة-جدة-السلامة",
  name: "سطحة جدة السلامة",
},
{
  id: "سطحة-جدة-العزيزية",
  name: "سطحة جدة العزيزية",
},
{
  id: "سطحة-جدة-الفيحاء",
  name: "سطحة جدة الفيحاء",
},
]

export default function DistrictsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const filteredDistricts = districts.filter((district) => (district.name.toLowerCase().includes(searchTerm.toLowerCase())))

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
            key={district.id}
            href={`/satahat-jeddah/${district.id}`}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-center text-blue-700"> {district.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

