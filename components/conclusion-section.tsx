import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react"

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Kết luận
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Tổng kết và ý nghĩa</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Những điểm quan trọng rút ra từ việc áp dụng lý thuyết Mác-Lênin vào phân tích vấn đề đương đại
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Lý thuyết vẫn đúng</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Lý thuyết Ý thức xã hội của Mác-Lênin vẫn có giá trị trong việc giải thích các hiện tượng xã hội đương
                đại.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>Vấn đề phức tạp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Vấn đề kết hôn của thế hệ trẻ có nhiều nguyên nhân, cần giải pháp toàn diện và đồng bộ.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Chính sách cần thiết</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cần có chính sách tác động đến cả điều kiện vật chất và ý thức xã hội để giải quyết căn bản.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Thông điệp chính</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-lg font-medium mb-4">
                Vấn đề thế hệ trẻ ngại kết hôn và sinh con không phải là vấn đề đơn thuần về ý thức, mà có nguồn gốc sâu
                xa từ điều kiện tồn tại xã hội.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Nguyên nhân gốc rễ
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Áp lực kinh tế và việc làm</li>
                  <li>• Thay đổi cơ cấu xã hội</li>
                  <li>• Đô thị hóa và lối sống mới</li>
                  <li>• Bình đẳng giới và vai trò phụ nữ</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-accent" />
                  Giải pháp cần thiết
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Cải thiện điều kiện kinh tế</li>
                  <li>• Hỗ trợ nhà ở và phúc lợi</li>
                  <li>• Chính sách gia đình toàn diện</li>
                  <li>• Thay đổi môi trường xã hội</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                "Chỉ khi thay đổi được điều kiện tồn tại xã hội, chúng ta mới có thể tác động tích cực đến ý thức xã hội
                và giải quyết căn bản vấn đề này."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
