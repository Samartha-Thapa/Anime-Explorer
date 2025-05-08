import { Skeleton } from "@/components/ui/skeleton"

export function AnimeHeroSkeleton() {
  return (
    <div className="relative h-[300px] md:h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-blue-600/30 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/50"></div>
      </div>
      <div className="container relative h-full flex items-end pb-12">
        <div className="w-full max-w-2xl space-y-4">
          <Skeleton className="h-8 w-3/4 bg-white/10" />
          <Skeleton className="h-4 w-full bg-white/10" />
          <Skeleton className="h-4 w-2/3 bg-white/10" />
          <div className="flex gap-2 pt-4">
            <Skeleton className="h-10 w-32 rounded-md bg-purple-600/30" />
            <Skeleton className="h-10 w-32 rounded-md bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}
