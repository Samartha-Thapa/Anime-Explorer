'use client'
import { useEffect, useState } from "react";
import { getTopAnime } from "@/lib/api";
import Image from "next/image";
import { ShowAnimeSkeleton } from "./skeletons/show-anime-skeleton";

export default function ShowAnime(){
    const [loading, setLoading] = useState(false);
    const [animeList, setAnimeList] = useState([]); 
    const [error, setError] = useState<string | null>(null)

  const fetchAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTopAnime(8);
      setAnimeList(data.data); // Jikan API returns data 
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

    return (
        <div className="flex items-center justify-center md:justify-end">
{loading ? (
        // <p className="text-center text-gray-500">Loading...</p>
        <ShowAnimeSkeleton />
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : animeList.length === 0 ? (
        // <p className="text-center text-gray-500">No anime found.</p>
        <ShowAnimeSkeleton />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {animeList.map((anime: any) => (
            <div
              key={anime.mal_id}
              className="overflow-hidden rounded-md shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={anime.images?.jpg?.image_url || '/placeholder.svg?height=150&width=100'}
                alt={anime.title || 'Anime'}
                width={100}
                height={150}
                className="h-auto w-full object-cover"
                priority={false} // Optional: Disable priority for non-critical images
              />
              <div className="p-2 text-center">
                <p className="text-sm font-medium truncate">{anime.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
            {/* <div className="grid grid-cols-3 gap-1 md:gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="overflow-hidden rounded-md shadow-lg transition-transform hover:scale-105">
                  <Image
                    src={`/placeholder.svg?height=150&width=100&text=Anime${i}`}
                    alt={`Anime ${i}`}
                    width={100}
                    height={150}
                    className="h-auto w-full object-cover"
                  />
                </div>
            ))}
           </div> */}
         </div>
    )
}