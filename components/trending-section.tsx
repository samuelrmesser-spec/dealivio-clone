import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const trendingArticles = [
  {
    id: 1,
    title: "Funko Europe: The Ultimate Destination for Exclusive Pop Culture Collectibles",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/funko-europe-collectibles",
  },
  {
    id: 2,
    title: "L'OR: A World of Coffee Excellence — Rich Taste, Wide Selection, and a Conscience",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/lor-coffee-excellence",
  },
]

const additionalArticles = [
  {
    id: 3,
    title: "Vampire Vape Delivers Bold Flavours and Reliable Vape Liquids for Everyday Use",
    image: "/placeholder.svg?height=200&width=300",
    href: "/article/vampire-vape-flavours",
  },
  {
    id: 4,
    title: "Discover the Luxury Celebration Travel: Affordable Coach Holidays for Every Traveller",
    image: "/placeholder.svg?height=200&width=300",
    href: "/article/luxury-celebration-travel",
  },
]

export function TrendingSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {trendingArticles.map((article) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {additionalArticles.map((article) => (
          <div key={article.id} className="relative group cursor-pointer">
            <Link href={article.href}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold text-balance">{article.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured business article */}
      <div className="mt-8">
        <div className="relative group cursor-pointer">
          <Link href="/article/company-formations">
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=700"
                alt="Business formation consultation"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge variant="secondary" className="mb-3 bg-green-600 text-white hover:bg-green-700">
                  Business
                </Badge>
                <h3 className="text-2xl font-bold mb-2 text-balance">
                  How Your Company Formations Helped Me Launch My Business Without the Legal Headache
                </h3>
                <p className="text-sm text-white/90 max-w-2xl">
                  Starting a business was always a dream of mine, but the thought of dealing with legal paperwork, tax
                  implications, and regulatory requirements made it feel like a nightmare I'd rather avoid.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
