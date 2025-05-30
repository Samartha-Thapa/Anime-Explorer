"use client";

import { useState } from "react";
import { AnimeListMainContent, FilterDesktop, FilterMobile } from "@/lib/components-index"
import { Filters } from "@/lib/types";

export default function AllAnimeList() {
const [filters, setFilters] = useState<Filters>({
    status: [],
    genres: [],
    year: "",
    rating: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Explore Anime</h1>
          <p className="text-muted-foreground">Discover and track your favorite anime series</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <FilterDesktop filters={filters} setFilters={setFilters}/>
          

          {/* Filters - Mobile */}
          <FilterMobile filters={filters} setFilters={setFilters}/>
          

          {/* Main Content */}
          <AnimeListMainContent filters={filters}/>
        </div>
      </main>
    </div>
  )
}
