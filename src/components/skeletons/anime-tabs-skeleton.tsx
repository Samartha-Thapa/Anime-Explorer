import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export function AnimeTabsSkeleton() {
  return (
    <section>
      <Tabs defaultValue="trending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
        </TabsList>
        <TabsContent value="trending" className="space-y-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden border bg-card shadow-sm">
                <div className="aspect-[2/3] w-full bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse"></div>
                <div className="p-2 space-y-2">
                  <Skeleton className="h-4 w-full bg-white/10" />
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <Skeleton className="h-3 w-3 rounded-full bg-yellow-400/30" />
                      <Skeleton className="h-3 w-6 bg-white/10" />
                    </div>
                    <Skeleton className="h-5 w-16 rounded-full bg-purple-600/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
