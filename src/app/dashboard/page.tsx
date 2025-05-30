import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { UserStats } from "@/components/user-stats";
import Link from "next/link";
import { GetStartedLink } from "@/components/get-started-link";
import { 
  SeasonalAnime, 
  ShowAnime, 
  AnimeTabs 
} from "@/lib/components-index";
import { 
  ShowAnimeSkeleton, 
  AnimeTabsSkeleton, 
  SeasonalAnimeSkeleton 
} from "@/lib/skeleton-index";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Responsive Navigation */}
      <main className="container px-4 md:px-6 py-4 md:py-6">
        {/* Hero Section */}
        <section className="mb-6 md:mb-10">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
            <div className="relative grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-10 lg:p-12">
              <div className="flex flex-col justify-center space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <h1 className="text-xl font-bold tracking-tighter text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    Track Your Anime Journey
                  </h1>
                  <p className="text-sm md:text-base max-w-[600px] text-white/80 md:text-xl">
                    Keep track of your anime and manga, share with friends, and discover new series.
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <GetStartedLink href="/register" className="text-sm md:text-base">
                    Get Started
                  </GetStartedLink>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white/10 md:size-default"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              
              {/* ShowAnime with responsive handling */}
              <div className="hidden md:block">
                <Suspense fallback={<ShowAnimeSkeleton />}>
                  <ShowAnime />
                </Suspense>
              </div>
              
            </div>
          </div>
        </section>

        {/* User Stats */}
        <UserStats />

        {/* Seasonal Anime */}
        <section className="mb-6 md:mb-10">
          <div className="mb-3 md:mb-4 flex items-center justify-between">
            <h2 className="text-lg md:text-2xl font-bold">Spring 2025 Anime</h2>
            <Link href="/dashboard/anime-list">
              <Button variant="ghost" size="sm" className="gap-1 text-purple-600 dark:text-purple-400 md:size-default">
                View All <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
          <Suspense fallback={<SeasonalAnimeSkeleton />}>
            <SeasonalAnime />
          </Suspense>
        </section>

        {/* Quick Actions (Mobile only) */}
        <section className="md:hidden mb-6">
          <h2 className="text-lg font-bold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
          </div>
        </section>

        {/* Anime Tabs */}
        <Suspense fallback={<AnimeTabsSkeleton />}>
          <AnimeTabs />
        </Suspense>

        {/* Mobile spacer */}
        <div className="h-16 md:hidden" />
      </main>
    </div>
  );
}