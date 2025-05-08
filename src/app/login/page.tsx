import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Sparkles } from "lucide-react"
import { LoginForm } from "@/components/login-form"

export const metadata: Metadata = {
  title: "Login | AnimeVault",
  description: "Login to your AnimeVault account",
}

export default function LoginPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFycyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI5NSIgY3k9IjE1IiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIxNSIgY3k9Ijk1IiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjgwIiByPSIxLjUiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PGNpcmNsZSBjeD0iODUiIGN5PSIzNSIgcj0iMC41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjIiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIwLjUiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iNDUiIHI9IjAuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXJzKSIvPjwvc3ZnPg==')] opacity-30"></div>

        {/* Floating anime-style elements */}
        <div className="absolute top-[10%] left-[5%] animate-float-slow">
          <div className="w-16 h-16 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40&text=🎭"
              alt="Anime icon"
              width={40}
              height={40}
              className="opacity-80"
            />
          </div>
        </div>
        <div className="absolute top-[20%] right-[10%] animate-float">
          <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=50&width=50&text=🌟"
              alt="Anime icon"
              width={50}
              height={50}
              className="opacity-80"
            />
          </div>
        </div>
        <div className="absolute bottom-[15%] left-[15%] animate-float-slow">
          <div className="w-24 h-24 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=60&width=60&text=🔮"
              alt="Anime icon"
              width={60}
              height={60}
              className="opacity-80"
            />
          </div>
        </div>
        <div className="absolute bottom-[25%] right-[8%] animate-float">
          <div className="w-16 h-16 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=40&width=40&text=⚔️"
              alt="Anime icon"
              width={40}
              height={40}
              className="opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center">
        {/* Logo and title */}
        <div className="mb-8 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-70"></div>
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 border border-purple-400/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            AnimeVault
          </h1>
          <p className="mt-2 text-purple-200">Your gateway to the anime universe</p>
        </div>

        {/* Main content */}
        <div className="w-full max-w-md">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75"></div>

            {/* Card content */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 shadow-xl">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  Welcome Back, Senpai!
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                </h2>
                <p className="text-purple-200 text-sm mt-1">Enter your credentials to continue your journey</p>
              </div>

              <LoginForm />

              <div className="mt-6 text-center">
                <p className="text-sm text-purple-200">
                  New to the anime realm?{" "}
                  <Link href="/register" className="font-medium text-pink-400 hover:text-pink-300 transition-colors">
                    Join our guild
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Anime character */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-40 h-40">
              <Image
                src="/placeholder.svg?height=160&width=160&text=Anime Character"
                alt="Anime character"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
