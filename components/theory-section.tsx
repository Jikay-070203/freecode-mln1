import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, Cog, ArrowRight } from "lucide-react"

export function TheorySection() {
  return (
    <section id="theory" className="py-20 section-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="number-modern">01</span>
          </div>
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Lý thuyết cơ bản
          </Badge>
          <h2 className="text-4xl md:text-5xl heading-modern mb-6 text-gradient">
            Ý thức xã hội trong triết học Mác-Lênin
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto text-modern font-medium">
          Hiểu mối quan hệ giữa tồn tại và ý thức xã hội để phân tích vấn đề đương đại.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="card-modern rounded-2xl p-8 relative overflow-hidden 
                bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div className="absolute top-4 right-4">
          <Brain className="h-8 w-8 text-blue-500/70 icon-float" />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/50 rounded-xl">
            <Cog className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-2xl font-bold text-blue-800">Tồn tại xã hội</h3>
        </div>
        <p className="text-black mb-6 text-modern font-bold">
          Điều kiện vật chất của đời sống xã hội:
        </p>
        <ul className="space-y-4">
          {["Sản xuất và kinh tế", "Việc làm và thu nhập", "Nhà ở và điều kiện sống", "Cơ sở hạ tầng xã hội"].map(
            (item, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:scale-110 transition-transform"></div>
                <span className="text-black group-hover:text-blue-800 transition-colors">{item}</span>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="card-modern rounded-2xl p-8 relative overflow-hidden 
                bg-blue-100">
          <div className="absolute top-4 right-4">
            <Lightbulb className="h-8 w-8 text-indigo-400/60 icon-float" style={{ animationDelay: "1s" }} />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/40 rounded-xl">
              <Brain className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-indigo-700">Ý thức xã hội</h3>
          </div>
          <p className="text-black mb-6 text-modern font-bold">Đời sống tinh thần của xã hội:</p>
          <ul className="space-y-4">
            {["Tư tưởng và quan niệm", "Đạo đức và giá trị", "Pháp luật và quy tắc", "Tôn giáo và nghệ thuật"].map(
              (item, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full group-hover:scale-110 transition-transform"></div>
                  <span className="text-black group-hover:text-indigo-700 transition-colors">{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>
        </div>

      <div className="card-modern rounded-2xl p-10 mb-12 bg-gradient-to-r from-white to-gray-100 text-black relative overflow-hidden shadow-lg">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-black/5 rounded-full -translate-y-16 translate-x-16 blur-md"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-black/5 rounded-full translate-y-12 -translate-x-12 blur-sm"></div>

        <div className="relative z-10 text-center">
          {/* Tiêu đề */}
          <h3 className="text-3xl font-extrabold mb-6 tracking-wide uppercase">
            Quy luật cơ bản
          </h3>

          {/* Câu trích dẫn */}
          <blockquote className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
            <span className="italic">“Tồn tại xã hội quyết định ý thức xã hội”</span>
          </blockquote>

          {/* Tác giả */}
          <p className="text-gray-700 font-semibold text-lg tracking-wide">
            — Karl Marx & Friedrich Engels
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Tính độc lập tương đối",
              items: [
                "Ý thức có thể lạc hậu hơn tồn tại",
                "Ý thức có thể vượt trước tồn tại",
                "Ý thức có tính kế thừa",
              ],
            },
            {
              title: "Tác động qua lại",
              items: ["Các hình thái ý thức tương tác", "Ảnh hưởng lẫn nhau", "Tạo thành hệ thống"],
            },
            {
              title: "Tác động ngược",
              items: ["Ý thức tác động lại tồn tại", "Thúc đẩy hoặc cản trở", "Vai trò năng động"],
            },
          ].map((card, index) => (
            <div key={index} className="card-modern rounded-xl p-6 group">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-bold text-lg">{card.title}</h4>
              </div>
              <ul className="space-y-3">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-modern">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
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
