import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {  Star, Play } from "lucide-react"
import AnimeCard from "@/components/anime-card"
import { Anime } from "@/lib/types"

interface SideBarProps {
    anime: Anime;
  }

export default function MainChildContent({anime}: SideBarProps){
  if (!anime) {
    return <div>Loading anime data...</div>;
  }
    return(

        <div className="md:col-span-3 space-y-8">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge className="bg-purple-600">{anime.status}</Badge>
            {anime.genres.map((genre, i) => (
              <Badge key={i} variant="outline">
                {genre.name}
              </Badge>
            ))}
          </div>
          <h1 className="mb-1 text-3xl font-bold md:text-4xl">{anime.title}</h1>
          <p className="text-lg text-muted-foreground">{anime.title_japanese}</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="episodes">Episodes</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Synopsis</h2>
              <p className="leading-relaxed">{anime.synopsis}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Trailer</h2>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${anime.trailer?.youtube_id}`}
                  title={`${anime.title} Trailer`}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Studios</h2>
              <div className="flex flex-wrap gap-2">
                {anime.studios.map((studio, i) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {studio.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Staff</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={`/placeholder.svg?height=60&width=60`}
                          alt={`Staff ${i}`}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">Staff Name {i}</p>
                          <p className="text-sm text-muted-foreground">Director</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="episodes" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Episodes</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Mark All as Seen
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Episode {i + 1}: Episode Title</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              24m
                            </Badge>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Play className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">Aired: April {5 + i}, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="characters" className="space-y-4">
            <h2 className="text-2xl font-bold">Characters & Voice Actors</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Image
                        src={`/placeholder.svg?height=100&width=70&text=Char${i + 1}`}
                        alt={`Character ${i + 1}`}
                        width={70}
                        height={100}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">Character Name {i + 1}</h3>
                        <p className="text-sm text-muted-foreground">Main Character</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Japanese
                          </Badge>
                          <span className="text-sm">Voice Actor {i + 1}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Reviews</h2>
              <Button className="gap-1">
                <Star className="h-4 w-4" /> Write a Review
              </Button>
            </div>

            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Image
                        src={`/placeholder.svg?height=50&width=50&text=User${i + 1}`}
                        alt={`User ${i + 1}`}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Username {i + 1}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span>{(Math.random() * 2 + 7)}</span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">Posted on May {i + 1}, 2025</p>
                        <p className="mt-3">
                          This is a review for Fire Force Season 3. The animation quality continues to be top-notch,
                          and the story is getting more interesting with each episode. The character development is
                          well-done, and the action scenes are spectacular.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <h2 className="text-2xl font-bold">Recommendations</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <AnimeCard
                  key={i}
                  title={`Recommended Anime ${i + 1}`}
                  image={`/placeholder.svg?height=300&width=200&text=Rec${i + 1}`}
                  score={(Math.random() * 2 + 7)}
                  episodes={Math.floor(Math.random() * 24) + 1}
                  status={i % 3 === 0 ? "Airing" : "Completed"}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
}