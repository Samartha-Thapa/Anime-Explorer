"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Search, List, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-14 items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px]">
              <SheetHeader className="border-b pb-4 mb-4">
                <SheetTitle className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                  <span className="font-bold text-xl">AnimeVault</span>
                </SheetTitle>
              </SheetHeader>

              <div className="py-4">
                <div className="flex items-center gap-3 mb-6 px-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Username</p>
                    <p className="text-xs text-muted-foreground">View Profile</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    <Home className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/anime"
                    className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    <List className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Anime</span>
                  </Link>
                  <Link
                    href="/community"
                    className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span>Community</span>
                  </Link>
                </div>

                <div className="mt-6 border-t pt-6">
                  <h3 className="mb-2 px-2 text-sm font-medium text-muted-foreground">Categories</h3>
                  <div className="space-y-1">
                    {["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi"].map(
                      (category) => (
                        <Link
                          key={category}
                          href={`/anime?category=${category.toLowerCase()}`}
                          className="block px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          {category}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              <span className="font-bold text-lg">AnimeVault</span>
            </Link>
          </div>

          <div className="ml-auto">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t">
        <div className="flex items-center justify-around h-16">
          <Link href="/dashboard" className="flex flex-col items-center justify-center w-full h-full text-xs">
            <Home className="h-5 w-5 mb-1" />
            <span>Home</span>
          </Link>
          <Link href="/anime" className="flex flex-col items-center justify-center w-full h-full text-xs">
            <List className="h-5 w-5 mb-1" />
            <span>Anime</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center justify-center w-full h-full text-xs">
            <Search className="h-5 w-5 mb-1" />
            <span>Search</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full text-xs">
            <User className="h-5 w-5 mb-1" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  )
}
