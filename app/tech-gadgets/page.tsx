"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"

const techCategories = ["Tech & Gadgets", "Electronics", "Innovation", "Reviews"]

// Mock tech articles since we don't have many in our data
const techArticles = [
  {
    id: "tech-1",
    title: "The Future of Smart Home Technology: What to Expect in 2024",
    category: "Tech & Gadgets",
    categoryColor: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/smart-home-2024",
    excerpt: "Explore the latest innovations in smart home technology and how they'll transform our daily lives.",
    author: "Tech Expert",
    publishedAt: "2024-01-15",
    tags: ["tech", "smart-home", "innovation"],
  },
  {
    id: "tech-2",
    title: "Best Wireless Earbuds for Every Budget: Complete 2024 Guide",
    category: "Tech & Gadgets",
    categoryColor: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/wireless-earbuds-guide",
    excerpt: "Find the perfect wireless earbuds with our comprehensive review of the top options available.",
    author: "Audio Specialist",
    publishedAt: "2024-01-14",
    tags: ["tech", "audio", "reviews"],
  },
  {
    id: "tech-3",
    title: "Sustainable Tech: Eco-Friendly Gadgets That Make a Difference",
    category: "Tech & Gadgets",
    categoryColor: "bg-green-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/sustainable-tech",
    excerpt: "Discover environmentally conscious technology choices that don't compromise on performance.",
    author: "Green Tech Writer",
    publishedAt: "2024-01-13",
    tags: ["tech", "sustainability", "eco-friendly"],
  },
]

export default function TechGadgetsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredArticles =
    selectedCategory === "all"
      ? techArticles
      : techArticles.filter(
          (article) => article.tags?.includes(selectedCategory.toLowerCase()) || article.category === selectedCategory,
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Tech & Gadgets</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Stay updated with the latest technology trends, gadget reviews, and innovative solutions for modern life.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={techCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="grid" columns={3} />
    </div>
  )
}
