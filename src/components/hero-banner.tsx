"use client";

import Image from "next/image";
import { Anime } from "@/lib/types";

interface HeroBannerProps {
  anime: Anime; // Receive Anime object directly
}

export default function HeroBanner({ anime }: HeroBannerProps) {
  return (
    <div className="relative h-[300px] md:h-[400px]">
      <div className="absolute inset-0">
        <Image
          src={anime.images?.jpg?.image_url || "/placeholder.svg?height=400&width=1200"}
          alt={anime.title || "Anime Cover Image"}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/50"></div>
      </div>
    </div>
  );
}