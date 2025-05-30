"use client";

import { useEffect, useState } from "react";
import { getTopAnime } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Star, Plus } from "lucide-react";
import { Button, Badge } from "@/lib/components-index";
import { Anime } from "@/lib/types";
import { SeasonalAnimeSkeleton } from "@/lib/skeleton-index";

export default function SeasonalAnime() {
  const [loading, setLoading] = useState(false);
  const [seasonalAnime, setSeasonalAnime] = useState<Anime[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopAnime(15); // Reduced from 20 to 15
      setSeasonalAnime(data.data);
    } catch (error) {
      console.error('Failed to fetch anime:', error);
      setError('Failed to load anime. Please try again later');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <SeasonalAnimeSkeleton />
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : seasonalAnime.length === 0 ? (
        <SeasonalAnimeSkeleton />
      ) : (
        <>
          {/* Mobile - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-2 -mx-4 pl-4 no-scrollbar">
            <div className="flex gap-2.5 w-max pr-4">
              {seasonalAnime.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="w-[120px] flex-shrink-0 group relative overflow-hidden rounded-lg border bg-card shadow-sm"
                >
                  <Link href={`/dashboard/anime/byId/${anime.mal_id}`} className="block">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <Image
                        src={anime.images?.jpg?.image_url || '/placeholder.svg'}
                        alt={anime.title || 'Anime'}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="120px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-1.5">
                        <h3 className="line-clamp-2 text-[11px] font-medium text-white">
                          {anime.title}
                        </h3>
                        <div className="mt-0.5 flex items-center gap-1">
                          <Star className="h-2.5 w-2.5 text-yellow-500 fill-yellow-500" />
                          <span className="text-[9px] text-white">
                            {anime.score?.toFixed(1) || 'N/A'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute right-1 top-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                    >
                      <Plus className="h-2.5 w-2.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop - Compact Grid */}
          <div className="hidden md:grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {seasonalAnime.slice(0, 12).map((anime) => (
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
                      sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 180px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <h3 className="line-clamp-2 text-xs font-medium text-white">
                        {anime.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                          <Star className="h-2.5 w-2.5 text-yellow-500 fill-yellow-500" />
                          <span className="text-[10px] text-white">
                            {anime.score?.toFixed(1) || 'N/A'}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/80">
                          {anime.episodes || '?'} eps
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="absolute right-1.5 top-1.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="p-2">
                  <div className="flex flex-wrap gap-1">
                    {anime.genres?.slice(0, 1).map((genre: { name: string }) => (
                      <Badge 
                        key={`${anime.mal_id}-${genre.name}`} 
                        variant="secondary" 
                        className="text-[10px] px-1 py-0 h-5"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}