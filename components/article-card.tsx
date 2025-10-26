import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
  title: string
  category: string
  categoryColor?: string
  image: string
  href: string
  excerpt?: string
  author?: string
  publishedAt?: string
  variant?: "default" | "large" | "small" | "horizontal"
  className?: string
}

export function ArticleCard({
  title,
  category,
  categoryColor = "bg-blue-600",
  image,
  href,
  excerpt,
  author,
  publishedAt,
  variant = "default",
  className,
}: ArticleCardProps) {
  const aspectRatio = {
    default: "aspect-[4/3]",
    large: "aspect-[16/9]",
    small: "aspect-[3/2]",
    horizontal: "aspect-[16/9]",
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("group cursor-pointer", className)}>
        <Link href={href}>
          <div className="flex space-x-4">
            <div className={cn("relative w-32 flex-shrink-0 overflow-hidden rounded-lg", aspectRatio[variant])}>
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-2">
              <Badge variant="secondary" className={cn("text-white hover:opacity-90", categoryColor)}>
                {category}
              </Badge>
              <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
              {excerpt && <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>}
              {(author || publishedAt) && (
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  {author && <span>{author}</span>}
                  {author && publishedAt && <span>•</span>}
                  {publishedAt && <span>{publishedAt}</span>}
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={cn("relative group cursor-pointer", className)}>
      <Link href={href}>
        <div className={cn("relative overflow-hidden rounded-lg", aspectRatio[variant])}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <Badge variant="secondary" className={cn("mb-2 text-white hover:opacity-90", categoryColor)}>
              {category}
            </Badge>
            <h3
              className={cn(
                "font-semibold text-balance",
                variant === "large" ? "text-xl" : variant === "small" ? "text-sm" : "text-lg",
              )}
            >
              {title}
            </h3>
            {excerpt && variant === "large" && <p className="text-sm text-white/90 mt-2 line-clamp-2">{excerpt}</p>}
            {(author || publishedAt) && (
              <div className="flex items-center space-x-2 text-xs text-white/80 mt-2">
                {author && <span>{author}</span>}
                {author && publishedAt && <span>•</span>}
                {publishedAt && <span>{publishedAt}</span>}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
