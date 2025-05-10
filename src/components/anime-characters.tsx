'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface Character {
    character: {
      mal_id: number;
      name: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
    };
    role: string;
    voice_actors: Array<{
      person: {
        name: string;
        language: string;
      };
    }>;
  }

  interface AnimeCharacterProps {
    animeId: number;
  }

export default function AnimeCharacter({animeId}: AnimeCharacterProps) {
    const [loadingCharacter, setLoadingCharacter] = useState(false);
    const [characters, setCharacters] = useState<Character[] >([]); 
    const [error, setError] = useState<string | null>(null)

      useEffect(() => {
        const fetchCharacter = async () => {
          try {
            setLoadingCharacter(true);
            console.log(animeId)
            const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            const data = await response.json();
            setCharacters(data.data || []);
          } catch (error) {
            console.error("Error fetching Character:", error);
            setError("Failed to load Character information");
          } finally {
            setLoadingCharacter(false);
          }
        };
    
        fetchCharacter();
      }, [animeId]);
    


  if (error) {
    return (
      <TabsContent value="characters" className="space-y-4">
        <h2 className="text-2xl font-bold">Characters & Voice Actors</h2>
        <div className="text-red-500">{error}</div>
      </TabsContent>
    );
  }

  if(loadingCharacter) {
    return (
      <div>Loading...</div>
    )
  }

  if (characters.length === 0) {
    return (
      <TabsContent value="characters" className="space-y-4">
        <h2 className="text-2xl font-bold">Characters & Voice Actors</h2>
        <div>No character information available</div>
      </TabsContent>
    );
  }

    return(
        <TabsContent value="characters" className="space-y-4">
        <h2 className="text-2xl font-bold">Characters & Voice Actors</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {characters.slice(0,8).map((character) => {
                          const japaneseVoiceActor = character.voice_actors.find(
                            (va) => va.person.language === "Japanese"
                          );
            return (
            <Card key={character.character.mal_id}>
                <CardContent className="p-4">
                <div className="flex gap-4">
                    <Image
                    src={character.character.images.jpg.image_url || `/placeholder.svg?height=100&width=70&text=Char`}
                    alt={character.character.name}
                    width={70}
                    height={100}
                    className="rounded-md object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    <div className="flex-1">
                    <h3 className="font-medium">{character.character.name}</h3>
                    <p className="text-sm text-muted-foreground">{character.role.toLowerCase()}</p>
                    {japaneseVoiceActor && (
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          Japanese
                        </Badge>
                        <span className="text-sm">
                          {japaneseVoiceActor.person.name}
                        </span>
                      </div>
                    )}
                    </div>
                </div>
                </CardContent>
            </Card>
            )})}
        </div>
        </TabsContent>
    )
}