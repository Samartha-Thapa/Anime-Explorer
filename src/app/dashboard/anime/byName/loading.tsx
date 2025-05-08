import type React from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
}

export default function AnimeLoading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-blue-600/30 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/50"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container -mt-40 relative z-10 pb-12">
        <div className="mb-6">
          <div className="h-9 w-32 rounded-md bg-white/10 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="overflow-hidden rounded-lg bg-gradient-to-b from-purple-400/20 via-indigo-400/20 to-pink-400/20 aspect-[3/4] animate-pulse">
                <div className="h-full w-full bg-gradient-to-b from-transparent to-black/30"></div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="h-10 flex-1 rounded-md bg-purple-600/30 animate-pulse"></div>
                <div className="h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                <div className="h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-yellow-400/70 animate-pulse"></div>
                  <div className="space-y-1">
                    <div className="h-6 w-16 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    <div className="h-4 w-24 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 w-20 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                      <div className="h-4 w-16 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    </div>
                  ))}
                </div>

                <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>

                <div className="space-y-2">
                  <div className="h-5 w-24 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="flex justify-between">
                        <div className="h-4 w-16 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                        <div className="h-4 w-12 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <div className="h-6 w-16 rounded-full bg-purple-600/30 animate-pulse"></div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-6 w-16 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                ))}
              </div>
              <div className="h-10 w-3/4 rounded-md bg-white/10 animate-pulse mb-1"></div>
              <div className="h-6 w-1/2 rounded-md bg-white/10 animate-pulse"></div>
            </div>

            <div className="space-y-4">
              <div className="h-10 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="h-8 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="h-4 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="h-4 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="h-4 w-3/4 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div className="h-8 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="aspect-video w-full rounded-lg bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse">
                    <div className="flex h-full items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/10 animate-pulse flex items-center justify-center">
                        <div className="h-8 w-8 rounded-md bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-8 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-24 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-8 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 animate-pulse"></div>
                          <div>
                            <div className="h-5 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                            <div className="h-4 w-24 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse mt-1"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
