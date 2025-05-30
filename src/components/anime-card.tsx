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
    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md w-full">
      <Link href={`/dashboard/anime/byId/${animeId}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title || "anime title"}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
          />
          {/* Mobile-optimized overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100"></div>
          <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-2">
            <p className="line-clamp-2 text-[11px] md:text-sm font-medium text-white">
              {title}
            </p>
          </div>
        </div>
      </Link>
      
      {/* Compact action button */}
      <div className="absolute right-1.5 top-1.5 z-10 md:right-2 md:top-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
        >
          <Plus className="h-2.5 w-2.5 md:h-3 md:w-3" />
        </Button>
      </div>
      
      {/* Bottom info section */}
      <div className="p-1.5 md:p-2">
        <div className="mb-1 line-clamp-1 text-[11px] md:text-xs font-medium">
          {title}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {score ? (
              <>
                <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] md:text-xs">
                  {score.toFixed(1)}
                </span>
              </>
            ) : (
              <span className="text-[10px] md:text-xs text-muted-foreground">
                N/A
              </span>
            )}
          </div>
          <Badge
            variant="outline"
            className={`text-[10px] md:text-xs px-1 py-0 h-5 ${
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