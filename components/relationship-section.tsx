import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, RefreshCw } from "lucide-react"

export function RelationshipSection() {
  return (
    <section
      id="relationship"
      className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40 relative overflow-hidden"
    >
      {/* Decor background */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-200/20 rounded-full blur-2xl translate-x-20 translate-y-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
          >
            Quan hệ biện chứng
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Mối quan hệ giữa tồn tại và ý thức xã hội
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Sự tác động giữa điều kiện vật chất và ý thức trong hôn nhân
          </p>
        </div>

        {/* Hai khối chính */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md hover:shadow-xl transition border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <ArrowRight className="h-5 w-5 text-blue-500" />
                Tồn tại → Ý thức
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-100/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Điều kiện sống áp lực</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Kinh tế khó khăn, việc làm không ổn định, nhà ở đắt đỏ
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <ArrowRight className="h-4 w-4" />
                  <span>Quan niệm thay đổi về hôn nhân và sinh con</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Ví dụ cụ thể:</p>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Thu nhập thấp → Trì hoãn kết hôn</li>
                  <li>• Nhà đắt → Sống chung không cưới</li>
                  <li>• Chi phí nuôi con cao → Không muốn sinh</li>
                  <li>• Áp lực công việc → Ưu tiên sự nghiệp</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-700">
                <ArrowLeft className="h-5 w-5 text-pink-500" />
                Ý thức → Tồn tại
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-pink-100/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-pink-700">Quan niệm mới</h4>
                <p className="text-sm text-gray-600 mb-3">Hôn nhân là lựa chọn, không phải nghĩa vụ</p>
                <div className="flex items-center gap-2 text-sm text-pink-600">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Tác động đến dân số, chính sách, kinh tế</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Hệ quả thực tế:</p>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Tỷ suất sinh giảm → Già hóa dân số</li>
                  <li>• Ít kết hôn → Thay đổi cấu trúc gia đình</li>
                  <li>• Chính sách khuyến khích sinh → Hỗ trợ tài chính</li>
                  <li>• Thị trường lao động → Thiếu lao động trẻ</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vòng tuần hoàn */}
        <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-blue-200 rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center justify-center text-blue-700">
              <RefreshCw className="h-6 w-6 text-blue-500" />
              Vòng tuần hoàn biện chứng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { num: 1, color: "from-blue-400 to-blue-500", title: "Điều kiện khó khăn", desc: "Kinh tế, nhà ở, việc làm tạo áp lực" },
                { num: 2, color: "from-pink-400 to-pink-500", title: "Quan niệm thay đổi", desc: "Thế hệ trẻ thay đổi cách nhìn về hôn nhân" },
                { num: 3, color: "from-green-400 to-green-500", title: "Tác động xã hội", desc: "Ảnh hưởng đến dân số và chính sách" },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg bg-gradient-to-r ${item.color} text-white`}
                  >
                    <span className="text-2xl font-bold">{item.num}</span>
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trích dẫn */}
        <div className="mt-12">
          <Card className="bg-white shadow-lg border border-gray-100 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">Trích dẫn minh họa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700">
                <p className="mb-2">"Người chết đang đè nặng lên người sống"</p>
                <footer className="text-sm text-gray-500">- Karl Marx</footer>
              </blockquote>
              <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700">
                <p className="mb-2">
                  "Sự phát triển của chính trị, pháp luật, triết học, tôn giáo, văn học, nghệ thuật... đều dựa trên cơ sở kinh tế.
                  Nhưng tất cả chúng cũng có ảnh hưởng lẫn nhau và ảnh hưởng đến cơ sở kinh tế"
                </p>
                <footer className="text-sm text-gray-500">- Friedrich Engels</footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
