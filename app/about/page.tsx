import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Editor-in-Chief",
    bio: "Passionate about lifestyle trends and helping readers discover amazing products.",
  },
  {
    name: "Michael Chen",
    role: "Tech Writer",
    bio: "Technology enthusiast covering the latest gadgets and innovations.",
  },
  {
    name: "Emma Rodriguez",
    role: "Style Editor",
    bio: "Fashion and beauty expert with an eye for emerging trends.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover. Inspire. <span className="text-primary">Transform.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Dealivio, we're passionate about helping you discover the latest trends, products, and lifestyle
            inspiration that can transform your everyday life. Our curated content spans across multiple categories to
            bring you the best of what's new and noteworthy.
          </p>
        </div>

        {/* Mission section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quality Content</h3>
                <p className="text-muted-foreground">
                  We carefully curate and create high-quality content that provides real value to our readers, helping
                  them make informed decisions about products and lifestyle choices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Diverse Perspectives</h3>
                <p className="text-muted-foreground">
                  Our team brings together diverse expertise across travel, style, technology, home decor, and more to
                  offer comprehensive insights for every interest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stay connected with us for the latest updates, exclusive content, and insider tips on the trends that matter
            most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/search">Explore Articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
