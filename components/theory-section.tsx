import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, Cog, ArrowRight } from "lucide-react"

export function TheorySection() {
  return (
    <section
      id="theory"
      className="py-24 relative bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Decor pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-4">
            <span className="number-modern">01</span>
          </div>
          <Badge
            variant="secondary"
            className="mb-6 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
          >
            Lý thuyết
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-6">
            Ý thức xã hội
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Hiểu mối quan hệ giữa tồn tại và ý thức xã hội để phân tích vấn đề đương đại
          </p>
        </div>

        {/* 2 cột tồn tại & ý thức */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Tồn tại xã hội */}
          <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-md shadow-lg border border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md">
                <Cog className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700">Tồn tại xã hội</h3>
            </div>
            <p className="text-gray-900 mb-6 font-semibold">Điều kiện vật chất của đời sống xã hội:</p>
            <ul className="space-y-4">
              {["Sản xuất và kinh tế", "Việc làm và thu nhập", "Nhà ở và điều kiện sống", "Cơ sở hạ tầng xã hội"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                    <span className="text-gray-800 group-hover:text-blue-700">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Ý thức xã hội */}
          <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-md shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-md">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-700">Ý thức xã hội</h3>
            </div>
            <p className="text-gray-900 mb-6 font-semibold">Đời sống tinh thần của xã hội:</p>
            <ul className="space-y-4">
              {["Tư tưởng và quan niệm", "Đạo đức và giá trị", "Pháp luật và quy tắc", "Tôn giáo và nghệ thuật"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full"></div>
                    <span className="text-gray-800 group-hover:text-indigo-700">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Quy luật cơ bản */}
        <div className="rounded-2xl p-12 mb-20 bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md shadow-xl border border-gray-200">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold mb-6 uppercase text-gray-800">Quy luật cơ bản</h3>
            <blockquote className="text-2xl md:text-4xl font-bold mb-6 leading-snug bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              “Tồn tại xã hội quyết định ý thức xã hội”
            </blockquote>
            <p className="text-gray-600 font-semibold text-lg">— Karl Marx & Friedrich Engels</p>
          </div>
        </div>

        {/* 3 card cuối */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tính độc lập tương đối",
              items: [
                "Ý thức có thể lạc hậu hơn tồn tại",
                "Ý thức có thể vượt trước tồn tại",
                "Ý thức có tính kế thừa",
              ],
              color: "from-sky-400 to-blue-500",
            },
            {
              title: "Tác động qua lại",
              items: ["Các hình thái ý thức tương tác", "Ảnh hưởng lẫn nhau", "Tạo thành hệ thống"],
              color: "from-purple-400 to-pink-500",
            },
            {
              title: "Tác động ngược",
              items: ["Ý thức tác động lại tồn tại", "Thúc đẩy hoặc cản trở", "Vai trò năng động"],
              color: "from-green-400 to-emerald-500",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="rounded-xl p-6 bg-white/80 backdrop-blur-md shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center shadow-md`}
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800">{card.title}</h4>
              </div>
              <ul className="space-y-3">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
