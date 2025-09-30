"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#theory", label: "Lý thuyết" },
    { href: "#analysis", label: "Phân tích" },
    { href: "#relationship", label: "Quan hệ biện chứng" },
    { href: "#policy", label: "Chính sách" },
    { href: "#conclusion", label: "Kết luận" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-100 via-indigo-100 to-pink-100 backdrop-blur-lg shadow-md border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
              Triết học Mác-Lênin
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold rounded-full 
                            text-white bg-gradient-to-r from-blue-500 to-indigo-500 
                            shadow-md hover:shadow-xl transition-all duration-300
                            hover:-translate-y-0.5 hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-3 pb-5 space-y-2 bg-white/90 backdrop-blur-md shadow-lg rounded-b-2xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium 
                             text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200
                             transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
                             hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 
                             hover:text-indigo-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
