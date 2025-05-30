import { ChevronRight } from "lucide-react"
import {
  Button,
  SeasonalAnime,
  ShowAnime,
  AnimeTabs,
} from "@/lib/components-index";
import {
  ShowAnimeSkeleton,
  AnimeTabsSkeleton,
  SeasonalAnimeSkeleton,
} from "@/lib/skeleton-index";
import { Suspense } from "react"
import { UserStats } from "@/components/user-stats"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      <main className="container py-6">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
            <div className="relative grid grid-cols-1 gap-4 p-6 md:grid-cols-2 md:p-10 lg:p-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl">
                    Track Your Anime Journey
                  </h1>
                  <p className="text-muted-100 max-w-[600px] text-white/80 md:text-xl">
                     Keep track of your anime and manga, share with friends, and discover new series.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-purple-600 hover:bg-white/90">Get Started</Button>
                  <Button variant="outline" className="border-white text  -white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
              {/* // Here top show */}
              <div className="md:block hidden">
                <Suspense fallback={<ShowAnimeSkeleton />}>
                  <ShowAnime />
                </Suspense>
              </div>

            </div>
          </div>
        </section>

        {/* User Stats Section */}
        <UserStats />
      

        {/* Seasonal Anime */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Spring 2025 Anime</h2>
            <Link href="/dashboard/anime-list">
              <Button variant="ghost" className="gap-1 text-purple-600 dark:text-purple-400">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <Suspense fallback={<SeasonalAnimeSkeleton />}>
            <SeasonalAnime />
          </Suspense>
        </section>

        {/* Tabs Section */}
        <Suspense fallback={<AnimeTabsSkeleton />}>
          <AnimeTabs />
        </Suspense>
      </main>

    </div>
  )
}
