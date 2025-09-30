import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Lightbulb } from "lucide-react"

export function PolicySection() {
  const policies = [
    {
      category: "Kinh tế - Việc làm",
      items: [
        "Ổn định việc làm cho người trẻ",
        "Tăng mức lương tối thiểu",
        "Hỗ trợ khởi nghiệp cho thanh niên",
        "Chính sách thuế ưu đãi cho gia đình trẻ",
      ],
    },
    {
      category: "Nhà ở",
      items: [
        "Chương trình nhà ở xã hội",
        "Hỗ trợ vay mua nhà lãi suất thấp",
        "Phát triển nhà ở giá rẻ",
        "Chính sách thuê nhà dài hạn",
      ],
    },
    {
      category: "Phúc lợi xã hội",
      items: [
        "Bảo hiểm thai sản toàn diện",
        "Hệ thống y tế miễn phí cho trẻ em",
        "Giáo dục mầm non công lập",
        "Trợ cấp nuôi con",
      ],
    },
    {
      category: "Bình đẳng giới",
      items: [
        "Chính sách nghỉ thai sản cho nữ",
        "Hỗ trợ cân bằng công việc - gia đình",
        "Chống phân biệt đối xử giới tính",
        "Khuyến khích nam giới tham gia việc nhà",
      ],
    },
  ]

  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-purple-500"]
  const bgColors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-purple-50"]


  return (
    <section
      id="policy"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >


      {/* Họa tiết nền */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Gợi ý chính sách
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Chính sách cần thiết để giải quyết vấn đề
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dựa trên phân tích lý thuyết, đề xuất các giải pháp chính sách cụ thể
          </p>
        </div>


         {/* Danh sách policies */}
         <div className="grid md:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => {
            const iconColor = colors[index % colors.length]
            const bgColor = bgColors[index % bgColors.length]
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className={`h-5 w-5 ${iconColor}`} />
                    {policy.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`${bgColor} p-4 rounded-lg`}>
                    <ul className="space-y-3">
                      {policy.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 ${iconColor} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Các card khác giữ nguyên */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" /> Ý nghĩa lý luận
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Khẳng định quy luật Mác-Lênin:</strong> Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức có
                thể tác động ngược lại.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bài học rút ra:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Muốn thay đổi ý thức phải thay đổi điều kiện sống</li>
                  <li>• Chính sách phải tác động đến cả hai mặt</li>
                  <li>• Cần có thời gian để ý thức thay đổi</li>
                  <li>• Phải có sự đồng bộ trong các chính sách</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-pink-500" /> Mục tiêu dài hạn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Tạo điều kiện thuận lợi</strong> để thế hệ trẻ có thể lựa chọn kết hôn và sinh con một cách tự
                nguyện và hạnh phúc.
              </p>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Kết quả mong đợi:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Tỷ suất sinh tăng trở lại mức hợp lý</li>
                  <li>• Cân bằng cơ cấu dân số</li>
                  <li>• Gia đình hạnh phúc và bền vững</li>
                  <li>• Phát triển xã hội bền vững</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
