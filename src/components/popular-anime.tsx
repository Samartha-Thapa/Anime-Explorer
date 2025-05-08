import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function PopularAnime() {
  const popularAnime = [
    {
      id: 1,
      title: "Demon Slayer: Hashira Training Arc",
      image: "/placeholder.svg?height=300&width=200",
      score: 9.1,
      season: "Spring 2025",
    },
    {
      id: 2,
      title: "My Hero Academia Season 7",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.7,
      season: "Spring 2025",
    },
    {
      id: 3,
      title: "Jujutsu Kaisen Season 3",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.9,
      season: "Summer 2025",
    },
    {
      id: 4,
      title: "Chainsaw Man Part 2",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.8,
      season: "Spring 2025",
    },
    {
      id: 5,
      title: "Spy x Family Season 3",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.6,
      season: "Summer 2025",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {popularAnime.map((anime) => (
        <Link href={`/dashboard/anime/${anime.id}`} key={anime.id} className="group">
          <div className="space-y-2">
            <div className="relative overflow-hidden rounded-md aspect-[2/3]">
              <Image
                src={anime.image || "/placeholder.svg"}
                alt={anime.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-medium">{anime.score}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm line-clamp-2 group-hover:text-red-400 transition-colors">
                {anime.title}
              </h3>
              <p className="text-xs text-gray-400">{anime.season}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
