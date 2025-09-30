import { Button } from "@/components/ui/button"
import { ArrowDown, Brain, Users, TrendingDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-modern text-white overflow-hidden">
      <div className="absolute top-20 left-10 icon-float">
        <Brain className="h-12 w-12 text-white/20" />
      </div>
      <div className="absolute top-32 right-20 icon-float" style={{ animationDelay: "1s" }}>
        <Users className="h-10 w-10 text-white/20" />
      </div>
      <div className="absolute bottom-32 left-20 icon-float" style={{ animationDelay: "2s" }}>
        <TrendingDown className="h-14 w-14 text-white/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
        <a
          href="/homepage"
          className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6 hover:bg-white/20 transition"
        >
          Khám phá triết học Mác–Lênin cùng FreeCode
        </a>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading-modern mb-6 text-balance">
          Vì sao thế hệ trẻ ngày nay{" "}
          <span className="relative">
            ngại kết hôn
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
          </span>{" "}
          và sinh con?
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-white/90 text-pretty max-w-4xl mx-auto text-modern">
          Phân tích theo lý thuyết <strong className="text-white">Ý thức xã hội</strong> của Mác–Lênin
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto mb-12">
          <Button size="lg" className="w-full sm:w-auto btn-modern px-8 py-4 text-lg" asChild>
            <a href="#theory">Khám phá lý thuyết</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href="#analysis">Xem phân tích</a>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-white/70" />
        </div>
      </div>
    </section>
  )
}
