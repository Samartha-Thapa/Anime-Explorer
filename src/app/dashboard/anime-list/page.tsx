import { AnimeListMainContent, FilterDesktop, FilterMobile, NavBar } from "@/lib/components-index"

export default function AllAnimeList() {

  // Mock data for anime list
  // const animeList = [
  //   {
  //     id: 1,
  //     title: "Demon Slayer: Hashira Training Arc",
  //     image: "/placeholder.svg?height=300&width=200&text=DemonSlayer",
  //     score: 9.1,
  //     episodes: 12,
  //     status: "Airing",
  //     genres: ["Action", "Fantasy"],
  //     studio: "ufotable",
  //   },
  // ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <NavBar />

      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Explore Anime</h1>
          <p className="text-muted-foreground">Discover and track your favorite anime series</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <FilterDesktop />
          

          {/* Filters - Mobile */}
          <FilterMobile />
          

          {/* Main Content */}
          <AnimeListMainContent />
        </div>
      </main>
    </div>
  )
}
