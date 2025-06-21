"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { MessageCircle, Heart, Share2, Bookmark, Users, Star, Search } from "lucide-react";

type User = { id: string; name: string };
type Post = { id: string; content: string; created_at: string; user: { name: string } };
type Artwork = { id: string; title: string; image_url: string; description: string; user: { name: string }; created_at: string };
type Review = { id: string; anime_title: string; rating: number; content: string; image_url: string; user: { name: string }; created_at: string };

export default function CommunityPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [postContent, setPostContent] = useState("");
  const [artworkTitle, setArtworkTitle] = useState("");
  const [artworkDescription, setArtworkDescription] = useState("");
  const [artworkImage, setArtworkImage] = useState<File | null>(null);
  const [reviewAnimeTitle, setReviewAnimeTitle] = useState("");
  const [reviewRating, setReviewRating] = useState(1);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewImage, setReviewImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");
        setUser(response.data);
        await Promise.all([fetchPosts(), fetchArtworks(), fetchReviews()]);
      } catch (error) {
        console.log(error)
        toast({
          title: "Error",
          description: "Please sign in to access the community.",
          variant: "destructive",
        });
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [router]);

  const fetchPosts = async () => {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to fetch posts.",
        variant: "destructive",
      });
    }
  };

  const fetchArtworks = async () => {
    try {
      const response = await api.get("/artworks");
      setArtworks(response.data);
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to fetch artworks.",
        variant: "destructive",
      });
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await api.get("/reviews");
      setReviews(response.data);
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to fetch reviews.",
        variant: "destructive",
      });
    }
  };

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post("/posts", { content: postContent });
      setPostContent("");
      fetchPosts();
      toast({
        title: "Success",
        description: "Post created successfully!",
      });
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to create post.",
        variant: "destructive",
      });
    }
  };

  const handleArtworkSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", artworkTitle);
    formData.append("description", artworkDescription);
    if (artworkImage) formData.append("image", artworkImage);

    try {
      await api.post("/artworks", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setArtworkTitle("");
      setArtworkDescription("");
      setArtworkImage(null);
      fetchArtworks();
      toast({
        title: "Success",
        description: "Artwork uploaded successfully!",
      });
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to upload artwork.",
        variant: "destructive",
      });
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("anime_title", reviewAnimeTitle);
    formData.append("rating", reviewRating.toString());
    formData.append("content", reviewContent);
    if (reviewImage) formData.append("image", reviewImage);

    try {
      await api.post("/reviews", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setReviewAnimeTitle("");
      setReviewRating(1);
      setReviewContent("");
      setReviewImage(null);
      fetchReviews();
      toast({
        title: "Success",
        description: "Review submitted successfully!",
      });
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to submit review.",
        variant: "destructive",
      });
    }
  };


  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-950">Loading...</div>;
  }

  if (!user) {
    return null; // Redirect handled in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <main className="container py-6">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community</h1>
            <p className="text-muted-foreground">Connect with fellow anime fans and share your passion</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-8 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=400&width=1200&text=Community"
              alt="Community Banner"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80"></div>
          </div>
          <div className="relative z-10 p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Anime Community</h2>
            <p className="text-lg mb-6 max-w-2xl">
              Share your thoughts, artwork, and reviews with thousands of anime fans!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-purple-900 hover:bg-white/90">Create Content</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Community
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="discussions" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="artwork">Artwork</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="discussions" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Recent Discussions</h2>
                  <Button variant="outline" size="sm" onClick={() => document.getElementById("post-form")?.scrollIntoView()}>
                    New Post
                  </Button>
                </div>

                {/* Post Creation Form */}
                <Card id="post-form">
                  <CardContent className="p-4">
                    <form onSubmit={handlePostSubmit}>
                      <Textarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        placeholder="Share your anime thoughts..."
                        className="mb-2"
                        required
                      />
                      <Button type="submit" className="bg-blue-500 text-white">
                        Post
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Dynamic Posts */}
                <div className="space-y-4">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg" alt={post.user.name} />
                              <AvatarFallback>{post.user.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{post.user.name}&aposs Post</CardTitle>
                              <CardDescription>
                                Posted by {post.user.name} • {new Date(post.created_at).toLocaleString()}
                              </CardDescription>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">
                            Anime
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Heart className="h-4 w-4" /> 0
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <MessageCircle className="h-4 w-4" /> 0
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Share2 className="h-4 w-4" /> Share
                          </button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>

              <TabsContent value="artwork" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Fan Artwork</h2>
                  <Button variant="outline" size="sm" onClick={() => document.getElementById("artwork-form")?.scrollIntoView()}>
                    Upload Artwork
                  </Button>
                </div>

                {/* Artwork Upload Form */}
                <Card id="artwork-form">
                  <CardContent className="p-4">
                    <form onSubmit={handleArtworkSubmit}>
                      <Input
                        value={artworkTitle}
                        onChange={(e) => setArtworkTitle(e.target.value)}
                        placeholder="Artwork Title"
                        className="mb-2"
                        required
                      />
                      <Textarea
                        value={artworkDescription}
                        onChange={(e) => setArtworkDescription(e.target.value)}
                        placeholder="Artwork Description"
                        className="mb-2"
                      />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setArtworkImage(e.target.files ? e.target.files[0] : null)}
                        className="mb-2"
                        required
                      />
                      <Button type="submit" className="bg-blue-500 text-white">
                        Upload
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Dynamic Artworks */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artworks.map((artwork) => (
                    <div key={artwork.id} className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={
                          artwork.image_url
                            ? `http://localhost:8000${artwork.image_url}`
                            : "/placeholder.png"
                        }
                        alt={artwork.title}
                        width={300}
                        height={300}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.png";
                        }}
                        className="object-cover aspect-square transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-sm font-medium text-white">{artwork.title}</h3>
                          <p className="text-xs text-white/80">by {artwork.user.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">View More Artwork</Button>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Latest Reviews</h2>
                  <Button variant="outline" size="sm" onClick={() => document.getElementById("review-form")?.scrollIntoView()}>
                    Write Review
                  </Button>
                </div>

                {/* Review Creation Form */}
                <Card id="review-form">
                  <CardContent className="p-4">
                    <form onSubmit={handleReviewSubmit}>
                      <Input
                        value={reviewAnimeTitle}
                        onChange={(e) => setReviewAnimeTitle(e.target.value)}
                        placeholder="Anime Title"
                        className="mb-2"
                        required
                      />
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 cursor-pointer ${
                              i < reviewRating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"
                            }`}
                            onClick={() => setReviewRating(i + 1)}
                          />
                        ))}
                      </div>
                      <Textarea
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        placeholder="Write your review..."
                        className="mb-2"
                        required
                      />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setReviewImage(e.target.files ? e.target.files[0] : null)}
                        className="mb-2"
                      />
                      <Button type="submit" className="bg-blue-500 text-white">
                        Submit
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Dynamic Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Image
                            src={`http://localhost:8000${review.image_url || "/placeholder.svg?height=120&width=80"}`}
                            alt={review.anime_title}
                            width={80}
                            height={120}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <CardTitle className="text-lg">{review.anime_title}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${
                                    j < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                              <span className="text-sm ml-1">{review.rating}.0</span>
                            </div>
                            <CardDescription className="mt-1">
                              Reviewed by {review.user.name} • {new Date(review.created_at).toLocaleString()}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{review.content}</p>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Heart className="h-4 w-4" /> 0
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <MessageCircle className="h-4 w-4" /> 0
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Share2 className="h-4 w-4" /> Share
                          </button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">More Reviews</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Input placeholder="Search community..." className="pr-8" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full aspect-square rounded-l-none"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-500" /> Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">24.5K</p>
                    <p className="text-xs text-muted-foreground">Members</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.2K</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-pink-50 dark:bg-pink-900/10">
                    <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">156K</p>
                    <p className="text-xs text-muted-foreground">Posts</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10">
                    <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">3.8K</p>
                    <p className="text-xs text-muted-foreground">Daily Active</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}