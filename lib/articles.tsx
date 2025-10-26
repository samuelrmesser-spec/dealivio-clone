export interface Article {
  id: string
  title: string
  category: string
  categoryColor: string
  image: string
  href: string
  excerpt: string
  author: string
  publishedAt: string
  content?: string
  tags?: string[]
}

export const articles: Article[] = [
  {
    id: "flugstress-ade",
    title: "Flugstress adé: Warum immer mehr Reisende auf P&O Ferries umsteigen",
    category: "Travel",
    categoryColor: "bg-blue-600",
    image: "/ferry-boats-on-water-with-passengers.jpg",
    href: "/article/flugstress-ade",
    excerpt:
      "Der Wechsel zu entspannteren Reisemöglichkeiten. Wir beleuchten die Gründe, warum Reisende auf den Komfort der Fähren setzen und ein Gefühl der Ruhe und Bequemlichkeit erleben.",
    author: "Travel Team",
    publishedAt: "2024-01-15",
    tags: ["travel", "ferry", "transportation"],
    content: `
      <p>In einer Zeit, in der Flugreisen oft mit Stress, langen Warteschlangen und unvorhersehbaren Verzögerungen verbunden sind, entdecken immer mehr Reisende die Vorteile von Fährverbindungen. P&O Ferries bietet eine entspannte Alternative, die nicht nur komfortabler, sondern auch oft kostengünstiger ist.</p>
      
      <h2>Die Vorteile der Fährreise</h2>
      <p>Fährreisen bieten eine einzigartige Kombination aus Komfort und Entspannung. Anders als bei Flugreisen können Passagiere ihr Auto mitnehmen, was besonders für Familienurlaube oder längere Aufenthalte praktisch ist. Die großzügigen Kabinen und Aufenthaltsbereiche sorgen für eine angenehme Reiseerfahrung.</p>
      
      <h2>Kosteneffizienz und Flexibilität</h2>
      <p>Neben dem Komfort punkten Fährreisen auch bei den Kosten. Besonders für Familien oder Gruppen können die Gesamtkosten deutlich unter denen von Flugreisen liegen, wenn man Gepäckgebühren, Parkkosten am Flughafen und andere versteckte Kosten berücksichtigt.</p>
    `,
  },
  {
    id: "plagron-nicht-helfen",
    title: "Was Plagron nicht helfen kann (und was P&O Ferries anbietet)",
    category: "News",
    categoryColor: "bg-red-600",
    image: "/person-in-distress-or-concern.jpg",
    href: "/article/plagron-nicht-helfen",
    excerpt: "Eine kritische Betrachtung der Grenzen bestimmter Lösungen und bessere Alternativen für Reisende.",
    author: "News Team",
    publishedAt: "2024-01-14",
    tags: ["news", "analysis", "travel"],
    content: `
      <p>Während viele Produkte und Dienstleistungen große Versprechen machen, ist es wichtig, realistische Erwartungen zu haben und echte Alternativen zu kennen. In diesem Artikel betrachten wir kritisch, wo bestimmte Lösungen an ihre Grenzen stoßen.</p>
      
      <h2>Realistische Erwartungen setzen</h2>
      <p>Nicht jedes Problem lässt sich mit einer einzigen Lösung beheben. Es ist wichtig, die Grenzen verschiedener Ansätze zu verstehen und entsprechend zu planen.</p>
      
      <h2>Bewährte Alternativen</h2>
      <p>Statt auf unerprobte Lösungen zu setzen, lohnt es sich oft, auf bewährte Alternativen zurückzugreifen, die sich über Jahre hinweg als zuverlässig erwiesen haben.</p>
    `,
  },
  {
    id: "family-wears-costumes",
    title: "My whole family wears Costumes and we never leave the house anymore",
    category: "Style",
    categoryColor: "bg-purple-600",
    image: "/family-wearing-matching-costumes-or-outfits.jpg",
    href: "/article/family-wears-costumes",
    excerpt: "A unique family's approach to fashion and lifestyle during changing times.",
    author: "Style Editor",
    publishedAt: "2024-01-13",
    tags: ["style", "family", "lifestyle"],
  },
  {
    id: "hairbrush-saved-time",
    title: "How hairbrush Saved My Time, Stress, and Money",
    category: "Beauty",
    categoryColor: "bg-pink-600",
    image: "/hairbrush-and-hair-care-products.jpg",
    href: "/article/hairbrush-saved-time",
    excerpt: "Discover how the right hair tools can transform your daily routine and save you valuable resources.",
    author: "Beauty Expert",
    publishedAt: "2024-01-12",
    tags: ["beauty", "hair-care", "productivity"],
  },
  {
    id: "redken-collection",
    title: "An In-Depth Look at TheTLShop.com's Exclusive Redken Hair Care Collection",
    category: "Selfcare",
    categoryColor: "bg-green-600",
    image: "/luxury-hair-care-products-collection.jpg",
    href: "/article/redken-collection",
    excerpt: "Exploring premium hair care solutions and their impact on your daily self-care routine.",
    author: "Selfcare Specialist",
    publishedAt: "2024-01-11",
    tags: ["selfcare", "hair-care", "luxury"],
  },
  {
    id: "beauty-chic-marketing",
    title: "5 Hot Beauty Chic Marketing Promotional Style for Any Occasion",
    category: "Style",
    categoryColor: "bg-purple-600",
    image: "/beauty-marketing-promotional-style.jpg",
    href: "/article/beauty-chic-marketing",
    excerpt: "Master the art of promotional styling with these essential beauty marketing strategies.",
    author: "Marketing Pro",
    publishedAt: "2024-01-10",
    tags: ["style", "marketing", "beauty"],
  },
  {
    id: "diversity-appliances",
    title: "Diversity Appliances That Turn Any Home Into Smooth Nature",
    category: "Home & Decor",
    categoryColor: "bg-green-600",
    image: "/modern-home-appliances-in-natural-setting.jpg",
    href: "/article/diversity-appliances",
    excerpt: "Transform your living space with appliances that bring natural harmony to modern homes.",
    author: "Home Expert",
    publishedAt: "2024-01-09",
    tags: ["home-decor", "appliances", "nature"],
  },
  {
    id: "transform-space-decorations",
    title: "Transform Your Space: The Perfect Joy of Home Decorations",
    category: "Home & Decor",
    categoryColor: "bg-green-600",
    image: "/beautiful-home-decorations-and-interior-design.jpg",
    href: "/article/transform-space-decorations",
    excerpt: "Discover how thoughtful decorations can completely transform your living environment.",
    author: "Interior Designer",
    publishedAt: "2024-01-08",
    tags: ["home-decor", "interior-design", "decoration"],
  },
]

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id)
}

export function getFeaturedArticles(count = 6): Article[] {
  return articles.slice(0, count)
}

export function searchArticles(query: string): Article[] {
  const lowercaseQuery = query.toLowerCase()
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.category.toLowerCase().includes(lowercaseQuery) ||
      article.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
