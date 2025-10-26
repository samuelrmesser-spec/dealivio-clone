import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArticleGrid } from "@/components/article-grid"
import { getArticleById, getFeaturedArticles } from "@/lib/articles"
import { ArrowLeft, Calendar, User, Share2, Bookmark } from "lucide-react"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getFeaturedArticles(3).filter((a) => a.id !== article.id)

  // Mock article content
  const articleContent = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <h2>Key Points to Consider</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    
    <h2>What This Means for You</h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
    
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
  `

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge variant="secondary" className={`text-white hover:opacity-90 ${article.categoryColor}`}>
              {article.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>

          {/* Article meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-8">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: articleContent }} />
        </div>

        {/* Tags */}
        {article.tags && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Separator className="my-12" />

        {/* Author bio */}
        <div className="mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{article.author}</h3>
              <p className="text-muted-foreground text-sm">
                Expert writer specializing in {article.category.toLowerCase()} content. Passionate about sharing
                insights and helping readers make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="max-w-6xl mx-auto">
        <Separator className="mb-12" />
        <ArticleGrid articles={relatedArticles} title="Related Articles" variant="grid" columns={3} />
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  // In a real app, you'd fetch all article slugs from your data source
  return [
    { slug: "flugstress-ade" },
    { slug: "plagron-nicht-helfen" },
    { slug: "family-wears-costumes" },
    { slug: "hairbrush-saved-time" },
    { slug: "redken-collection" },
    { slug: "beauty-chic-marketing" },
    { slug: "diversity-appliances" },
    { slug: "transform-space-decorations" },
  ]
}
