"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchDialog } from "@/components/search-dialog"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Trends", href: "/trends" },
  { name: "Travel", href: "/travel" },
  { name: "Style", href: "/style" },
  { name: "Selfcare", href: "/selfcare" },
  { name: "Home & Decor", href: "/home-decor" },
  { name: "Tech & Gadgets", href: "/tech-gadgets" },
  { name: "Automotive & Transport", href: "/automotive" },
  { name: "Lifestyle", href: "/lifestyle" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and search */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">DEALIVIO</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <SearchDialog>
              <div className="relative flex-1 cursor-pointer">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <div className="pl-10 pr-4 h-10 border border-input bg-background rounded-md flex items-center text-sm text-muted-foreground hover:bg-accent transition-colors">
                  Search
                </div>
              </div>
            </SearchDialog>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation menu */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block border-t md:border-t-0 py-4 md:py-0`}>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <SearchDialog>
            <div className="relative cursor-pointer">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <div className="pl-10 pr-4 h-10 border border-input bg-background rounded-md flex items-center text-sm text-muted-foreground">
                Search
              </div>
            </div>
          </SearchDialog>
        </div>
      </div>
    </header>
  )
}
