'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { getAnimeByName } from "@/lib/api";
import { Anime } from "@/lib/types";

interface HeroBannerProps {
  animeName: string; // Match the AnimeId type
}

export default function HeroBannerName(
    { animeName }: HeroBannerProps)
    {
        const [loading, setLoading] = useState(false);
        const [anime, setAnime] = useState<Anime | null>(null); 
        const [error, setError] = useState<string | null>(null)
    
        useEffect(() => {
          async function fetchAnime() {
            try {
              setLoading(true);
              const response = await getAnimeByName(animeName);
              const animeData = response.data[0]; // Take the first result
              console.log(animeData);
              setAnime(animeData);
            } catch (error) {
              console.error("Failed to fetch anime:", error);
              setError('Failed to load banner')
              setLoading(false);
            } finally {
              setLoading(false);
            }
          }
          fetchAnime();
        }, [animeName])

    return(
      <div className="relative h-[300px] md:h-[400px]">
        {loading? (
          <p>Loading...</p>
        ) : error? (
          <p>{error}</p>
        ) : !anime ? (
          <p>No anime found!</p>
        ):
        (     
          <div className="absolute inset-0">
          <Image
            src={anime.images?.jpg?.image_url || "/placeholder.svg?height=400&width=1200"}
            alt={anime.title || 'Anime Cover Image'}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/50"></div>
        </div>
    )
  }
      </div>
    )
}