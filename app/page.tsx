import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TheorySection } from "@/components/theory-section"
import { AnalysisSection } from "@/components/analysis-section"
import { RelationshipSection } from "@/components/relationship-section"
import { PolicySection } from "@/components/policy-section"
import { ConclusionSection } from "@/components/conclusion-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <HeroSection />
        <TheorySection />
        <AnalysisSection />
        <RelationshipSection />
        <PolicySection />
        <ConclusionSection />
        <Footer />
      </div>
    </main>
  )
}
