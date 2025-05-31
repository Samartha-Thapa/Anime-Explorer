import { Skeleton } from "@/components/ui/skeleton"

export function AnimeCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm w-full">
      <div className="relative aspect-[2/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse"></div>
      </div>
      <div className="absolute right-1.5 top-1.5 z-10 md:right-2 md:top-2">
        <Skeleton className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-white/10" />
      </div>
      <div className="p-1.5 md:p-2">
        <Skeleton className="mb-1 h-3 w-3/4 bg-white/10 md:h-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <Skeleton className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-400/30" />
            <Skeleton className="h-2.5 w-6 md:h-3 md:w-8 bg-white/10" />
          </div>
          <Skeleton className="h-5 w-12 md:w-16 rounded-full bg-purple-600/20" />
        </div>
      </div>
    </div>
  )
}