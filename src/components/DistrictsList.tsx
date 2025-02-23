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
{
  id: "Sathat-Jeddah-Alnahda",
  name: "سطحة جدة النهضة",
},
{
  id: "Sathat-Jeddah-Alkhalidia",
  name: "سطحة جدة الخالدية",
},
{
  id: "Sathat-Jeddah-Almarjan",
  name: "سطحة جدة المرجان",
},
{
  id: "Sathat-Jeddah-Albasateen",
  name: "سطحة جدة البساتين",
},
{
  id: "Sathat-Jeddah-Alrihab",
  name: "سطحة جدة الرحاب",
},
{
  id: "Sathat-Jeddah-Alnakheel",
  name: "سطحة جدة النخيل",
},
{
  id: "Sathat-Jeddah-Alsamer",
  name: "سطحة جدة السامر",
},
{
  id: "Sathat-Jeddah-Almanar",
  name: "سطحة جدة المنار",
},
{
  id: "Sathat-Jeddah-Alwaha",
  name: "سطحة جدة الواحة",
},
{
  id: "Sathat-Jeddah-Abhor-Alshmalia",
  name: "سطحة جدة ابحر الشمالية",
},
{
  id: "Sathat-Jeddah-Abhor-Aljanubia",
  name: "سطحة جدة ابحر الجنوبية",
},
{
  id: "Sathat-Jeddah-Quayza",
  name: "سطحة جدة قويزة",
},
{
  id: "Sathat-Jeddah-Abraq-Alraghama",
  name: "سطحة جدة ابرق الرغامة",
},
{
  id: "Sathat-Jeddah-Alruis",
  name: "سطحة جدة الرويس",
},
{
  id: "Sathat-Alhamraa-Jeddah",
  name: "سطحة الحمراء جدة",
},
{
  id: "Sathat-Alandalus-Jeddah",
  name: "سطحة الأندلس جدة",
},
{
  id: "Sathat-Jeddah-Alsharafiya",
  name: "سطحة الشرفية جدة",
},
{
  id: "Sathat-Mushrifa-Jeddah",
  name: "سطحة مشرفة جدة",
},
{
  id: "Sathat-Albaghdadiah-Algharbia-Jeddah",
  name: "سطحة البغدادية الغربية جدة",
},
{
  id: "Sathat-Alshaati-Jeddah",
  name: "سطحة الشاطئ جدة",
},
{
  id: "Sathat-Alwurud-Jeddah",
  name: "سطحة الورود جدة",
},
{
  id: "Sathat-Alkhumra-Jeddah",
  name: "سطحة الخمرة جدة",
},
{
  id: "Sathat-Alfadyla-Jeddah",
  name: "سطحة الفضيلة جدة"
},
{
  id: "Sathat-Alqarania-Jeddah",
  name: "سطحة القرنية جدة",
},
{
  id: "Sathat-Alnuzha-Jeddah",
  name: "سطحة النزهة جدة",
},
{
  id: "Sathat-Alrawda-Jeddah",
  name: "سطحة الروضة جدة",
},
{
  id: "Sathat-Alsafa-Jeddah",
  name: "سطحة الصفاء جدة",
},
{
  id: "Sathat-Almarua-Jeddah",
  name: "سطحة المروة جدة",
},
{
  id: "Sathat-Albawadi-Jeddah",
  name: "سطحة البوادي جدة",
},
{
  id: "Sathat-Alfaysaliyah-Jeddah",
  name: "سطحة الفيصلية جدة",
},
{
  id: "Sathat-Alrabwa-Jeddah",
  name: "سطحة الربوة جدة",
},
{
  id: "Sathat-Alzahra-Jeddah",
  name: "سطحة الزهراء جدة",
},
{
  id: "Sathat-Alsalama-Jeddah",
  name: "سطحة السلامة جدة",
},
{
  id: "Sathat-Alazizia-Jeddah",
  name: "سطحة العزيزية جدة",
},
{
  id: "Sathat-Alfayha-Jeddah",
  name: "سطحة الفيحاء جدة",
},
{
  id: "Sathat-Alnahda-Jeddah",
  name: "سطحة النهضة جدة",
},
{
  id: "Sathat-Alkhalidia-Jeddah",
  name: "سطحة الخالدية جدة",
},
{
  id: "Sathat-Almarjan-Jeddah",
  name: "سطحة المرجان جدة",
},
{
  id: "Sathat-Albasateen-Jeddah",
  name: "سطحة البساتين جدة",
},
{
  id: "Sathat-Alrihab-Jeddah",
  name: "سطحة الرحاب جدة",
},
{
  id: "Sathat-Alnakheel-Jeddah",
  name: "سطحة النخيل جدة",
},
{
  id: "Sathat-Alsamer-Jeddah",
  name: "سطحة السامر جدة",
},
{
  id: "Sathat-Almanar-Jeddah",
  name: "سطحة المنار جدة",
},
{
  id: "Sathat-Alwaha-Jeddah",
  name: "سطحة الواحة جدة",
},
{
  id: "Sathat-Abhor-Alshmalia-Jeddah",
  name: "سطحة ابحر الشمالية جدة",
},
{
  id: "Sathat-Abhor-Aljanubia-Jeddah",
  name: "سطحة ابحر الجنوبية جدة",
},
{
  id: "Sathat-Quayza-Jeddah",
  name: "سطحة قويزة جدة",
},
{
  id: "Sathat-Abraq-Alraghama-Jeddah",
  name: "سطحة ابرق الرغامة جدة",
},
{
  id: "Sathat-Alruis-Jeddah",
  name: "سطحة الرويس جدة",
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

