'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Star, Heart, BookmarkPlus, Share2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Anime } from "@/lib/types";

interface SideBarProps {
    anime: Anime;
  }

export default function SideBar({anime}: SideBarProps){
    return (
        <div className="md:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={anime.images?.jpg?.image_url || "/placeholder.svg?height=400&width=300"}
              alt={anime.title}
              width={260}
              height={300}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="flex-1 gap-1 bg-purple-600 hover:bg-purple-700">
              <BookmarkPlus className="h-4 w-4" /> Add to List
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold">{anime.score}</span>
                <span className="text-sm text-muted-foreground">{anime.scored_by?.toLocaleString() || 0} users</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ranked</span>
                <span>#{anime.rank}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Popularity</span>
                <span>#{anime.popularity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Members</span>
                <span>{anime.members?.toLocaleString() || 0}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Favorites</span>
                <span>{anime.favorites?.toLocaleString() || 0}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-muted-foreground">Type</span>
                <span>{anime.type}</span>

                <span className="text-muted-foreground">Episodes</span>
                <span>{anime.episodes}</span>

                <span className="text-muted-foreground">Status</span>
                <span>{anime.status}</span>

                <span className="text-muted-foreground">Aired</span>
                <span>{anime.aired?.string}</span>

                <span className="text-muted-foreground">Season</span>
                <span>
                  {anime.season} {anime.year}
                </span>

                <span className="text-muted-foreground">Duration</span>
                <span>{anime.duration}</span>

                <span className="text-muted-foreground">Rating</span>
                <span>{anime.rating}</span>

                <span className="text-muted-foreground">Source</span>
                <span>{anime.source}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}