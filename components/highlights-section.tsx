"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const highlights = [
  {
    id: 1,
    title: "5 Hot Beauty Chic Marketing Promotional Style for Any Occasion",
    category: "Style",
    categoryColor: "bg-purple-600",
    image: "/beauty-marketing-promotional-style.jpg",
    href: "/article/beauty-chic-marketing",
  },
  {
    id: 2,
    title: "Diversity Appliances That Turn Any Home Into Smooth Nature",
    category: "Home & Decor",
    categoryColor: "bg-green-600",
    image: "/modern-home-appliances-in-natural-setting.jpg",
    href: "/article/diversity-appliances",
  },
  {
    id: 3,
    title: "Transform Your Space: The Perfect Joy of Home Decorations",
    category: "Home & Decor",
    categoryColor: "bg-green-600",
    image: "/beautiful-home-decorations-and-interior-design.jpg",
    href: "/article/transform-space-decorations",
  },
  {
    id: 4,
    title: "Loserdorf – Mehr als Reitsport, ein Lebensgefühl",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    image: "/equestrian-lifestyle-and-horse-riding.jpg",
    href: "/article/loserdorf-reitsport",
  },
]

export function HighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, highlights.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Highlights</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex >= maxIndex}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {highlights.map((highlight) => (
            <div key={highlight.id} className="w-1/3 flex-shrink-0 px-3">
              <div className="relative group cursor-pointer">
                <Link href={highlight.href}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <Badge
                        variant="secondary"
                        className={`mb-2 text-white hover:opacity-90 ${highlight.categoryColor}`}
                      >
                        {highlight.category}
                      </Badge>
                      <h3 className="text-sm font-semibold text-balance">{highlight.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
