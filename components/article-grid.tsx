import { ArticleCard } from "./article-card"

interface Article {
  id: string | number
  title: string
  category: string
  categoryColor?: string
  image: string
  href: string
  excerpt?: string
  author?: string
  publishedAt?: string
}

interface ArticleGridProps {
  articles: Article[]
  title?: string
  variant?: "masonry" | "grid" | "list"
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export function ArticleGrid({ articles, title, variant = "grid", columns = 3, className }: ArticleGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  if (variant === "list") {
    return (
      <section className={className}>
        {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
        <div className="space-y-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              categoryColor={article.categoryColor}
              image={article.image}
              href={article.href}
              excerpt={article.excerpt}
              author={article.author}
              publishedAt={article.publishedAt}
              variant="horizontal"
            />
          ))}
        </div>
      </section>
    )
  }

  if (variant === "masonry") {
    return (
      <section className={className}>
        {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {articles.map((article, index) => (
            <div key={article.id} className="break-inside-avoid">
              <ArticleCard
                title={article.title}
                category={article.category}
                categoryColor={article.categoryColor}
                image={article.image}
                href={article.href}
                excerpt={article.excerpt}
                author={article.author}
                publishedAt={article.publishedAt}
                variant={index === 0 ? "large" : index % 3 === 0 ? "small" : "default"}
              />
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className={className}>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            category={article.category}
            categoryColor={article.categoryColor}
            image={article.image}
            href={article.href}
            excerpt={article.excerpt}
            author={article.author}
            publishedAt={article.publishedAt}
            variant={index === 0 && columns >= 2 ? "large" : "default"}
          />
        ))}
      </div>
    </section>
  )
}
