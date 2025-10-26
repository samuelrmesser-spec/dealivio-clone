import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main featured article */}
        <div className="lg:col-span-2 relative group cursor-pointer">
          <Link href="/article/flugstress-ade">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/ferry-boats-on-water-with-passengers.jpg"
                alt="Ferry boats on water"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge variant="secondary" className="mb-3 bg-blue-600 text-white hover:bg-blue-700">
                  Travel
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-balance">
                  Flugstress adé: Warum immer mehr Reisende auf P&O Ferries umsteigen
                </h1>
                <p className="text-sm text-white/90 mb-3">
                  Der Wechsel zu entspannteren Reisemöglichkeiten. Wir beleuchten die Gründe, warum Reisende auf den
                  Komfort der Fähren setzen und ein Gefühl der Ruhe und Bequemlichkeit erleben.
                </p>
                <span className="text-xs text-white/80">Travel</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Side articles */}
        <div className="space-y-6">
          <div className="relative group cursor-pointer">
            <Link href="/article/plagron-nicht-helfen">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/person-in-distress-or-concern.jpg"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge variant="secondary" className="mb-2 bg-red-600 text-white hover:bg-red-700">
                    News
                  </Badge>
                  <h3 className="text-lg font-semibold mb-1 text-balance">
                    Was Plagron nicht helfen kann (und was P&O Ferries anbietet)
                  </h3>
                  <span className="text-xs text-white/80">News</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group cursor-pointer">
            <Link href="/article/family-wears-costumes">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/family-wearing-matching-costumes-or-outfits.jpg"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge variant="secondary" className="mb-2 bg-purple-600 text-white hover:bg-purple-700">
                    Style
                  </Badge>
                  <h3 className="text-lg font-semibold mb-1 text-balance">
                    My whole family wears Costumes and we never leave the house anymore
                  </h3>
                  <span className="text-xs text-white/80">Style</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
