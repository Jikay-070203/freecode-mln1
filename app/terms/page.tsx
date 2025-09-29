"use client"

import Link from "next/link"
import { Shield, ThumbsUp, Users, Heart } from "lucide-react"

export default function TermsPage() {
  return (
    <section className="relative py-20 min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
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
        <Shield className="h-14 w-14 mx-auto text-blue-600 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Điều khoản sử dụng
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Cùng <span className="font-bold text-purple-600">FreeCode</span>, xây dựng cộng đồng lành mạnh.
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="max-w-4xl mx-auto space-y-8 px-6">
        {/* Box 1 */}
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Tôn trọng lẫn nhau</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
          Tôn trọng và văn minh: Không phân biệt giới tính, quan điểm, hay trình độ trong mọi thảo luận.
          </p>
        </div>

        {/* Box 2 */}
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <ThumbsUp className="h-7 w-7 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Quan điểm lành mạnh</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
          Nội dung cần hướng đến học tập khoa học; nghiêm cấm lan truyền thông tin sai lệch, cực đoan.
          </p>
        </div>

        {/* Box 3 */}
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-7 w-7 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-800">Xây dựng cộng đồng tích cực</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
          Cùng nhau xây dựng FreeCode thành cộng đồng cởi mở, sáng tạo và tích cực.
          </p>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-16 px-6">
        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
        Bạn đồng ý với các điều khoản này để tiếp tục sử dụng nền tảng. FreeCode có quyền điều chỉnh.
        </p>
      </div>

      {/* Decor bóng mờ */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  )
}
