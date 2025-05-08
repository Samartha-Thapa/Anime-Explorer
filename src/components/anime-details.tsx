import Image from "next/image"
import Link from "next/link"
import { Star, Tv, BookOpen } from "lucide-react"
import { Badge, Progress, Separator } from "@/lib/components-index";

export default function AnimeDetails() {
  // This would normally come from an API call
  const animeData = {
    mal_id: 51818,
    title: "Fire Force Season 3",
    title_japanese: "炎炎ノ消防隊 参ノ章",
    images: {
      jpg: {
        large_image_url: "https://cdn.myanimelist.net/images/anime/1527/146836l.jpg",
      },
    },
    trailer: {
      youtube_id: "nz-VCl7yUAw",
      embed_url: "https://www.youtube.com/embed/nz-VCl7yUAw",
    },
    type: "TV",
    source: "Manga",
    episodes: 12,
    status: "Currently Airing",
    airing: true,
    aired: {
      string: "Apr 5, 2025 to ?",
    },
    duration: "24 min per ep",
    rating: "PG-13 - Teens 13 or older",
    score: 8,
    scored_by: 13464,
    popularity: 1253,
    members: 207869,
    favorites: 1320,
    synopsis: "Third season of Enen no Shouboutai.",
    season: "spring",
    year: 2025,
    studios: [{ name: "David Production" }],
    genres: [{ name: "Action" }, { name: "Fantasy" }, { name: "Sci-Fi" }],
    themes: [{ name: "Urban Fantasy" }],
    demographics: [{ name: "Shounen" }],
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={animeData.images.jpg.large_image_url || "/placeholder.svg"}
              alt={animeData.title}
              width={350}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold">{animeData.score}</span>
                <span className="text-sm text-gray-400">{animeData.scored_by.toLocaleString()} users</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Popularity</span>
                <span>#{animeData.popularity}</span>
              </div>
              <Progress value={75} className="h-2 bg-gray-800">
                <div className="h-full bg-red-500 rounded-full" />
              </Progress>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Members</span>
                <span>{animeData.members.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Favorites</span>
                <span>{animeData.favorites.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Information</h3>
              <Separator className="bg-gray-800" />

              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-gray-400">Type</span>
                <span>{animeData.type}</span>

                <span className="text-gray-400">Episodes</span>
                <span>{animeData.episodes}</span>

                <span className="text-gray-400">Status</span>
                <span>{animeData.status}</span>

                <span className="text-gray-400">Aired</span>
                <span>{animeData.aired.string}</span>

                <span className="text-gray-400">Season</span>
                <span className="capitalize">
                  {animeData.season} {animeData.year}
                </span>

                <span className="text-gray-400">Duration</span>
                <span>{animeData.duration}</span>

                <span className="text-gray-400">Rating</span>
                <span>{animeData.rating}</span>

                <span className="text-gray-400">Source</span>
                <span>{animeData.source}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Synopsis</h2>
          <p className="text-gray-300 leading-relaxed">
            The third season of Fire Force continues the story of Shinra Kusakabe and the Special Fire Force Company 8.
            As they delve deeper into the mysteries of the Infernals and the Evangelist's plans, new challenges and
            enemies await. With the revelation of the true nature of the world and the Adolla Burst, Shinra must harness
            his powers to protect humanity from the impending doom.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Trailer</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={animeData.trailer.embed_url}
              title={`${animeData.title} Trailer`}
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Details</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Tv className="h-5 w-5 text-red-500" />
                Studios
              </h3>
              <div className="flex flex-wrap gap-2">
                {animeData.studios.map((studio, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-800 hover:bg-gray-700">
                    {studio.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-red-500" />
                Genres
              </h3>
              <div className="flex flex-wrap gap-2">
                {animeData.genres.map((genre, index) => (
                  <Link href={`/dashboard/genres/${genre.name.toLowerCase()}`} key={index}>
                    <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/30">
                      {genre.name}
                    </Badge>
                  </Link>
                ))}
                {animeData.themes.map((theme, index) => (
                  <Link href={`/dashboard/themes/${theme.name.toLowerCase().replace(" ", "-")}`} key={index}>
                    <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-blue-500/30">
                      {theme.name}
                    </Badge>
                  </Link>
                ))}
                {animeData.demographics.map((demo, index) => (
                  <Link href={`/dashboard/demographics/${demo.name.toLowerCase()}`} key={index}>
                    <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-purple-500/30">
                      {demo.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Staff</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900 border border-gray-800">
                <Image
                  src={`/placeholder.svg?height=60&width=60`}
                  alt={`Staff ${i}`}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Staff Name {i}</p>
                  <p className="text-sm text-gray-400">Role</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
