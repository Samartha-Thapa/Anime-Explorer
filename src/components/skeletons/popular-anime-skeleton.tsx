import { Skeleton } from "@/components/ui/skeleton"

export function PopularAnimeSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="relative overflow-hidden rounded-md aspect-[2/3]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <div className="flex items-center gap-1">
                <Skeleton className="h-3 w-3 rounded-full bg-yellow-400/50" />
                <Skeleton className="h-3 w-10 bg-white/10" />
              </div>
            </div>
          </div>
          <div>
            <Skeleton className="h-4 w-3/4 bg-white/10" />
            <Skeleton className="h-3 w-1/2 mt-1 bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  )
}
