"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, Edit, MapPin, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EditProfileDialog } from "@/components/edit-profile-dialog";
import api from "@/lib/api"; // Assume this is configured
import { toast } from "@/components/ui/use-toast"; // Assume toast is available

type UserData = {
    name: string;
    email: string;
    username: string;
    profileImage: string;
    coverImage: string;
    bio: string;
    location: string;
    joinDate: string;
    website: string;
    stats: {
      animeWatched: number;
      mangaRead: number;
      episodesWatched: number;
      chaptersRead: number;
      daysWatched: number;
      meanScore: number;
    };
    badges: any[];
    favoriteGenres: any[];
    recentActivity: any[];
  };

export default function ProfilePage() {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");
        setUserData({
          name: response.data.name,
          email: response.data.email,
          username: response.data.username || response.data.name, // Fallback if no username
          profileImage: response.data.profile_image || "/placeholder.svg?height=120&width=120&text=Profile",
          coverImage: "/placeholder.svg?height=300&width=800&text=Cover", // Add to model if dynamic
          bio: response.data.bio || "No bio yet.",
          location: response.data.location || "Not specified",
          joinDate: new Date(response.data.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long" }),
          website: response.data.website || "",
          stats: {
            animeWatched: 0, // Fetch from a stats endpoint if needed
            mangaRead: 0,
            episodesWatched: 0,
            chaptersRead: 0,
            daysWatched: 0,
            meanScore: 0,
          },
          badges: [], // Fetch from a badges endpoint if needed
          favoriteGenres: [], // Fetch or add to model
          recentActivity: [], // Fetch from a activity endpoint if needed
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch profile data. Please sign in.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!userData) {
    return null; // Handle redirect to login if needed
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <main className="container px-4 md:px-6 py-4 md:py-6">
        <div className="relative mb-6">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <Image src={userData.coverImage} alt="Cover" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-none"
            >
              <Camera className="h-4 w-4 mr-2" />
              Edit Cover
            </Button>
          </div>
          <div className="relative -mt-16 md:-mt-20 px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="relative">
                  <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white dark:border-gray-900">
                    <AvatarImage src={userData.profileImage} alt={userData.name} />
                    <AvatarFallback className="text-lg md:text-xl">
                      {userData.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white border-2 border-white dark:border-gray-900"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-white md:text-foreground">{userData.name}</h1>
                  <p className="text-white/80 md:text-muted-foreground">@{userData.username}</p>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-sm text-white/70 md:text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {userData.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {userData.joinDate}
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => setIsEditDialogOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <p className="text-sm md:text-base leading-relaxed">{userData.bio}</p>
          </CardContent>
        </Card>
        <div className="h-16 md:hidden"></div>
      </main>
      <EditProfileDialog
        setUserData={setUserData}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        userData={userData}
      />
    </div>
  );
}