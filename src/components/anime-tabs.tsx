"use client"

import { useCallback, useEffect, useState } from "react";
import { getTopAnime, getUpcomingAnime } from "@/lib/api";
import { Tabs, TabsContent, TabsList, TabsTrigger, AnimeCard } from "@/lib/components-index";
import { Anime, JikanResponse } from "@/lib/types";

export default function AnimeTabs() {    
    const [loading, setLoading] = useState(false);
    const [animeList, setAnimeList] = useState<Anime []>([]); 
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('trending');

    const fetchAnime = useCallback(async (tab: string) => {
        setLoading(true);
        setError(null); // Reset error state
        try {
            let data: JikanResponse;
            switch (tab) {
              case 'trending':
                data = await getTopAnime(13, 'airing', 'tv'); // Currently airing TV anime
                break;
              case 'popular':
                data = await getTopAnime(12, undefined, 'tv'); // Top TV anime by popularity
                break;
              case 'upcoming':
                data = await getUpcomingAnime(13); // Upcoming anime
                break;
              case 'top-rated':
                data = await getTopAnime(12, undefined, 'tv', 'score'); // Top TV anime by score
                break;
              default:
                throw new Error('Invalid tab');
            }
            const uniqueAnime = Array.from(
                new Map(data.data.map((anime: Anime) => [anime.mal_id, anime])).values()
              );
            setAnimeList(uniqueAnime);
        }catch (error) {
          console.error('Failed to fetch anime:', error);
          setError('Failed to load anime. Please try again later.');
        } finally {
          setLoading(false);
        }
      }, []);

      const debounceFetch = useCallback((tab: string) => {
        setTimeout(() => fetchAnime(tab), 500);
      }, [fetchAnime]);

        useEffect(() => {
            debounceFetch(activeTab)
        }, [activeTab, debounceFetch])
    

    return (
        <section>
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="space-y-4"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
          </TabsList>
          {['trending', 'popular', 'upcoming', 'top-rated'].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : animeList.length === 0 ? (
                <p className="text-center text-gray-500">No anime found.</p>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {animeList.map((anime: Anime) => (
                      <AnimeCard
                        key={anime.mal_id}
                        animeId={anime.mal_id || ""}
                        title={anime.title}
                        image={anime.images?.jpg?.image_url || '/placeholder.svg?height=300&width=200'}
                        score={anime.score || null}
                        episodes={anime.episodes ?? 0}
                        status={anime.status || 'Unknown'}
                      />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    )
}