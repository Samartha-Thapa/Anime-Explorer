"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button, Input, Badge, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components-index";
import { getAnimeList } from "@/lib/api"; // Import the API function
import { Anime } from "@/lib/types";

interface JikanAnimeResponse {
  data: Anime[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export default function AnimeListMainContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [totalPages, setTotalPages] = useState(10); // Dynamic total pages
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchAnimeList(page: number) {
    try {
      setLoading(true);
      setError(null);
      const response: JikanAnimeResponse = await getAnimeList(page); // Pass page to API
      setAnimeList(response.data);
      setTotalPages(response.pagination.last_visible_page); // Set dynamic total pages
    } catch (error) {
      console.error("Error fetching anime list:", error);
      setError("Failed to fetch anime list. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnimeList(currentPage);
  }, [currentPage]); // Refetch when currentPage changes

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <Button key="1" variant="outline" size="icon" className="h-8 w-8" onClick={() => goToPage(1)}>
          1
        </Button>,
      );
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          size="icon"
          className="h-8 w-8"
          onClick={() => goToPage(i)}
        >
          {i}
        </Button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>,
        );
      }
      buttons.push(
        <Button key={totalPages} variant="outline" size="icon" className="h-8 w-8" onClick={() => goToPage(totalPages)}>
          {totalPages}
        </Button>,
      );
    }

    return buttons;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search anime..."
            className="w-full pl-8 pr-4 focus-visible:ring-purple-500"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue="popularity">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="score">Score</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {animeList.map((anime) => (
          <div
            key={anime.mal_id}
            className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
          >
            <Link href={`/anime/${anime.mal_id}`} className="block">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={anime.images.jpg.image_url || "/placeholder.svg"}
                  alt={anime.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="line-clamp-2 text-sm font-medium text-white">{anime.title}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-white">{anime.score || "N/A"}</span>
                    </div>
                    <span className="text-xs text-white/80">{anime.episodes || "N/A"} eps</span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="p-3">
              <div className="flex flex-wrap gap-1">
                {anime.genres.slice(0, 2).map((genre, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {genre.name} {/* Use genre.name instead of genre */}
                  </Badge>
                ))}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {anime.studios.map((studio) => studio.name).join(", ") || "N/A"} {/* Map studio names */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1} className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>

        <div className="flex items-center">{renderPaginationButtons()}</div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
}