import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimeCardSkeleton } from "./anime-card-skeleton"

export function SeasonalAnimeSkeleton() {
  return (
    <div className="relative">
      {/* Mobile Skeleton */}
      <div className="md:hidden overflow-x-auto pb-2 -mx-4 pl-4 no-scrollbar">
        <div className="flex gap-2.5 w-max pr-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-[110px] flex-shrink-0">
              <AnimeCardSkeleton />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Skeleton */}
      <div className="hidden md:grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <AnimeCardSkeleton key={i} />
        ))}
      </div>

      {/* Pagination Skeleton (Desktop only) */}
      <div className="hidden md:flex items-center justify-center gap-2 mt-4">
        <Button variant="outline" size="icon" disabled>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Skeleton className="h-4 w-12 bg-white/10" />
        <Button variant="outline" size="icon" disabled>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}