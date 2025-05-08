"use client"

import { useEffect, useState } from "react";
import { getTopAnime } from "@/lib/api";
import Image from "next/image"
import Link from "next/link"  
import { ChevronLeft, ChevronRight, Star, Plus } from "lucide-react"
import { Button, Badge } from "@/lib/components-index"
import { Anime } from "@/lib/types";
import { SeasonalAnimeSkeleton } from "@/lib/skeleton-index";


export default function SeasonalAnime() {

  const [loading, setLoading] = useState(false);
  const [seasonalAnime, setSeasonalAnime] = useState<Anime[]>([]); 
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 5

  const fetchAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopAnime(20);
      setSeasonalAnime(data.data); // Jikan API returns data 
    } catch (error) {
      console.error('Failed to fetch anime:', error);
      setError('Failed to load anime. Please try again later');
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
        fetchAnime();
    }, [])

  const totalPages = Math.ceil(seasonalAnime.length / itemsPerPage)
  const displayedAnime = seasonalAnime.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
<div className="relative">
      {loading ? (
        <SeasonalAnimeSkeleton />
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : displayedAnime.length === 0 ? (
        <SeasonalAnimeSkeleton />

      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {displayedAnime.map((anime) => (
              <div
                key={anime.mal_id} 
                className="group relative overflow-hidden rounded-lg border bg-card shadow-sm"
              >
                <Link href={`/dashboard/anime/byId/${anime.mal_id}`} className="block">
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                      src={anime.images?.jpg?.image_url || '/placeholder.svg'}
                      alt={anime.title || 'Anime'}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="line-clamp-2 text-sm font-medium text-white">
                        {anime.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-white">
                            {anime.score || 'N/A'}
                          </span>
                        </div>
                        <span className="text-xs text-white/80">
                          {anime.episodes || 'Unknown'} eps
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="absolute right-2 top-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-3">
                  <div className="flex flex-wrap gap-1">
                    {anime.genres?.slice(0, 2).map((genre: { name: string }, i: number) => (
                      <Badge key={`${anime.mal_id}-genre-${i}`} variant="secondary" className="text-xs">
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {anime.studios?.[0]?.name || 'Unknown Studio'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                {currentIndex + 1} / {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentIndex === totalPages - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
