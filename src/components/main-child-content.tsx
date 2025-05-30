import { Button, Tabs, TabsContent, TabsList, TabsTrigger, Badge, Card, CardContent, } from "@/lib/components-index"
import Image from "next/image"
import { Star, Play } from "lucide-react"
import { SideBarProps } from "@/lib/types"
import StaffAnime from "./anime-staff"
import AnimeCharacter from "./anime-characters"
import ChildRecommendedAnime from "./child-recommended-anime"

export default function MainChildContent({anime}: SideBarProps){
  if (!anime) {
    return <div>Loading anime data...</div>;
  }
    return(
        <div className="md:col-span-3 space-y-8">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge className="bg-purple-600">{anime.status}</Badge>
            {anime.genres?.map((genre, i) => (
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
                {anime.studios?.map((studio, i) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {studio.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Staff</h2>
             <StaffAnime animeId={anime.mal_id}/>
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

                <AnimeCharacter animeId={anime.mal_id}/>

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

          <ChildRecommendedAnime />
        </Tabs>
      </div>
    )
}