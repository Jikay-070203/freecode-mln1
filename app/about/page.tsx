import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Nút quay về trang chủ */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
                     text-white font-semibold rounded-lg shadow-md 
                     hover:from-purple-600 hover:to-pink-600 
                     transform hover:scale-105 transition 
                     animate-bounce"
        >
          ⬅ Quay về Trang chủ
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            FreeCode
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nơi bạn khám phá triết học Mác–Lênin và đối thoại về những vấn đề xã hội.  
          </p>
        </div>
  
          {/* Nội dung chính */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Box 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Sứ mệnh</h2>
              <p className="text-gray-800 leading-relaxed">
                Mang Đưa triết học Mác–Lênin đến gần giới trẻ, khơi gợi tư duy phản biện và phân tích khoa học hiện tượng xã hội.
              </p>
            </div>
  
            {/* Box 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 shadow-md">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Nội dung</h2>
              <p className="text-gray-800 leading-relaxed">
              Trang bị kiến thức cơ bản, tình huống thực tiễn và thảo luận mở để vận dụng triết học vào đời sống.
              </p>
            </div>
  
            {/* Box 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 shadow-md">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">FreeCode Q&A</h2>
              <p className="text-gray-800 leading-relaxed">
                Các chuyên đề Q&A ngắn gọn, trọng tâm – giải đáp vấn đề xã hội theo góc nhìn Mác–Lênin.
              </p>
            </div>
  
            {/* Box 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 shadow-md">
              <h2 className="text-2xl font-bold text-pink-800 mb-4">Cộng đồng</h2>
              <p className="text-gray-800 leading-relaxed">
              Kết nối người yêu triết học, chia sẻ quan điểm và xây dựng tư duy mới cho vấn đề xã hội.
              </p>
            </div>
          </div>
  
          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-gray-700 mb-4">
             Hãy bắt đầu hành trình khám phá triết học xã hội cùng FreeCode.
            </p>
            <Link href="/homepage"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-700 transition"
            >
            Khám phá ngay
            </Link>
          </div>
        </div>
      </section>
    )
  }
  