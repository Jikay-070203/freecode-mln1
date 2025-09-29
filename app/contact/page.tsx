"use client"

import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <section className="relative py-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Nút quay về trang chủ */}
      <div className="absolute top-6 left-6">
        <Link
          href="/homepage"
          className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
                     text-white font-semibold rounded-lg shadow-md 
                     hover:from-purple-600 hover:to-pink-600 
                     transform hover:scale-105 transition 
                     animate-bounce"
        >
          ⬅ Quay về Trang chủ
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Liên hệ với <span className="text-purple-600">FreeCode</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng lắng nghe ý kiến, góp ý và câu hỏi từ bạn.  
        </p>
      </div>

      {/* Thông tin liên hệ (centered) */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-8 px-6">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-lg">Email</h3>
            <p className="text-gray-600">freecode.contact@gmail.com</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-lg">Điện thoại</h3>
            <p className="text-gray-600">(+84) 0978 379 056</p>
          </div>
        </div>
      </div>

      {/* Decor bóng mờ */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  )
}
