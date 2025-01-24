  'use client'

  import { useState } from 'react'
  import { FaSearch } from 'react-icons/fa'
  import { useRouter } from 'next/navigation'

  export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault()
      if (searchTerm.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
      }
    }

    return (
      <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن خدمات أو معلومات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="absolute left-0 top-0 mt-2 ml-3 text-gray-600 hover:text-blue-500"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </form>
    )
  }

