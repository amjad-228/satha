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
  id: "Sathat-Jeddah-Alandalus",
  name: "سطحة جدة الأندلس",
},
{
  id: "Sathat-Jeddah-Alsharafiya",
  name: "سطحة جدة الشرفية",
},
{
  id: "Sathat-Jeddah-Mushrifa",
  name: "سطحة جدة مشرفة",
},
{
  id: "Sathat-Jeddah-Albaghdadiah-Algharbia",
  name: "سطحة جدة البغدادية الغربية",
},
{
  id: "Sathat-Jeddah-Alshaati",
  name: "سطحة جدة الشاطئ",
},
{
  id: "Sathat-Jeddah-Alwurud",
  name: "سطحة جدة الورود",
},
{
  id: "Sathat-Jeddah-Alkhumra",
  name: "سطحة جدة الخمرة",
},
{
  id: "Sathat-Jeddah-Alfadyla",
  name: "سطحة جدة الفضيلة"
},
{
  id: "Sathat-Jeddah-Alqarania",
  name: "سطحة جدة القرنية",
},
{
  id: "Sathat-Jeddah-Alnuzha",
  name: "سطحة جدة النزهة",
},
{
  id: "Sathat-Jeddah-Alrawda",
  name: "سطحة جدة الروضة",
},
{
  id: "Sathat-Jeddah-Alsafa",
  name: "سطحة جدة الصفاء",
},
{
  id: "Sathat-Jeddah-Almarua",
  name: "سطحة جدة المروة",
},
{
  id: "Sathat-Jeddah-Albawadi",
  name: "سطحة جدة البوادي",
},
{
  id: "Sathat-Jeddah-Alfaysaliyah",
  name: "سطحة جدة الفيصلية",
},
{
  id: "Sathat-Jeddah-Alrabwa",
  name: "سطحة جدة الربوة",
},
{
  id: "Sathat-Jeddah-Alzahra",
  name: "سطحة جدة الزهراء",
},
{
  id: "Sathat-Jeddah-Alsalama",
  name: "سطحة جدة السلامة",
},
{
  id: "Sathat-Jeddah-Alazizia",
  name: "سطحة جدة العزيزية",
},
{
  id: "Sathat-Jeddah-Alfayha",
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

