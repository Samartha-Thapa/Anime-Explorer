'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import SideBar from "./side-bar";
import { Anime } from "@/lib/types";
import { getAnimeById } from "@/lib/api";
import MainChildContent from "./main-child-content";

interface HeroBannerProps {
    animeId: number | string; // Match the AnimeId typeconsole.log
  }

export default function MainContent(
    { animeId }: HeroBannerProps)
    {
        const [loading, setLoading] = useState(false);                      
        const [anime, setAnime] = useState<Anime | null>(null); 
        // const [error, setError] = useState<string | null>(null)
        
          useEffect(() => {
            async function fetchAnime() {
              try {
                  setLoading(true);
                  // setError(null);
                // Convert to number if needed
                const id = typeof animeId === 'string' ? parseInt(animeId, 10) : animeId;
                  if (isNaN(id)) {
                    throw new Error("Invalid anime ID");
                }
                const data = await getAnimeById(id);
                setAnime(data.data);
                setLoading(false);
              } catch (error) {
                console.error("Failed to fetch anime:", error);
                // setError("Failed to load anime data");
                setLoading(false);
              } finally {
                setLoading(false);
              }
            }
            fetchAnime();
          }, [animeId]);
    
    return (
        <main className="container -mt-40 relative z-10 pb-12">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white">
            <Link href="/">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar */}
          {loading ? (
        <div>Loading...</div>
        ) : anime ? (
            <SideBar anime={anime} />
        ) : (
            <div>No anime data available</div>
        )}

          {/* Main Child Content */}
          {loading ? (
        <div>Loading...</div>
        ) : anime ? (
          <MainChildContent anime={anime}/>
        ) : (
            <div>No anime data available</div>
        )}
        </div>
      </main>
    )
}