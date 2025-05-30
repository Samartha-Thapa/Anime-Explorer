"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import {
  Checkbox,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/components-index";
import { FilterDesktopProps, Filters } from "@/lib/types";

const genreMap: Record<string, number> = {
  Action: 1,
  Adventure: 2,
  Comedy: 4,
  Drama: 8,
  Fantasy: 10,
  Horror: 14,
  Mystery: 7,
  Romance: 22,
  "Sci-Fi": 24,
};

export default function MangaFilterDesktop({ filters, setFilters }: FilterDesktopProps) {
  const [tempFilters, setTempFilters] = useState<Filters>(filters);

  const handleStatusChange = (status: string) => {
    setTempFilters((prev) => ({
      ...prev,
      status: prev.status.includes(status)
        ? prev.status.filter((s) => s !== status)
        : [...prev.status, status],
    }));
  };

  const handleGenreChange = (genre: string) => {
    setTempFilters((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  const handleYearChange = (year: string) => {
    setTempFilters((prev) => ({ ...prev, year }));
  };

  const handleRatingChange = (rating: string) => {
    setTempFilters((prev) => ({ ...prev, rating }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
  };

  const resetFilters = () => {
    const initialFilters: Filters = {
      status: [],
      genres: [],
      year: "any",
      rating: "any",
    };
    setTempFilters(initialFilters);
    setFilters(initialFilters);
  };

  return (
    <div className="hidden md:block w-64 space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filters
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Status</h3>
            <div className="space-y-2">
              {["Publishing", "Finished", "On Hiatus"].map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={tempFilters.status.includes(status)}
                    onCheckedChange={() => handleStatusChange(status)}
                  />
                  <label
                    htmlFor={`status-${status}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Genres</h3>
            <div className="space-y-2">
              {Object.keys(genreMap).map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox
                    id={`genre-${genre}`}
                    checked={tempFilters.genres.includes(genre)}
                    onCheckedChange={() => handleGenreChange(genre)}
                  />
                  <label
                    htmlFor={`genre-${genre}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Year</h3>
            <Select onValueChange={handleYearChange} value={tempFilters.year}>
              <SelectTrigger>
                <SelectValue placeholder="Any year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any year</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="older">2020 & Older</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Rating</h3>
            <Select onValueChange={handleRatingChange} value={tempFilters.rating}>
              <SelectTrigger>
                <SelectValue placeholder="Any rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any rating</SelectItem>
                <SelectItem value="g">G - All Ages</SelectItem>
                <SelectItem value="pg">PG - Children</SelectItem>
                <SelectItem value="pg13">PG-13 - Teens 13+</SelectItem>
                <SelectItem value="r">R - 17+ (violence & profanity)</SelectItem>
                <SelectItem value="r+">R+ - Mild Nudity</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button className="w-full" onClick={applyFilters}>
              Apply Filters
            </Button>
            <Button variant="outline" className="w-full" onClick={resetFilters}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}