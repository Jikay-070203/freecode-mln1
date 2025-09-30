import { Badge } from "@/components/ui/badge"
import {
  TrendingDown,
  DollarSign,
  Building,
  Users,
  Scale,
  ArrowRight,
  Target,
  Brain,
} from "lucide-react"

export function AnalysisSection() {
  const factors = [
    {
      icon: DollarSign,
      title: "Yếu tố kinh tế",
      description: "Áp lực tài chính, chi phí sinh hoạt cao",
      details: [
        "Thu nhập không ổn định",
        "Giá nhà đất tăng cao",
        "Chi phí nuôi con lớn",
        "Áp lực kinh tế gia đình",
      ],
      color: "from-pink-400 to-red-500",
    },
    {
      icon: Building,
      title: "Đô thị hóa",
      description: "Thay đổi lối sống và môi trường sống",
      details: [
        "Cuộc sống bận rộn",
        "Không gian sống hẹp",
        "Xa cách gia đình",
        "Lối sống cá nhân hóa",
      ],
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: Users,
      title: "Xã hội - Việc làm",
      description: "Thay đổi trong cơ cấu xã hội và việc làm",
      details: [
        "Cạnh tranh việc làm gay gắt",
        "Yêu cầu trình độ cao",
        "Thời gian làm việc dài",
        "Áp lực thăng tiến",
      ],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Scale,
      title: "Bình đẳng giới",
      description: "Thay đổi vai trò và quyền lợi của phụ nữ",
      details: [
        "Phụ nữ tham gia lao động nhiều hơn",
        "Mong muốn phát triển sự nghiệp",
        "Thay đổi vai trò trong gia đình",
        "Quyền tự quyết về hôn nhân",
      ],
      color: "from-purple-400 to-indigo-500",
    },
  ]

  return (
    <section
      id="analysis"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="number-modern">02</span>
          </div>
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          >
            Phân tích
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
            Các tác nhân chi phối quan điểm hôn nhân
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Khám phá những yếu tố kinh tế, xã hội và ý thức tác động đến quan
            niệm của thế hệ trẻ
          </p>
        </div>

        {/* Factors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {factors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-md hover:shadow-xl p-6 transition transform hover:scale-105 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${factor.color} shadow-md`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{factor.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{factor.description}</p>
                <ul className="space-y-2">
                  {factor.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${factor.color} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Social vs Consciousness */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Điều kiện khách quan */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-red-50 to-white border-l-4 border-red-500 relative overflow-hidden shadow-md">
            <div className="absolute top-4 right-4">
              <TrendingDown className="h-10 w-10 text-red-400/20 animate-bounce" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-600">
                Tồn tại xã hội - Điều kiện khách quan
              </h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Áp lực kinh tế:",
                  content:
                    "Thu nhập không tương xứng với chi phí sinh hoạt, đặc biệt là nhà ở và giáo dục con cái.",
                },
                {
                  title: "Thay đổi cơ cấu xã hội:",
                  content:
                    "Đô thị hóa nhanh, thay đổi lối sống từ nông thôn sang thành thị.",
                },
                {
                  title: "Cạnh tranh việc làm:",
                  content:
                    "Yêu cầu trình độ cao, thời gian làm việc dài, áp lực thăng tiến.",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-800 group-hover:text-red-600 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 pl-6">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ý thức xã hội */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 relative overflow-hidden shadow-md">
            <div className="absolute top-4 right-4">
              <Users className="h-10 w-10 text-blue-400/20 animate-pulse" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600">
                Ý thức xã hội - Biến đổi quan niệm
              </h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Hôn nhân không còn là nghĩa vụ:",
                  content:
                    "Quan niệm về hôn nhân chuyển từ nghĩa vụ xã hội sang lựa chọn cá nhân.",
                },
                {
                  title: "Sinh con không còn là bổn phận:",
                  content:
                    'Thay đổi từ "sinh con để nối dõi" sang "sinh con khi sẵn sàng".',
                },
                {
                  title: "Giá trị mới:",
                  content:
                    "Ưu tiên sự nghiệp, tự do cá nhân, chất lượng cuộc sống.",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 pl-6">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
