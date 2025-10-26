"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"
import { getArticlesByCategory } from "@/lib/articles"

const homeDecorCategories = ["Home & Decor", "Interior Design", "Furniture", "DIY"]

export default function HomeDecorPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const homeDecorArticles = getArticlesByCategory("Home & Decor")
  const filteredArticles =
    selectedCategory === "all"
      ? homeDecorArticles
      : homeDecorArticles.filter(
          (article) => article.tags?.includes(selectedCategory.toLowerCase()) || article.category === selectedCategory,
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Home & Decor</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Transform your living space with inspiring home decor ideas, furniture guides, and interior design tips.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={homeDecorCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="grid" columns={3} />
    </div>
  )
}
