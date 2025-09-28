import { Badge } from "@/components/ui/badge"
import { TrendingDown, DollarSign, Building, Users, Scale, ArrowRight, Target, Brain } from "lucide-react"

export function AnalysisSection() {
  const factors = [
    {
      icon: DollarSign,
      title: "Yếu tố kinh tế",
      description: "Áp lực tài chính, chi phí sinh hoạt cao",
      details: ["Thu nhập không ổn định", "Giá nhà đất tăng cao", "Chi phí nuôi con lớn", "Áp lực kinh tế gia đình"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Building,
      title: "Đô thị hóa",
      description: "Thay đổi lối sống và môi trường sống",
      details: ["Cuộc sống bận rộn", "Không gian sống hẹp", "Xa cách gia đình", "Lối sống cá nhân hóa"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Xã hội - Việc làm",
      description: "Thay đổi trong cơ cấu xã hội và việc làm",
      details: ["Cạnh tranh việc làm gay gắt", "Yêu cầu trình độ cao", "Thời gian làm việc dài", "Áp lực thăng tiến"],
      color: "from-green-500 to-green-600",
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
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section id="analysis" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="number-modern">02</span>
          </div>
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Phân tích
          </Badge>
          <h2 className="text-4xl md:text-5xl heading-modern mb-6 text-gradient">
            Các yếu tố tác động đến quan niệm kết hôn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-modern">
            Phân tích các điều kiện tồn tại xã hội đang tác động đến ý thức của thế hệ trẻ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {factors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <div key={index} className="card-modern rounded-xl p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${factor.color} rounded-xl shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{factor.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-modern">{factor.description}</p>
                <ul className="space-y-2">
                  {factor.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${factor.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-modern">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-modern rounded-2xl p-8 border-l-4 border-l-red-500 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <TrendingDown className="h-8 w-8 text-red-500/20 icon-float" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold">Tồn tại xã hội - Điều kiện khách quan</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Áp lực kinh tế:",
                  content: "Thu nhập không tương xứng với chi phí sinh hoạt, đặc biệt là nhà ở và giáo dục con cái.",
                },
                {
                  title: "Thay đổi cơ cấu xã hội:",
                  content: "Đô thị hóa nhanh, thay đổi lối sống từ nông thôn sang thành thị.",
                },
                {
                  title: "Cạnh tranh việc làm:",
                  content: "Yêu cầu trình độ cao, thời gian làm việc dài, áp lực thăng tiến.",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 group-hover:text-red-500 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-modern pl-6">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-modern rounded-2xl p-8 border-l-4 border-l-blue-500 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Users className="h-8 w-8 text-blue-500/20 icon-float" style={{ animationDelay: "1s" }} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Brain className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Ý thức xã hội - Sự biến đổi quan niệm</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Hôn nhân không còn là nghĩa vụ:",
                  content: "Quan niệm về hôn nhân chuyển từ nghĩa vụ xã hội sang lựa chọn cá nhân.",
                },
                {
                  title: "Sinh con không còn là bổn phận:",
                  content: 'Thay đổi từ "sinh con để nối dõi" sang "sinh con khi sẵn sàng".',
                },
                {
                  title: "Giá trị mới:",
                  content: "Ưu tiên sự nghiệp, tự do cá nhân, chất lượng cuộc sống.",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 group-hover:text-blue-500 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-modern pl-6">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
