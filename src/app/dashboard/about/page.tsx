import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="container mx-auto px-4 py-12">
        {/* Remove overflow-hidden from this div */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="sakura-petals"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-600/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-12">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 opacity-70 animate-pulse">
            <div className="w-full h-full rounded-full bg-pink-500/30 blur-xl"></div>
          </div>
          <div
            className="absolute -bottom-6 -right-6 w-24 h-24 opacity-70 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-full rounded-full bg-blue-500/30 blur-xl"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 relative z-10">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-200">
              AnimeVerse
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-center text-white/90 mb-8">Your ultimate destination for all things anime!</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-12 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
          <div className="relative h-64 overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Anime cityscape"
              width={1200}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-pink-300" />
              <h2 className="text-2xl font-bold">Our Story</h2>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="mb-4">
              Founded in 2020 by a group of passionate anime enthusiasts, AnimeVerse was born from a shared love of
              Japanese animation and culture. What started as a small community forum has grown into one of the web&apos;s
              premier destinations for anime fans around the world.
            </p>
            <p className="mb-6">
              Our mission is to create a vibrant space where fans can discover new series, discuss their favorites, and
              connect with fellow enthusiasts who share their passion for this unique art form.
            </p>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="italic text-center text-white/80">
                &quot;In the world of anime, we find not just entertainment, but reflections of our own dreams, struggles,
                and triumphs.&quot;
              </p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold text-white mb-8 text-center relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-200">
            Meet Our Team
          </span>
          <div className="absolute -top-4 -right-4 text-2xl animate-pulse">✨</div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              name: "Yuki Tanaka",
              role: "Founder & CEO",
              bio: "Lifelong anime fan with a passion for bringing fans together.",
              image: "/placeholder.svg?height=300&width=300",
              favoriteAnime: "Spirited Away",
            },
            {
              name: "Kai Nakamura",
              role: "Content Director",
              bio: "Anime historian and critic with over 1,000 series watched.",
              image: "/placeholder.svg?height=300&width=300",
              favoriteAnime: "Attack on Titan",
            },
            {
              name: "Mei Lin",
              role: "Community Manager",
              bio: "Cosplayer and event organizer who loves building communities.",
              image: "/placeholder.svg?height=300&width=300",
              favoriteAnime: "My Hero Academia",
            },
          ].map((member, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 z-10"></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-purple-200 text-center text-sm mb-3">{member.role}</p>
                <p className="text-white/80 text-center text-sm mb-3">{member.bio}</p>
                <div className="text-center text-xs text-pink-200">
                  <span className="font-bold">Favorite Anime:</span> {member.favoriteAnime}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-12 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-200">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Community First",
                  description:
                    "We believe in the power of community and strive to create a welcoming space for all anime fans.",
                  emoji: "👥",
                },
                {
                  title: "Passion & Creativity",
                  description:
                    "We celebrate the creativity and artistry that makes anime a unique and powerful medium.",
                  emoji: "✨",
                },
                {
                  title: "Diversity & Inclusion",
                  description: "We embrace the diverse perspectives and experiences that enrich our community.",
                  emoji: "🌈",
                },
                {
                  title: "Continuous Discovery",
                  description: "We're always exploring new series, creators, and styles to share with our community.",
                  emoji: "🔍",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="text-2xl">{value.emoji}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-purple-200">{value.title}</h3>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-200">
            Join Our Anime Journey
          </h2>
          <p className="text-white/90 mb-6">
            Whether you&apos;re a seasoned otaku or new to the world of anime, there&apos;s a place for you at AnimeVerse. Join
            our community today and be part of something special!
          </p>
          <div className="inline-block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
            <button className="relative px-6 py-3 bg-black rounded-lg text-white font-semibold">Join Now</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
