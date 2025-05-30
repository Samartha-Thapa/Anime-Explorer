"use client"

import FilterDesktop from "@/components/filter-desktop";
import { useState } from "react";
import FilterMobile from "@/components/filter-mobile";
import MangaListMainContent from "@/components/manga-list-main-content";
import { Filters } from "@/lib/types";

export default function Manga() {
const [filters, setFilters] = useState<Filters>({
    status: [],
    genres: [],
    year: "any",
    rating: "any",
  });
    return (
       <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <main className="container py-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Explore Manga</h1>
                <p className="text-muted-foreground">Discover and track your favorite manga series</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Filters - Desktop */}
                <FilterDesktop filters={filters} setFilters={setFilters} />
                
                {/* Filters - Mobile */}
                <FilterMobile filters={filters} setFilters={setFilters} />
                
                {/* Main Content */}
                <MangaListMainContent filters={filters} />
            </div>
            </main>
        </div>        
    )
}