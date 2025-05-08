"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Filter, ChevronLeft, ChevronRight, SlidersHorizontal, Search } from "lucide-react"

import { NavBar } from "@/components/top-nav"
import { Button, Input, Badge, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components-index"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export default function AllAnimeList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  // Mock data for anime list
  const animeList = [
    {
      id: 1,
      title: "Demon Slayer: Hashira Training Arc",
      image: "/placeholder.svg?height=300&width=200&text=DemonSlayer",
      score: 9.1,
      episodes: 12,
      status: "Airing",
      genres: ["Action", "Fantasy"],
      studio: "ufotable",
    },
    {
      id: 2,
      title: "My Hero Academia Season 7",
      image: "/placeholder.svg?height=300&width=200&text=MHA",
      score: 8.7,
      episodes: 24,
      status: "Airing",
      genres: ["Action", "Superhero"],
      studio: "Bones",
    },
    {
      id: 3,
      title: "Jujutsu Kaisen Season 3",
      image: "/placeholder.svg?height=300&width=200&text=JJK",
      score: 8.9,
      episodes: 24,
      status: "Airing",
      genres: ["Action", "Supernatural"],
      studio: "MAPPA",
    },
    {
      id: 4,
      title: "Chainsaw Man Part 2",
      image: "/placeholder.svg?height=300&width=200&text=CSM",
      score: 8.8,
      episodes: 12,
      status: "Airing",
      genres: ["Action", "Horror"],
      studio: "MAPPA",
    },
    {
      id: 5,
      title: "Spy x Family Season 3",
      image: "/placeholder.svg?height=300&width=200&text=SxF",
      score: 8.6,
      episodes: 12,
      status: "Airing",
      genres: ["Comedy", "Action"],
      studio: "WIT Studio",
    },
    {
      id: 6,
      title: "One Piece Season 21",
      image: "/placeholder.svg?height=300&width=200&text=OnePiece",
      score: 8.5,
      episodes: 48,
      status: "Airing",
      genres: ["Adventure", "Fantasy"],
      studio: "Toei Animation",
    },
    {
      id: 7,
      title: "Attack on Titan: Final Season",
      image: "/placeholder.svg?height=300&width=200&text=AOT",
      score: 9.2,
      episodes: 16,
      status: "Completed",
      genres: ["Action", "Drama"],
      studio: "MAPPA",
    },
    {
      id: 8,
      title: "Bleach: Thousand-Year Blood War",
      image: "/placeholder.svg?height=300&width=200&text=Bleach",
      score: 8.9,
      episodes: 13,
      status: "Completed",
      genres: ["Action", "Supernatural"],
      studio: "Pierrot",
    },
    {
      id: 9,
      title: "Fullmetal Alchemist: Brotherhood",
      image: "/placeholder.svg?height=300&width=200&text=FMAB",
      score: 9.1,
      episodes: 64,
      status: "Completed",
      genres: ["Action", "Adventure"],
      studio: "Bones",
    },
    {
      id: 10,
      title: "Death Note",
      image: "/placeholder.svg?height=300&width=200&text=DeathNote",
      score: 8.6,
      episodes: 37,
      status: "Completed",
      genres: ["Mystery", "Psychological"],
      studio: "Madhouse",
    },
    {
      id: 11,
      title: "Steins;Gate",
      image: "/placeholder.svg?height=300&width=200&text=SteinsGate",
      score: 9.0,
      episodes: 24,
      status: "Completed",
      genres: ["Sci-Fi", "Thriller"],
      studio: "White Fox",
    },
    {
      id: 12,
      title: "Hunter x Hunter (2011)",
      image: "/placeholder.svg?height=300&width=200&text=HxH",
      score: 9.0,
      episodes: 148,
      status: "Completed",
      genres: ["Action", "Adventure"],
      studio: "Madhouse",
    },
  ]

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxVisibleButtons = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2))
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1)

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1)
    }

    if (startPage > 1) {
      buttons.push(
        <Button key="1" variant="outline" size="icon" className="h-8 w-8" onClick={() => goToPage(1)}>
          1
        </Button>,
      )
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>,
        )
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          size="icon"
          className="h-8 w-8"
          onClick={() => goToPage(i)}
        >
          {i}
        </Button>,
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>,
        )
      }
      buttons.push(
        <Button key={totalPages} variant="outline" size="icon" className="h-8 w-8" onClick={() => goToPage(totalPages)}>
          {totalPages}
        </Button>,
      )
    }

    return buttons
  }

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
          <div className="hidden md:block w-64 space-y-6">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Status</h3>
                  <div className="space-y-2">
                    {["Airing", "Completed", "Upcoming"].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox id={`status-${status}`} />
                        <label
                          htmlFor={`status-${status}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Genres</h3>
                  <div className="space-y-2">
                    {[
                      "Action",
                      "Adventure",
                      "Comedy",
                      "Drama",
                      "Fantasy",
                      "Horror",
                      "Mystery",
                      "Romance",
                      "Sci-Fi",
                    ].map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox id={`genre-${genre}`} />
                        <label
                          htmlFor={`genre-${genre}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Year</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="older">2020 & Older</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Rating</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="g">G - All Ages</SelectItem>
                      <SelectItem value="pg">PG - Children</SelectItem>
                      <SelectItem value="pg13">PG-13 - Teens 13+</SelectItem>
                      <SelectItem value="r">R - 17+ (violence & profanity)</SelectItem>
                      <SelectItem value="r+">R+ - Mild Nudity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Filters - Mobile */}
          <div className="md:hidden mb-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                    <DrawerDescription>Refine your anime search</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="status">
                        <AccordionTrigger>Status</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {["Airing", "Completed", "Upcoming"].map((status) => (
                              <div key={status} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-status-${status}`} />
                                <label
                                  htmlFor={`mobile-status-${status}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {status}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="genres">
                        <AccordionTrigger>Genres</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "Action",
                              "Adventure",
                              "Comedy",
                              "Drama",
                              "Fantasy",
                              "Horror",
                              "Mystery",
                              "Romance",
                              "Sci-Fi",
                            ].map((genre) => (
                              <div key={genre} className="flex items-center space-x-2">
                                <Checkbox id={`mobile-genre-${genre}`} />
                                <label
                                  htmlFor={`mobile-genre-${genre}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {genre}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="year">
                        <AccordionTrigger>Year</AccordionTrigger>
                        <AccordionContent>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Any year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                              <SelectItem value="older">2020 & Older</SelectItem>
                            </SelectContent>
                          </Select>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="rating">
                        <AccordionTrigger>Rating</AccordionTrigger>
                        <AccordionContent>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Any rating" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="g">G - All Ages</SelectItem>
                              <SelectItem value="pg">PG - Children</SelectItem>
                              <SelectItem value="pg13">PG-13 - Teens 13+</SelectItem>
                              <SelectItem value="r">R - 17+ (violence & profanity)</SelectItem>
                              <SelectItem value="r+">R+ - Mild Nudity</SelectItem>
                            </SelectContent>
                          </Select>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <DrawerFooter>
                    <Button>Apply Filters</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search anime..."
                  className="w-full pl-8 pr-4 focus-visible:ring-purple-500"
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select defaultValue="popularity">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="score">Score</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {animeList.map((anime) => (
                <div
                  key={anime.id}
                  className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
                >
                  <Link href={`/anime/${anime.id}`} className="block">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="line-clamp-2 text-sm font-medium text-white">{anime.title}</h3>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-white">{anime.score}</span>
                          </div>
                          <span className="text-xs text-white/80">{anime.episodes} eps</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {anime.genres.slice(0, 2).map((genre, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">{anime.studio}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1} className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>

              <div className="flex items-center">{renderPaginationButtons()}</div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
