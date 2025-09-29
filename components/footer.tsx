"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Đăng ký email:", email)
    setEmail("")
    alert("Cảm ơn bạn đã đăng ký nhận tin!")
  }

  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Cột 1: Về website */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">FreeCode</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
             Nền tảng khám phá triết học Mác–Lênin và các vấn đề xã hội hôm nay.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
          <h4 className="font-semibold mb-4 text-blue-400">Liên kết nhanh</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Về chúng tôi
              </Link>
            </li>
            <li>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Liên hệ
            </Link>
            </li>
          </ul>
        </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
          <h4 className="font-semibold mb-4 text-blue-400">Hỗ trợ</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Hỗ trợ
              </a>
            </li>
          </ul>
        </div>
          {/* Cột 4: Đăng ký nhận tin */}
          <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-semibold mb-4 text-blue-400">Gửi phản hồi</h4>
          <p className="text-gray-300 text-sm mb-4">Chúng tôi mong nhận được ý kiến từ bạn.</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="text"
                placeholder="Nhập phản hồi của bạn tại đây"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-400"
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Gửi
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            {/* Logo gradient rút gọn */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            {/* Text bản quyền */}
            <p className="text-sm text-gray-400 text-center">
              Copyright © 2025. Designed and Developed by <span className="font-semibold text-white">Freecode</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
