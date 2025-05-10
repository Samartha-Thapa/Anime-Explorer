import Link from "next/link"
import Image from "next/image"
import { Star, Plus } from "lucide-react"
import { Badge, Button } from "@/lib/components-index"

interface AnimeCardProps {
  title: string
  image: string
  score: number | null
  animeId: string | number
  episodes: number
  status: string
} 


export default function AnimeCard({ title, animeId, image, score, status }: AnimeCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <Link href={`/dashboard/anime/byId/${animeId}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title || "anime title"}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <p className="line-clamp-2 text-sm font-medium">{title}</p>
          </div>
        </div>
      </Link>
      <div className="absolute right-2 top-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-2">
        <div className="mb-1 line-clamp-1 text-sm font-medium">{title}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {score ? (
              <>
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs">{score}</span>
              </>
            ) : (
              <span className="text-xs text-muted-foreground">Not rated</span>
            )}
          </div>
          <Badge
            variant="outline"
            className={`text-xs ${
              status === "Airing"
                ? "border-green-500/50 text-green-600 dark:text-green-400"
                : status === "Not Yet Aired"
                  ? "border-blue-500/50 text-blue-600 dark:text-blue-400"
                  : "border-gray-500/50 text-gray-600 dark:text-gray-400"
            }`}
          >
            {status}
          </Badge>
        </div>
      </div>
    </div>
  )
}
