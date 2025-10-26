import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"

export default function ArticleNotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <FileX className="h-16 w-16 text-muted-foreground mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the article you're looking for. It may have been moved or deleted.
        </p>
        <div className="space-y-4">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div>
            <Button variant="outline" asChild>
              <Link href="/search">Search Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
