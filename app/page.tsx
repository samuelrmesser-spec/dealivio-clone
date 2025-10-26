import { HeroSection } from "@/components/hero-section"
import { FeaturedArticles } from "@/components/featured-articles"
import { HighlightsSection } from "@/components/highlights-section"
import { PopularSection } from "@/components/popular-section"
import { TrendingSection } from "@/components/trending-section"

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <div className="container mx-auto px-4 space-y-16">
        <FeaturedArticles />
        <HighlightsSection />
        <PopularSection />
        <TrendingSection />
      </div>
    </div>
  )
}
