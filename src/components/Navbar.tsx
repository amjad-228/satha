'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 dark:bg-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                src="/images/satha4.ico"
                alt="شعار سطحة جدة"
                width="50"  // العرض الافتراضي
                height="30" // الارتفاع الافتراضي
                className='object-cover h-6 ml-2'
                />
                <span className="text-xl font-bold text-indigo-600 dark:text-white">سطحة جدة</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button asChild className="shadow-lg rounded-[50] bg-gradient-to-r from-blue-600 to-purple-600 w-f h-8">
                <Link href="/blog">المدونة</Link>
              </Button>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:bg-gray-700/10 dark:hover:text-gray-100 dark:focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">openMainMenu</span>
                  {isOpen ? (
                    <X className="block h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className={`hidden sm:flex sm:space-x-8 mt-4 sm:space-x-reverse`}>
            <NavLink href="/">الرئيسية</NavLink>
            <NavLink href="/services">خدماتنا</NavLink>
            <NavLink href="#من نحن">من نحن</NavLink>
            <NavLink href="#اتصل بنا">اتصل بنا</NavLink>
            <NavLink href="/#">آراء عملاؤنا</NavLink>
            <NavLink href="/faq">الأسئلة الشائعة</NavLink>
            <NavLink href="/blog">المدونة</NavLink>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="/">الرئيسية</NavLink>
            <NavLink href="/services">خدماتنا</NavLink>
            <NavLink href="/about">من نحن</NavLink>
            <NavLink href="/#اتصل بنا">اتصل بنا</NavLink>
            <NavLink href="/#آراء عملاؤنا">آراء عملاؤنا</NavLink>
            <NavLink href="/faq">الأسئلة الشائعة</NavLink>
            <NavLink href="/blog">المدونة</NavLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2">
                <Button asChild className="w-full justify-center">
                  <Link href="/blog">المدونة</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        isActive 
          ? 'border-indigo-500 text-gray-900 dark:border-indigo-500 dark:text-white' 
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-300'
      } ml-8`}
    >
      {children}
    </Link>
  )
}

export default Navbar

