import { Search, Bell, Menu } from "lucide-react"
import { Button, Avatar, AvatarFallback, AvatarImage, Input } from "@/lib/components-index";
import Link from "next/link"

export function NavBar() {

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
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
            <span className="hidden font-bold text-xl md:inline-block">AnimeVault</span>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:gap-10">
            <nav className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
              >
                Anime
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
              >
                Manga
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
              >
                Community
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
              >
                Seasonal
              </Link>
            </nav>
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search anime, manga, or users..."
                  className="w-full rounded-full pl-8 pr-4 focus-visible:ring-purple-500"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-purple-600"></span>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-purple-600"></span>
            </Button>
          </div>
        </div>
      </header>
    )
}