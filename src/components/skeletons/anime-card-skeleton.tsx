import { Skeleton } from "@/components/ui/skeleton"

export function AnimeCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-[2/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse rounded-t-lg"></div>
      </div>
      <div className="absolute right-2 top-2 z-10">
        <Skeleton className="h-7 w-7 rounded-full bg-white/10" />
      </div>
      <div className="p-2">
        <Skeleton className="mb-1 h-4 w-3/4 bg-white/10" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-3 rounded-full bg-yellow-400/30" />
            <Skeleton className="h-3 w-6 bg-white/10" />
          </div>
          <Skeleton className="h-5 w-16 rounded-full bg-purple-600/20" />
        </div>
      </div>
    </div>
  )
}
