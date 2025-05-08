import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function RecommendedAnime() {

  const recommendedAnime = [
    {
      id: 101,
      title: "Soul Eater",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.0,
      reason: "From the same studio as Fire Force",
    },
    {
      id: 102,
      title: "Promare",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.1,
      reason: "Similar fire-themed action",
    },
    {
      id: 103,
      title: "Blue Exorcist",
      image: "/placeholder.svg?height=300&width=200",
      score: 7.6,
      reason: "Similar supernatural themes",
    },
    {
      id: 104,
      title: "Dororo",
      image: "/placeholder.svg?height=300&width=200",
      score: 8.2,
      reason: "Dark fantasy action",
    },
    {
      id: 105,
      title: "Kabaneri of the Iron Fortress",
      image: "/placeholder.svg?height=300&width=200",
      score: 7.3,
      reason: "Post-apocalyptic action",
    },
  ]



  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {recommendedAnime.map((anime) => (
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
              <p className="text-xs text-gray-400 line-clamp-1">{anime.reason}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
