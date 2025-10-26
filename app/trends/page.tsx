"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"
import { getFeaturedArticles } from "@/lib/articles"

const trendCategories = ["All Trends", "Fashion", "Tech", "Lifestyle", "Beauty"]

export default function TrendsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const trendingArticles = getFeaturedArticles(12)
  const filteredArticles =
    selectedCategory === "all"
      ? trendingArticles
      : trendingArticles.filter(
          (article) =>
            article.tags?.includes(selectedCategory.toLowerCase()) ||
            article.category.toLowerCase().includes(selectedCategory.toLowerCase()),
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Trending Now</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Stay ahead of the curve with the latest trends across fashion, technology, lifestyle, and more.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={trendCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="masonry" columns={3} />
    </div>
  )
}
