"use client"

import { useState } from "react"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"
import { getArticlesByCategory } from "@/lib/articles"

const selfcareCategories = ["Selfcare", "Wellness", "Beauty", "Health"]

export default function SelfcarePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const selfcareArticles = getArticlesByCategory("Selfcare")
  const filteredArticles =
    selectedCategory === "all"
      ? selfcareArticles
      : selfcareArticles.filter(
          (article) => article.tags?.includes(selectedCategory.toLowerCase()) || article.category === selectedCategory,
        )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Selfcare</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Prioritize your wellbeing with our curated selfcare tips, wellness advice, and beauty routines.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter
          categories={selfcareCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <ArticleGrid articles={filteredArticles} variant="grid" columns={2} />
    </div>
  )
}
