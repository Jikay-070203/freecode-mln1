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
    <nav className="fixed top-0 left-0 right-0 z-50 nav-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg">
              <BookOpen className="h-6 w-6 text-gradient" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gradient tracking-tight">
              Triết học Mác-Lênin
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 
                             bg-white/5 rounded-lg shadow-md 
                             transition-all duration-300 transform
                             hover:-translate-y-1 hover:scale-105 
                             hover:text-primary hover:shadow-xl
                             active:translate-y-0.5 active:shadow-md"
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
              className="text-foreground hover:bg-primary/10 p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium 
                             text-foreground/80 bg-white/5 shadow-md
                             transition-all duration-200 transform
                             hover:-translate-y-1 hover:scale-105 
                             hover:text-primary hover:shadow-lg
                             active:translate-y-0.5 active:shadow-md"
                  onClick={() => setIsOpen(false)}
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
