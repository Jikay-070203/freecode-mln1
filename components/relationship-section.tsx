import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, RefreshCw } from "lucide-react"

export function RelationshipSection() {
  return (
    <section id="relationship" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Quan hệ biện chứng
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Mối quan hệ giữa tồn tại và ý thức xã hội
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Phân tích sự tác động qua lại giữa điều kiện vật chất và ý thức trong vấn đề kết hôn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Tồn tại → Ý thức
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Điều kiện sống áp lực</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Kinh tế khó khăn, việc làm không ổn định, nhà ở đắt đỏ
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Quan niệm thay đổi về hôn nhân và sinh con</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Ví dụ cụ thể:</strong>
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Thu nhập thấp → Trì hoãn kết hôn</li>
                  <li>• Nhà đắt → Sống chung không cưới</li>
                  <li>• Chi phí nuôi con cao → Không muốn sinh</li>
                  <li>• Áp lực công việc → Ưu tiên sự nghiệp</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5 text-accent" />Ý thức → Tồn tại
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent-foreground">Quan niệm mới</h4>
                <p className="text-sm text-muted-foreground mb-3">Hôn nhân là lựa chọn, không phải nghĩa vụ</p>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowLeft className="h-4 w-4 text-accent" />
                  <span>Tác động đến dân số, chính sách, kinh tế</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Hệ quả thực tế:</strong>
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Tỷ suất sinh giảm → Già hóa dân số</li>
                  <li>• Ít kết hôn → Thay đổi cấu trúc gia đình</li>
                  <li>• Chính sách khuyến khích sinh → Hỗ trợ tài chính</li>
                  <li>• Thị trường lao động → Thiếu lao động trẻ</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center">
              <RefreshCw className="h-6 w-6 text-primary" />
              Vòng tuần hoàn biện chứng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold">Điều kiện khó khăn</h4>
                <p className="text-sm text-muted-foreground">Kinh tế, nhà ở, việc làm tạo áp lực</p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h4 className="font-semibold">Quan niệm thay đổi</h4>
                <p className="text-sm text-muted-foreground">Thế hệ trẻ thay đổi cách nhìn về hôn nhân</p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold">Tác động xã hội</h4>
                <p className="text-sm text-muted-foreground">Ảnh hưởng đến dân số và chính sách</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Trích dẫn minh họa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="mb-2">"Người chết đang đè nặng lên người sống"</p>
                <footer className="text-sm text-muted-foreground">- Karl Marx</footer>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-4 italic">
                <p className="mb-2">
                  "Sự phát triển của chính trị, pháp luật, triết học, tôn giáo, văn học, nghệ thuật... đều dựa trên cơ
                  sở kinh tế. Nhưng tất cả chúng cũng có ảnh hưởng lẫn nhau và ảnh hưởng đến cơ sở kinh tế"
                </p>
                <footer className="text-sm text-muted-foreground">- Friedrich Engels</footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
