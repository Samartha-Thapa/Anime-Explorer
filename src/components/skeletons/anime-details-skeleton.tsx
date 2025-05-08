import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export function AnimeDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left column - Image and info */}
      <div className="md:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-lg overflow-hidden">
            <div className="w-full aspect-[2/3] bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded-full bg-yellow-400/50" />
              <div className="flex items-baseline gap-2">
                <Skeleton className="h-6 w-8 bg-white/10" />
                <Skeleton className="h-4 w-24 bg-white/10" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Skeleton className="h-4 w-20 bg-white/10" />
                <Skeleton className="h-4 w-10 bg-white/10" />
              </div>
              <Skeleton className="h-2 w-full bg-purple-600/20" />

              <div className="flex justify-between text-sm">
                <Skeleton className="h-4 w-20 bg-white/10" />
                <Skeleton className="h-4 w-16 bg-white/10" />
              </div>

              <div className="flex justify-between text-sm">
                <Skeleton className="h-4 w-20 bg-white/10" />
                <Skeleton className="h-4 w-12 bg-white/10" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-5 w-24 bg-white/10" />
              <Separator className="bg-gray-800" />

              <div className="grid grid-cols-2 gap-2 text-sm">
                {Array.from({ length: 18 }).map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full bg-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column - Details */}
      <div className="md:col-span-2 space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-32 bg-white/10" />
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full bg-white/10" />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-32 bg-white/10" />
          <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse">
            <div className="flex h-full items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/10 animate-pulse flex items-center justify-center">
                <div className="h-8 w-8 rounded-md bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-32 bg-white/10" />

          <div className="space-y-4">
            <div>
              <Skeleton className="h-6 w-24 mb-2 bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-6 w-20 rounded-full bg-gray-800/50" />
                ))}
              </div>
            </div>

            <div>
              <Skeleton className="h-6 w-24 mb-2 bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className={`h-6 w-20 rounded-full ${
                      index % 3 === 0 ? "bg-red-500/20" : index % 3 === 1 ? "bg-blue-500/20" : "bg-purple-500/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-32 bg-white/10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900 border border-gray-800">
                <Skeleton className="h-[60px] w-[60px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20" />
                <div>
                  <Skeleton className="h-4 w-24 bg-white/10" />
                  <Skeleton className="h-3 w-12 mt-1 bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
