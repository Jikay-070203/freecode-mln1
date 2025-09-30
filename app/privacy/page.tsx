"use client"
import Link from "next/link"
import { Shield, User, Lock, Eye, FileText, ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  const policies = [
    {
      icon: User,
      title: "Thông tin thu thập",
      content:
        "Chúng tôi có thể thu thập họ tên, mã số sinh viên, dữ liệu sử dụng để cải thiện trải nghiệm.",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: FileText,
      title: "Mục đích sử dụng",
      content:
        "Thông tin được dùng để nâng cao chất lượng.",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Lock,
      title: "Bảo mật dữ liệu",
      content:
        "Thông tin được bảo vệ bằng biện pháp kỹ thuật và tổ chức để ngăn truy cập trái phép, mất mát hoặc rò rỉ.",
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: Shield,
      title: "Quyền của người dùng",
      content:
        "Bạn có quyền truy cập, chỉnh sửa hoặc xóa dữ liệu cá nhân theo quy định pháp luật.",
      color: "from-orange-400 to-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* 🔙 Nút back ở góc trái trên */}
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg
                   text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-600
                   shadow-md hover:shadow-lg transition transform hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4" />
        Trang chủ
      </Link>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chính sách bảo mật
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết bảo vệ dữ liệu và quyền riêng tư của người dùng.
          </p>
        </div>

        {/* Policies grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => {
            const Icon = policy.icon
            return (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-lg p-6 hover:shadow-xl transition group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${policy.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition`}
                >
                  <Icon className="text-white h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{policy.content}</p>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Chính sách này có thể được cập nhật theo từng thời điểm. Vui lòng kiểm tra thường xuyên để nắm thông tin mới nhất.
          </p>
        </div>
      </div>
    </section>
  )
}
