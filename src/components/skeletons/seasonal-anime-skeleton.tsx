import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function SeasonalAnimeSkeleton() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm">
            <div className="relative aspect-[2/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <Skeleton className="h-4 w-3/4 mb-1 bg-white/10" />
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-3 w-3 rounded-full bg-yellow-400/50" />
                    <Skeleton className="h-3 w-6 bg-white/10" />
                  </div>
                  <Skeleton className="h-3 w-12 bg-white/10" />
                </div>
              </div>
            </div>
            <div className="absolute right-2 top-2">
              <Skeleton className="h-7 w-7 rounded-full bg-white/10" />
            </div>
            <div className="p-3">
              <div className="flex flex-wrap gap-1">
                <Skeleton className="h-5 w-16 rounded-full bg-purple-600/20" />
                <Skeleton className="h-5 w-16 rounded-full bg-indigo-600/20" />
              </div>
              <Skeleton className="mt-2 h-3 w-24 bg-white/10" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
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
