import type React from "react"
// import { cn } from "@/lib/utils"

// function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
//   return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
// }

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex md:hidden">
            <div className="h-10 w-10 rounded-md bg-purple-100 dark:bg-purple-900/20 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-200 dark:bg-purple-700/30 animate-pulse"></div>
            <div className="h-6 w-32 rounded-md bg-purple-100 dark:bg-purple-900/20 animate-pulse hidden md:block"></div>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:gap-10">
            <nav className="flex items-center space-x-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-16 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
              ))}
            </nav>
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="relative w-full max-w-sm">
                <div className="h-9 w-full rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
              <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden ml-auto">
            <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
            <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/20 animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 h-[300px] animate-pulse">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative grid grid-cols-1 gap-4 p-6 md:grid-cols-2 md:p-10 lg:p-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="h-8 w-3/4 rounded-md bg-white/20 animate-pulse"></div>
                  <div className="h-4 w-full rounded-md bg-white/20 animate-pulse"></div>
                  <div className="h-4 w-2/3 rounded-md bg-white/20 animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="h-10 w-32 rounded-md bg-white/20 animate-pulse"></div>
                  <div className="h-10 w-32 rounded-md bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="grid grid-cols-3 gap-1 md:gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-md shadow-lg h-[100px] w-[70px] bg-gradient-to-b from-purple-400/20 to-blue-400/20 animate-pulse"
                    >
                      <div className="h-full w-full bg-gradient-to-b from-transparent to-black/30"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Stats Section */}
        <section className="mb-10">
          <div className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 animate-pulse"></div>
                <div>
                  <div className="h-6 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse mb-2"></div>
                  <div className="h-4 w-24 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="flex flex-col items-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/10 animate-pulse">
                  <div className="h-8 w-16 rounded-md bg-purple-200 dark:bg-purple-700/30 animate-pulse mb-2"></div>
                  <div className="h-4 w-12 rounded-md bg-purple-100 dark:bg-purple-800/20 animate-pulse"></div>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-pink-50 dark:bg-pink-900/10 animate-pulse">
                  <div className="h-8 w-16 rounded-md bg-pink-200 dark:bg-pink-700/30 animate-pulse mb-2"></div>
                  <div className="h-4 w-12 rounded-md bg-pink-100 dark:bg-pink-800/20 animate-pulse"></div>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 animate-pulse">
                  <div className="h-8 w-16 rounded-md bg-blue-200 dark:bg-blue-700/30 animate-pulse mb-2"></div>
                  <div className="h-4 w-12 rounded-md bg-blue-100 dark:bg-blue-800/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Anime */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-8 w-48 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
            <div className="h-9 w-24 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-t-md bg-gradient-to-b from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70 animate-pulse"></div>
                    <div className="h-3 w-8 rounded-md bg-white/70 animate-pulse"></div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="h-4 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse mb-2"></div>
                  <div className="flex flex-wrap gap-1">
                    <div className="h-5 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 animate-pulse"></div>
                    <div className="h-5 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs Section */}
        <section>
          <div className="h-10 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse mb-6"></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-t-md bg-gradient-to-b from-purple-400/20 via-indigo-400/20 to-pink-400/20 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70 animate-pulse"></div>
                    <div className="h-3 w-8 rounded-md bg-white/70 animate-pulse"></div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="h-7 w-7 rounded-full bg-black/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="h-4 w-full rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse mb-2"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-yellow-400/70 animate-pulse"></div>
                      <div className="h-3 w-8 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    </div>
                    <div className="h-5 w-16 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6 dark:bg-gray-900 mt-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 w-24 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t pt-6 flex justify-center">
            <div className="h-4 w-64 rounded-md bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
