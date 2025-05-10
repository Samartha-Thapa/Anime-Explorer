"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { searchAnime } from "@/lib/api";
import { Anime } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

// Custom debounce hook
const useDebounce = (func: (...args: string[]) => void, delay: number) => {
  const inDebounce = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: string[]) => {
      if (inDebounce.current) {
        clearTimeout(inDebounce.current);
      }
      inDebounce.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  // Cleanup function to cancel the timeout
  useEffect(() => {
    return () => {
      if (inDebounce.current) {
        clearTimeout(inDebounce.current);
      }
    };
  }, []);

  return debouncedFunction;
};

export default function TopNavSearch() {
  const [search, setSearch] = useState<string>("");
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Search function
  const fetchAnime = useCallback(async (query: string) => {
    if (!query.trim()) {
      setAnimeList([]);
      setError(null);
      setIsDropdownOpen(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const data = await searchAnime(query);
      setAnimeList(data.data || []);
      setIsDropdownOpen(true);
    } catch (error) {
      console.error("Error fetching anime:", error);
      setError("Failed to fetch anime. Please try again.");
      setAnimeList([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounce the fetchAnime function
  const debouncedFetchAnime = useDebounce(fetchAnime, 500);

  // Trigger search when search query changes
  useEffect(() => {
    debouncedFetchAnime(search);
  }, [search, debouncedFetchAnime]);

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 200);
  };

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => animeList.length > 0 && setIsDropdownOpen(true)}
        onBlur={handleBlur}
        type="search"
        placeholder="Search anime, manga, or users..."
        className="w-full rounded-full pl-8 pr-4 focus-visible:ring-purple-500"
      />

      {/* Dropdown container */}
      {(isLoading || error || (isDropdownOpen && animeList.length > 0)) && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-auto">
          {/* Loading state */}
          {isLoading && (
            <div className="px-4 py-3 text-sm text-gray-500 flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading...
            </div>
          )}

          {/* Error message */}
          {error && <div className="px-4 py-3 text-sm text-red-500">{error}</div>}

          {/* Search results */}
          {isDropdownOpen && animeList.length > 0 && (
            <ul>
              {animeList.map((anime) => (
                <Link
                  href={`/dashboard/anime/byId/${anime.mal_id}`}
                  key={anime.mal_id}
                  className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <div className="flex-shrink-0 relative w-10 h-14 rounded overflow-hidden">
                    <Image
                      src={anime.images?.jpg?.image_url || "/placeholder.svg"}
                      alt={anime.title || "Anime Cover Image"}
                      fill
                      sizes="40px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{anime.title}</p>
                    {anime.year && <p className="text-xs text-gray-500 dark:text-gray-400">{anime.year}</p>}
                  </div>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}