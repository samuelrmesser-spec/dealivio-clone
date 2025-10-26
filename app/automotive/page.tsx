"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"

const automotiveCategories = ["Automotive", "Electric Vehicles", "Car Reviews", "Transportation"]

// Mock automotive articles
const automotiveArticles = [
  {
    id: "auto-1",
    title: "Electric Vehicle Revolution: Top EV Models to Watch in 2024",
    category: "Automotive & Transport",
    categoryColor: "bg-green-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/ev-revolution-2024",
    excerpt:
      "Discover the most promising electric vehicles hitting the market this year and their impact on transportation.",
    author: "Auto Expert",
    publishedAt: "2024-01-15",
    tags: ["automotive", "electric-vehicles", "reviews"],
  },
  {
    id: "auto-2",
    title: "The Complete Guide to Car Maintenance: Keep Your Vehicle Running Smoothly",
    category: "Automotive & Transport",
    categoryColor: "bg-blue-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/car-maintenance-guide",
    excerpt: "Essential maintenance tips and schedules to extend your vehicle's lifespan and performance.",
    author: "Mechanic Pro",
    publishedAt: "2024-01-14",
    tags: ["automotive", "maintenance", "tips"],
  },
  {
    id: "auto-3",
    title: "Future of Transportation: Autonomous Vehicles and Smart Cities",
    category: "Automotive & Transport",
    categoryColor: "bg-purple-600",
    image: "/placeholder.svg?height=300&width=400",
    href: "/article/future-transportation",
    excerpt: "Explore how self-driving cars and smart infrastructure will reshape urban mobility.",
    author: "Future Tech Writer",
    publishedAt: "2024-01-13",
    tags: ["automotive", "autonomous", "smart-cities"],
  },
]

export default function AutomotivePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredArticles =
    selectedCategory === "all"
      ? automotiveArticles
      : automotiveArticles.filter(
          (article) =>
            article.tags?.includes(selectedCategory.toLowerCase()) || article.category.includes(selectedCategory),
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Automotive & Transport</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore the latest in automotive technology, vehicle reviews, and transportation innovations.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={automotiveCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="grid" columns={3} />
    </div>
  )
}
