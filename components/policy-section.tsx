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

  return (
    <section id="policy" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {policy.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {policy.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />Ý nghĩa lý luận
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Khẳng định quy luật Mác-Lênin:</strong> Tồn tại xã hội quyết định ý thức xã hội, nhưng ý thức có
                thể tác động ngược lại.
              </p>

              <div className="bg-primary/5 p-4 rounded-lg">
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
                <Target className="h-5 w-5 text-accent" />
                Mục tiêu dài hạn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Tạo điều kiện thuận lợi</strong> để thế hệ trẻ có thể lựa chọn kết hôn và sinh con một cách tự
                nguyện và hạnh phúc.
              </p>

              <div className="bg-accent/5 p-4 rounded-lg">
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
