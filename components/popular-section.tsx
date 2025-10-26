import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const popularArticles = [
  {
    id: 1,
    title: "Discount Health Products: Discover the Uncompromised Affordable Prices with Trusted Quality Since 2006",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    image: "/discount-health-products-and-supplements.jpg",
    href: "/article/discount-health-products",
    isLarge: true,
  },
  {
    id: 2,
    title: "Unveiling the Elegance of Fit: A Deep Dive into Wacoal's Signature Products",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    image: "/elegant-lingerie-and-fashion-products.jpg",
    href: "/article/wacoal-elegance",
    isLarge: false,
  },
  {
    id: 3,
    title: "Alle Technik zu Geld machen: Schnell, einfach & umweltfreundlich mit WIRKAUFENS",
    category: "Umweltschutz",
    categoryColor: "bg-green-600",
    image: "/technology-recycling-and-environmental-protection.jpg",
    href: "/article/technik-geld-machen",
    isLarge: false,
  },
]

const sideArticles = [
  {
    id: 4,
    title: "The Thoughtful Gifter's Secret: Real Meaning Makes Last-Minute Surprises Feel Planned and Prepared",
    category: "Lifestyle",
    image: "/thoughtful-gift-giving.jpg",
    href: "/article/thoughtful-gifter-secret",
  },
  {
    id: 5,
    title: "Why 88.1 Police Denim Defines Streetwear for the Next Generation",
    category: "Style",
    image: "/police-denim-streetwear-fashion.jpg",
    href: "/article/police-denim-streetwear",
  },
  {
    id: 6,
    title: "Stereophonic Play West End: A New and Riveting Musical Experience for Music Lovers",
    category: "Lifestyle",
    image: "/west-end-musical-theater-performance.jpg",
    href: "/article/stereophonic-play-west-end",
  },
  {
    id: 7,
    title:
      "I Finally Saw Harry Potter and the Cursed Child on Broadway. Here's Why My Mind Used How to Get Tickets Before They Sell Out",
    category: "Lifestyle",
    image: "/placeholder.svg?height=80&width=120",
    href: "/article/harry-potter-cursed-child",
  },
]

export function PopularSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Most Popular</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Main articles */}
        <div className="lg:col-span-2 space-y-6">
          {popularArticles.map((article) => (
            <div key={article.id} className="relative group cursor-pointer">
              <Link href={article.href}>
                <div
                  className={`relative overflow-hidden rounded-lg ${
                    article.isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge variant="secondary" className={`mb-2 text-white hover:opacity-90 ${article.categoryColor}`}>
                      {article.category}
                    </Badge>
                    <h3 className={`font-semibold text-balance ${article.isLarge ? "text-xl" : "text-lg"}`}>
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right column - Side articles */}
        <div className="space-y-4">
          {sideArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <Link href={article.href}>
                <div className="flex space-x-3">
                  <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium line-clamp-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{article.category}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
