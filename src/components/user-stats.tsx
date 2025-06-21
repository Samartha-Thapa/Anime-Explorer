"use client";

import { Card, CardContent, Avatar, AvatarFallback, AvatarImage } from "@/lib/components-index";
import { useState, useEffect } from "react";
import api from "@/lib/api"; // Assume this is configured for Sanctum
import { toast } from "@/components/ui/use-toast"; // Assume toast is available

type User = { name: string; created_at: string };

export function UserStats() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");
        setUser(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch user data. Please sign in.",
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
      <section className="mb-10">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="flex justify-center">Loading...</div>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (!user) {
    return null; 
  }

  return (
    <section className="mb-10">
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="/placeholder.svg?height=80&width=80" // Replace with user.profile_image if added
                    alt={user.name}
                  />
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    Joined {new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}