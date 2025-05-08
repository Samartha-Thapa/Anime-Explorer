import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Heart, Share2, Bookmark, TrendingUp, Users, Calendar, Star, Search } from "lucide-react"

export default function CommunityPage() {
  // Mock data for community posts
  const trendingTopics = [
    {
      id: 1,
      title: "Demon Slayer Season 4 Discussion",
      posts: 342,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      title: "Jujutsu Kaisen Manga Chapter 256 Spoilers",
      posts: 289,
      lastActive: "5 hours ago",
    },
    {
      id: 3,
      title: "One Piece Chapter 1115 Theories",
      posts: 421,
      lastActive: "1 hour ago",
    },
    {
      id: 4,
      title: "Chainsaw Man Part 2 Analysis",
      posts: 187,
      lastActive: "12 hours ago",
    },
    {
      id: 5,
      title: "Attack on Titan Ending - 2 Years Later",
      posts: 256,
      lastActive: "3 hours ago",
    },
  ]

  const recentPosts = [
    {
      id: 1,
      user: {
        name: "AnimeExplorer42",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      title: "My thoughts on the latest episode of Demon Slayer",
      content:
        "The animation quality in the latest episode was absolutely stunning! The fight scenes were fluid and the emotional moments hit hard. What did you all think?",
      likes: 128,
      comments: 47,
      time: "2 hours ago",
      tags: ["Demon Slayer", "Episode Discussion"],
    },
    {
      id: 2,
      user: {
        name: "MangaReader99",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      title: "Unpopular Opinion: Jujutsu Kaisen is overrated",
      content:
        "I know I'll get a lot of hate for this, but I think Jujutsu Kaisen is a bit overrated. The animation is great, but the story feels derivative at times. Anyone else feel the same?",
      likes: 56,
      comments: 89,
      time: "5 hours ago",
      tags: ["Jujutsu Kaisen", "Hot Take"],
    },
    {
      id: 3,
      user: {
        name: "OnePieceFan1997",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      title: "One Piece Theory: The true nature of the One Piece treasure",
      content:
        "After the recent chapters, I think I've figured out what the One Piece actually is! It's not gold or jewels, but something much more meaningful to the world...",
      likes: 215,
      comments: 73,
      time: "1 day ago",
      tags: ["One Piece", "Theory"],
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "AnimeVault Virtual Watch Party: Demon Slayer",
      date: "May 15, 2025",
      time: "8:00 PM EST",
      participants: 156,
    },
    {
      id: 2,
      title: "Manga Club: Monthly Discussion",
      date: "May 20, 2025",
      time: "7:00 PM EST",
      participants: 89,
    },
    {
      id: 3,
      title: "Anime Quiz Night",
      date: "May 25, 2025",
      time: "9:00 PM EST",
      participants: 124,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <NavBar />

      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with fellow anime fans and join the conversation</p>
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
              Share your thoughts, theories, and passion for anime with thousands of fans. Participate in discussions,
              events, and make new friends!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-purple-900 hover:bg-white/90">Create Post</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Forums
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
                  <Button variant="outline" size="sm">
                    New Post
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                              <AvatarFallback>{post.user.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{post.title}</CardTitle>
                              <CardDescription>
                                Posted by {post.user.name} • {post.time}
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
                          {post.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Heart className="h-4 w-4" /> {post.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <MessageCircle className="h-4 w-4" /> {post.comments}
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
                  <Button variant="outline" size="sm">
                    Upload Artwork
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Artwork${i}`}
                        alt={`Artwork ${i}`}
                        width={300}
                        height={300}
                        className="object-cover aspect-square transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-sm font-medium text-white">Artwork Title {i}</h3>
                          <p className="text-xs text-white/80">by ArtistName{i}</p>
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
                  <Button variant="outline" size="sm">
                    Write Review
                  </Button>
                </div>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Image
                            src={`/placeholder.svg?height=120&width=80&text=Anime${i}`}
                            alt={`Anime ${i}`}
                            width={80}
                            height={120}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <CardTitle className="text-lg">Anime Title {i}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${
                                    j < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                              <span className="text-sm ml-1">4.0</span>
                            </div>
                            <CardDescription className="mt-1">Reviewed by ReviewerName{i} • 2 days ago</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          This anime was amazing! The character development was top-notch and the animation quality was
                          consistently excellent. The story had me hooked from the first episode...
                        </p>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Heart className="h-4 w-4" /> 42
                          </button>
                          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <MessageCircle className="h-4 w-4" /> 12
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

            {/* Trending Topics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-500" /> Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <div key={topic.id} className="flex items-center justify-between">
                      <Link
                        href={`/community/topic/${topic.id}`}
                        className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {topic.title}
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{topic.posts} posts</span>
                        <span>•</span>
                        <span>{topic.lastActive}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="w-full text-sm">
                  View All Topics
                </Button>
              </CardFooter>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" /> Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="space-y-2">
                      <h3 className="font-medium text-sm">{event.title}</h3>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {event.date} • {event.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        Join Event
                      </Button>
                      {event.id !== upcomingEvents.length && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="w-full text-sm">
                  View All Events
                </Button>
              </CardFooter>
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
  )
}
