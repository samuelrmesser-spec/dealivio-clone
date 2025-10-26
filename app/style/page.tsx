"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"
import { getArticlesByCategory } from "@/lib/articles"

const styleCategories = ["Style", "Fashion", "Beauty", "Trends"]

export default function StylePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const styleArticles = getArticlesByCategory("Style")
  const filteredArticles =
    selectedCategory === "all"
      ? styleArticles
      : styleArticles.filter(
          (article) => article.tags?.includes(selectedCategory.toLowerCase()) || article.category === selectedCategory,
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Style</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Stay ahead of the latest fashion trends, beauty tips, and style inspiration.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={styleCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="masonry" columns={3} />
    </div>
  )
}
