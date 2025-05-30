"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SideBar from "./side-bar";
import MainChildContent from "./main-child-content";
import { Anime } from "@/lib/types";

interface MainContentProps {
  anime: Anime;
}

export default function MainContent({ anime }: MainContentProps) {
  return (
    <main className="container -mt-40 relative z-10 pb-12">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white">
          <Link href="/dashboard">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Sidebar */}
        <SideBar anime={anime} />

        {/* Main Child Content */}
        <MainChildContent anime={anime} />
      </div>
    </main>
  );
}