"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Checkbox,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components-index";
import { FilterMobileProps, Filters } from "@/lib/types";

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

export default function MangaFilterMobile({ filters, setFilters }: FilterMobileProps) {
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

  return (
    <div className="md:hidden mb-4">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-full flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerDescription>Refine your manga search</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="status">
                  <AccordionTrigger>Status</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Publishing", "Finished", "On Hiatus"].map((status) => (
                        <div key={status} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-status-${status}`}
                            checked={tempFilters.status.includes(status)}
                            onCheckedChange={() => handleStatusChange(status)}
                          />
                          <label
                            htmlFor={`mobile-status-${status}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="genres">
                  <AccordionTrigger>Genres</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      
              {Object.keys(genreMap).map((genre) => (
                        <div key={genre} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-genre-${genre}`}
                            checked={tempFilters.genres.includes(genre)}
                            onCheckedChange={() => handleGenreChange(genre)}
                          />
                          <label
                            htmlFor={`mobile-genre-${genre}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {genre}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="year">
                  <AccordionTrigger>Year</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rating">
                  <AccordionTrigger>Rating</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <DrawerFooter>
              <Button onClick={applyFilters}>Apply Filters</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}