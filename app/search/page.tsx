"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArticleGrid } from "@/components/article-grid"
import { CategoryFilter } from "@/components/category-filter"
import { searchArticles, articles } from "@/lib/articles"

const allCategories = Array.from(new Set(articles.map((article) => article.category)))

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchResults, setSearchResults] = useState(articles)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      setIsLoading(true)

      // Simulate search delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300))

      let results = query ? searchArticles(query) : articles

      if (selectedCategory !== "all") {
        results = results.filter((article) => article.category === selectedCategory)
      }

      setSearchResults(results)
      setIsLoading(false)
    }

    performSearch()
  }, [query, selectedCategory])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // The search is already handled by the useEffect
  }

  const clearSearch = () => {
    setQuery("")
    setSelectedCategory("all")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Search header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Search Articles</h1>
          <p className="text-lg text-muted-foreground">Find articles on topics that interest you</p>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for articles, topics, or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-lg"
            />
          </div>
        </form>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter by Category
            </h3>
            {(query || selectedCategory !== "all") && (
              <Button variant="outline" size="sm" onClick={clearSearch}>
                Clear All
              </Button>
            )}
          </div>
          <CategoryFilter
            categories={allCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Search results info */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">
                {isLoading ? (
                  "Searching..."
                ) : (
                  <>
                    {searchResults.length} {searchResults.length === 1 ? "result" : "results"}
                    {query && (
                      <>
                        {" "}
                        for{" "}
                        <Badge variant="secondary" className="mx-1">
                          {query}
                        </Badge>
                      </>
                    )}
                    {selectedCategory !== "all" && (
                      <>
                        {" "}
                        in{" "}
                        <Badge variant="outline" className="mx-1">
                          {selectedCategory}
                        </Badge>
                      </>
                    )}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Search results */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted aspect-[4/3] rounded-lg mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-muted h-4 rounded w-1/4"></div>
                  <div className="bg-muted h-6 rounded w-3/4"></div>
                  <div className="bg-muted h-4 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : searchResults.length > 0 ? (
          <ArticleGrid articles={searchResults} variant="grid" columns={3} />
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <Search className="h-16 w-16 text-muted-foreground mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground mb-6">
              {query
                ? `We couldn't find any articles matching "${query}"`
                : "Try adjusting your search terms or browse our categories"}
            </p>
            <div className="space-x-4">
              <Button onClick={clearSearch}>Clear Search</Button>
              <Button variant="outline" asChild>
                <a href="/">Browse All Articles</a>
              </Button>
            </div>
          </div>
        )}

        {/* Popular searches */}
        {!query && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {["travel", "beauty", "home decor", "technology", "lifestyle", "fashion"].map((term) => (
                <Button key={term} variant="outline" size="sm" onClick={() => setQuery(term)} className="rounded-full">
                  {term}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
