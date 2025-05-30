"use client";

import {
      Progress, 
      Button, 
      Badge, 
      Tabs, 
      TabsContent, 
      TabsList, 
      TabsTrigger, 
      Card, 
      CardContent, 
    } from "@/lib/components-index";

import {
  ArrowLeft,
  Star,
  BookOpen,
  Heart,
  Share2,
  Calendar,
  Users,
  Clock,
  BarChart4,
  BookMarked,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMangaById, getMangaCharacters, getMangaRecommendations } from "@/lib/api";
import type { Manga, Character, MangaRecommendation } from "@/lib/types";
import type { NextPage } from "next";
import { use } from 'react';

interface MangaPageProps {
     params: Promise<{ mangaId: string }>;
}

const MangaPage: NextPage<MangaPageProps> = ({ params }) => {
  const unwrappedParams = use(params);
  const { mangaId } = unwrappedParams || "";
  const [manga, setManga] = useState<Manga | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [recommendations, setRecommendations] = useState<MangaRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMangaDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const mangaResponse = await getMangaById(mangaId);
        setManga(mangaResponse.data);

        const [charactersResponse, recommendationsResponse] = await Promise.all([
          getMangaCharacters(mangaId),
          getMangaRecommendations(mangaId),
        ]);

        setCharacters(charactersResponse.data);
        setRecommendations(recommendationsResponse.data);
      } catch (error) {
        console.error("Failed to fetch manga details:", error);
        setError("Failed to fetch manga details");
      } finally {
        setLoading(false);
      }
    };

    fetchMangaDetails();
  }, [mangaId]);

  if (loading) return <div>Loading manga details...</div>;
  if (error) return (
    <div className="text-red-500">
      {error}
      <Button variant="link" onClick={() => window.location.reload()} className="ml-2">
        Retry
      </Button>
    </div>
  );
  if (!manga) return <div>No manga found</div>;

  return (
    <div className="space-y-8">
      <Link href="/manga" className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Manga List
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="relative aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-lg border shadow-md">
            <Image
              src={manga.images.jpg.image_url || "/placeholder.svg"}
              alt={manga.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button className="w-full">
              <BookMarked className="mr-2 h-4 w-4" />
              Add to Library
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="flex-1">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Favorite</span>
              </Button>
              <Button variant="outline" size="icon" className="flex-1">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              {manga.url && (
                <Button variant="outline" size="icon" className="flex-1" asChild>
                  <a href={manga.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">MAL Link</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{manga.title}</h1>
          {manga.title_english && manga.title_english !== manga.title && (
            <h2 className="text-xl text-muted-foreground">{manga.title_english}</h2>
          )}
          {manga.title_japanese && <h3 className="text-sm text-muted-foreground mt-1">{manga.title_japanese}</h3>}

          <div className="mt-4 flex flex-wrap items-center gap-4">
            {manga.score && (
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">{manga.score}</span>
                <span className="text-sm text-muted-foreground">({manga.scored_by?.toLocaleString()} votes)</span>
              </div>
            )}
            <Badge variant="outline" className="text-sm">
              {manga.status || "Unknown status"}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {manga.type || "Unknown type"}
            </Badge>
          </div>

          {/* <div className="mt-4 flex flex-wrap gap-2">
            {manga.genres?.map((genre) => (
              <Badge key={genre.mal_id} variant="secondary">
                {genre.name}
              </Badge>
            ))}
          </div> */}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <strong>Chapters:</strong> {manga.chapters || "Ongoing"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <strong>Published:</strong> {manga.published?.string || "Unknown"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <strong>Authors:</strong> {manga.authors.map((a) => a.name).join(", ") || "Unknown"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">
                <strong>Serialization:</strong> {manga.serializations.map((s) => s.name).join(", ") || "Unknown"}
              </span>
            </div>
          </div>

          {manga.synopsis && (
            <div className="mt-6">
              <h3 className="font-medium mb-2">Synopsis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{manga.synopsis}</p>
            </div>
          )}

          {manga.background && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">Background</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{manga.background}</p>
            </div>
          )}
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <BarChart4 className="mr-2 h-5 w-5" />
            Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Popularity</span>
                  <span className="text-sm font-medium">#{manga.popularity || "N/A"}</span>
                </div>
                <Progress value={manga.popularity ? 100 - (manga.popularity / 5000) * 100 : 0} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Members</span>
                  <span className="text-sm font-medium">{manga.members?.toLocaleString() || "N/A"}</span>
                </div>
                <Progress value={manga.members ? (manga.members / 500000) * 100 : 0} className="h-2" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Favorites</span>
                  <span className="text-sm font-medium">{manga.favorites?.toLocaleString() || "N/A"}</span>
                </div>
                <Progress value={manga.favorites ? (manga.favorites / 50000) * 100 : 0} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Score Rank</span>
                  <span className="text-sm font-medium">#{manga.rank || "N/A"}</span>
                </div>
                <Progress value={manga.rank ? 100 - (manga.rank / 5000) * 100 : 0} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="characters" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="characters">Characters</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="relations">Relations</TabsTrigger>
        </TabsList>

        <TabsContent value="characters" className="mt-6">
          {characters.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {characters.map((character) => (
                <div key={character.character.mal_id} className="flex flex-col items-center text-center">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-2">
                    <Image
                      src={character.character.images.jpg.image_url || "/placeholder.svg"}
                      alt={character.character.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-medium line-clamp-1">{character.character.name}</h4>
                  <p className="text-xs text-muted-foreground">{character.role}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No character information available.</p>
          )}
        </TabsContent>

        <TabsContent value="recommendations" className="mt-6">
          {recommendations.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {recommendations.map((rec) => (
                <Link href={`/manga/${rec.entry.mal_id}`} key={rec.entry.mal_id} className="group">
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg mb-2">
                    <Image
                      src={rec.entry.images.jpg.image_url || "/placeholder.svg"}
                      alt={rec.entry.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-purple-600">{rec.entry.title}</h4>
                  <p className="text-xs text-muted-foreground">{rec.votes} recommendations</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No recommendations available.</p>
          )}
        </TabsContent>

        <TabsContent value="relations" className="mt-6">
          {manga.relations && manga.relations.length > 0 ? (
            <div className="space-y-4">
              {manga.relations.map((relation, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2">{relation.relation}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {relation.entry.map((entry) => (
                      <div key={entry.mal_id} className="flex items-center gap-3 p-3 rounded-lg border">
                        <Badge variant="outline">{entry.type}</Badge>
                        <div>
                          {entry.type === "manga" ? (
                            <Link href={`/manga/${entry.mal_id}`} className="text-sm font-medium hover:text-purple-600">
                              {entry.name}
                            </Link>
                          ) : (
                            <span className="text-sm font-medium">{entry.name}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No relation information available.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MangaPage;