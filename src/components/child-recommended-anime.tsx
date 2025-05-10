"use client"

import { useEffect, useState } from "react";
import AnimeCard from "./anime-card";
import { TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";

interface AnimeEntry {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score?: number;
  episodes?: number;
  status?: string;
}

interface Recommendation {
  entry: AnimeEntry[];
}

const ANIME_PER_PAGE = 8;

export default function ChildRecommendedAnime() {
  const [loading, setLoading] = useState(false);
  const [allAnimeEntries, setAllAnimeEntries] = useState<AnimeEntry[]>([]);
  const [displayedAnime, setDisplayedAnime] = useState<AnimeEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jikan.moe/v4/recommendations/anime`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      // Flatten all recommendation entries into a single array
      const entries = data.data.flatMap((rec: Recommendation) => rec.entry);
      setAllAnimeEntries(entries);
      setHasNextPage(entries.length > ANIME_PER_PAGE);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setError("Failed to load recommendations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  useEffect(() => {
    // Slice the array to get only 8 anime per page
    const startIndex = (page - 1) * ANIME_PER_PAGE;
    const endIndex = startIndex + ANIME_PER_PAGE;
    setDisplayedAnime(allAnimeEntries.slice(startIndex, endIndex));
    setHasNextPage(endIndex < allAnimeEntries.length);
  }, [page, allAnimeEntries]);

  const nextPage = () => {
    setPage(prev => prev + 1);
  };

  const prevPage = () => {
    setPage(prev => Math.max(prev - 1, 1));
  };

  const resetPagination = () => {
    setPage(1);
    fetchRecommendations();
  };

  if (error) {
    return (
      <TabsContent value="recommendations" className="space-y-4">
        <h2 className="text-2xl font-bold">Recommendations</h2>
        <div className="text-red-500">{error}</div>
        <Button onClick={resetPagination}>Retry</Button>
      </TabsContent>
    );
  }

  if (loading && allAnimeEntries.length === 0) {
    return (
      <TabsContent value="recommendations" className="space-y-4">
        <h2 className="text-2xl font-bold">Recommendations</h2>
        <div>Loading recommendations...</div>
      </TabsContent>
    );
  }

  return (
    <TabsContent value="recommendations" className="space-y-4">
      <h2 className="text-2xl font-bold">Recommendations</h2>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {displayedAnime.map((anime, index) => (
          <AnimeCard
            animeId={anime.mal_id}
            key={`${anime.mal_id}-${index}`}
            title={anime.title}
            image={anime.images.jpg.image_url || `/placeholder.svg?height=300&width=200&text=Rec`}
            score={anime.score || null}
            episodes={anime.episodes || 0}
            status={anime.status || "Unknown"}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button 
          onClick={prevPage}
          variant="outline"
          disabled={page === 1 || loading}
        >
          Previous
        </Button>
        
        <span className="text-sm text-muted-foreground">
          Page {page} of {Math.ceil(allAnimeEntries.length / ANIME_PER_PAGE)}
        </span>
        
        <Button 
          onClick={nextPage}
          variant="outline"
          disabled={!hasNextPage || loading}
        >
          Next
        </Button>
      </div>
    </TabsContent>
  );
}