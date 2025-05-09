import type React from "react"
// import { cn } from "@/lib/utils"

// function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
//   return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
// }

export default function RegisterLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30"></div>

        {/* Floating anime-style elements */}
        <div className="absolute top-[15%] left-[8%] animate-float">
          <div className="w-20 h-20 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-pink-400/30 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-[25%] right-[12%] animate-float-slow">
          <div className="w-24 h-24 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-indigo-400/30 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[10%] animate-float">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-purple-400/30 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[15%] animate-float-slow">
          <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-400/30 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center">
        {/* Logo and title */}
        <div className="mb-8 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-70"></div>
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 border border-purple-400/50 animate-pulse"></div>
          </div>
          <div className="mt-4 h-10 w-48 rounded-md bg-gradient-to-r from-white/30 to-purple-200/30 animate-pulse mx-auto"></div>
          <div className="mt-2 h-5 w-64 rounded-md bg-purple-200/30 animate-pulse mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-md">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg blur opacity-75"></div>

            {/* Card content */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 shadow-xl">
              <div className="mb-6 text-center">
                <div className="h-8 w-64 rounded-md bg-gradient-to-r from-yellow-400/30 to-purple-400/30 animate-pulse mx-auto"></div>
                <div className="mt-1 h-4 w-72 rounded-md bg-purple-200/20 animate-pulse mx-auto"></div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-5 w-20 rounded-md bg-purple-100/20 animate-pulse"></div>
                  <div className="h-10 w-full rounded-md bg-gray-800/50 border border-purple-500/30 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-20 rounded-md bg-purple-100/20 animate-pulse"></div>
                  <div className="h-10 w-full rounded-md bg-gray-800/50 border border-purple-500/30 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-20 rounded-md bg-purple-100/20 animate-pulse"></div>
                  <div className="h-10 w-full rounded-md bg-gray-800/50 border border-purple-500/30 animate-pulse"></div>
                  <div className="h-4 w-full rounded-md bg-purple-300/10 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-36 rounded-md bg-purple-100/20 animate-pulse"></div>
                  <div className="h-10 w-full rounded-md bg-gray-800/50 border border-purple-500/30 animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <div className="h-4 w-4 rounded bg-purple-500/50 animate-pulse"></div>
                  <div className="h-4 w-64 rounded-md bg-purple-200/20 animate-pulse"></div>
                </div>
                <div className="h-10 w-full rounded-md bg-gradient-to-r from-indigo-600/70 to-pink-600/70 animate-pulse mt-6"></div>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-purple-500/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="h-4 w-36 rounded-md bg-purple-300/20 animate-pulse bg-gray-900/50 px-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-10 w-full rounded-md bg-gray-800/50 border border-purple-500/30 animate-pulse"></div>
                  <div className="h-10 w-full rounded-md bg-gray-800/50 border border-purple-500/30 animate-pulse"></div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="h-4 w-64 rounded-md bg-purple-200/20 animate-pulse mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Anime characters */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="relative w-32 h-32 bg-gradient-to-b from-transparent to-purple-500/10 rounded-full animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-400/20 to-pink-400/20 animate-pulse"></div>
              </div>
            </div>
            <div className="relative w-32 h-32 bg-gradient-to-b from-transparent to-pink-500/10 rounded-full animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
