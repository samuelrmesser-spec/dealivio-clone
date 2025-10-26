import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const featuredArticles = [
  {
    id: 1,
    title: "How hairbrush Saved My Time, Stress, and Money",
    category: "Beauty",
    categoryColor: "bg-pink-600",
    image: "/hairbrush-and-hair-care-products.jpg",
    href: "/article/hairbrush-saved-time",
  },
  {
    id: 2,
    title: "An In-Depth Look at TheTLShop.com's Exclusive Redken Hair Care Collection",
    category: "Selfcare",
    categoryColor: "bg-green-600",
    image: "/luxury-hair-care-products-collection.jpg",
    href: "/article/redken-collection",
  },
]

export function FeaturedArticles() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <div key={article.id} className="relative group cursor-pointer">
            <Link href={article.href}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
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
                  <h3 className="text-lg font-semibold text-balance">{article.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
