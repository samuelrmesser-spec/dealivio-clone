"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"
import { getArticlesByCategory } from "@/lib/articles"

const travelCategories = ["Travel", "Transportation", "Adventure", "Destinations"]

export default function TravelPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const travelArticles = getArticlesByCategory("Travel")
  const filteredArticles =
    selectedCategory === "all"
      ? travelArticles
      : travelArticles.filter(
          (article) => article.tags?.includes(selectedCategory.toLowerCase()) || article.category === selectedCategory,
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Travel</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover amazing destinations, travel tips, and transportation options for your next adventure.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={travelCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="grid" columns={3} />
    </div>
  )
}
