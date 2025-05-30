"use client";

import HeroBanner from "@/components/hero-banner";
import MainContent from "@/components/main-content";
import { Anime } from "@/lib/types";

interface WholeAnimePageProps {
  anime: Anime;
}

export default function WholeAnimePage({ anime }: WholeAnimePageProps) {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner anime={anime} />
      {/* Main Content */}
      <MainContent anime={anime} />
    </>
  );
}