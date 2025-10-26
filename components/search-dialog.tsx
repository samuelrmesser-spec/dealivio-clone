"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { searchArticles } from "@/lib/articles"

interface SearchDialogProps {
  children: React.ReactNode
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    // Simulate search delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const searchResults = searchArticles(searchQuery).slice(0, 5)
    setResults(searchResults)
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    handleSearch(value)
  }

  const handleResultClick = (href: string) => {
    setOpen(false)
    setQuery("")
    setResults([])
    router.push(href)
  }

  const handleViewAllResults = () => {
    setOpen(false)
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Articles</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for articles, topics, or keywords..."
              value={query}
              onChange={handleInputChange}
              className="pl-10"
              autoFocus
            />
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map((article) => (
                <div
                  key={article.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  onClick={() => handleResultClick(article.href)}
                >
                  <div className="w-16 h-12 bg-muted rounded flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="secondary" className={`text-xs mb-1 ${article.categoryColor} text-white`}>
                      {article.category}
                    </Badge>
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">{article.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{article.excerpt}</p>
                  </div>
                </div>
              ))}

              {query && (
                <div className="pt-2 border-t">
                  <Button variant="outline" onClick={handleViewAllResults} className="w-full bg-transparent">
                    View all results for "{query}"
                  </Button>
                </div>
              )}
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{query}"</p>
            </div>
          )}

          {!query && (
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {["travel", "beauty", "home decor", "technology"].map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery(term)
                      handleSearch(term)
                    }}
                    className="rounded-full text-xs"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
