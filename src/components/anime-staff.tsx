"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { StaffAnimeProps, StaffData } from "@/lib/types";

export default function StaffAnime({animeId}: StaffAnimeProps){

  const [staff, setStaff] = useState<StaffData[]>([]);
  const [loadingStaff, setLoadingStaff] = useState(false);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setLoadingStaff(true);
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/staff`);
        const data = await response.json();
        setStaff(data.data);
      } catch (error) {
        console.error("Error fetching staff:", error);
        setError("Failed to load staff information");
      } finally {
        setLoadingStaff(false);
      }
    };

    fetchStaff();
  }, [animeId]);

  if (loadingStaff) {
    return <div>Loading staff...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!staff.length) {
    return <div>No staff information available</div>;
  }

    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {staff.slice(0,8).map((member) => (
          <Card key={member.person.mal_id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
              <Image
                      src={member.person.images.jpg.image_url}
                      alt={member.person.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                <div>
                  <p className="font-medium">{member.person.name}</p>
                  <p className="text-sm text-muted-foreground">{member.positions.join(', ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
}