"use client"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TheorySection } from "@/components/theory-section"
import { AnalysisSection } from "@/components/analysis-section"
import { RelationshipSection } from "@/components/relationship-section"
import { PolicySection } from "@/components/policy-section"
import { ConclusionSection } from "@/components/conclusion-section"
import { Footer } from "@/components/footer"
import DraggableChatbot from "@/components/draggable-chatbot"

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        {/* Navigation */}
        <Navigation />

        {/* Nội dung trang */}
        <main className="flex-1">
          <HeroSection />
          <TheorySection />
          <AnalysisSection />
          <RelationshipSection />
          <PolicySection />
          <ConclusionSection />

          {/* Nút Game */}
          <div className="text-center my-16">
          <Link
  href="https://freecode-game1.pages.dev/"
  target="_blank" 
  rel="noopener noreferrer"
  className="relative inline-flex items-center gap-2 px-10 py-4 rounded-2xl
             text-white font-extrabold text-lg
             bg-gradient-to-r from-green-400 via-emerald-500 to-green-600
             shadow-lg shadow-emerald-500/40
             transition-all transform hover:scale-110 hover:shadow-emerald-500/70
             active:translate-y-1 overflow-hidden group"
>
  {/* Hiệu ứng ánh sáng chạy qua */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

  <span className="text-2xl drop-shadow-md">🎮</span>
  <span className="drop-shadow-md">Vào Game</span>
</Link>
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Chatbot nổi */}
        <DraggableChatbot />
      </div>
    </ThemeProvider>
  )
}
