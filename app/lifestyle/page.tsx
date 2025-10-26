"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"

const lifestyleCategories = ["Lifestyle", "Wellness", "Productivity", "Relationships"]

// Mock lifestyle articles
const lifestyleArticles = [
  {
    id: "lifestyle-1",
    title: "Mindful Living: Simple Practices for a More Balanced Life",
    category: "Lifestyle",
    categoryColor: "bg-green-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/mindful-living",
    excerpt: "Discover practical mindfulness techniques to reduce stress and improve your overall well-being.",
    author: "Wellness Coach",
    publishedAt: "2024-01-15",
    tags: ["lifestyle", "wellness", "mindfulness"],
  },
  {
    id: "lifestyle-2",
    title: "Work-Life Balance in the Digital Age: Strategies That Actually Work",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/work-life-balance",
    excerpt: "Practical tips for maintaining healthy boundaries between work and personal life in our connected world.",
    author: "Productivity Expert",
    publishedAt: "2024-01-14",
    tags: ["lifestyle", "productivity", "work-life-balance"],
  },
  {
    id: "lifestyle-3",
    title: "Building Meaningful Relationships in a Digital World",
    category: "Lifestyle",
    categoryColor: "bg-purple-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/meaningful-relationships",
    excerpt: "How to foster genuine connections and maintain strong relationships despite digital distractions.",
    author: "Relationship Coach",
    publishedAt: "2024-01-13",
    tags: ["lifestyle", "relationships", "social"],
  },
]

export default function LifestylePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredArticles =
    selectedCategory === "all"
      ? lifestyleArticles
      : lifestyleArticles.filter(
          (article) => article.tags?.includes(selectedCategory.toLowerCase()) || article.category === selectedCategory,
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Lifestyle</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Enhance your daily life with tips on wellness, productivity, relationships, and personal growth.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={lifestyleCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="list" columns={1} />
    </div>
  )
}
