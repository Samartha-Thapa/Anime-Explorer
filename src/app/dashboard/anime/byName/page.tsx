import HeroBanner from "@/components/hero-banner"
import MainContent from "@/components/main-content"

export default async function AnimePage({
  params,
}: {
  params: Promise<{ name: string }>
}) {

  const { name } = await params;
  // This would normally come from an API call based on the ID
  const anime = {
    id: 51818,
    title: "Fire Force Season 3",
    title_japanese: "炎炎ノ消防隊 参ノ章",
    image: "https://cdn.myanimelist.net/images/anime/1527/146836l.jpg",
    trailer_id: "nz-VCl7yUAw",
    type: "TV",
    source: "Manga",
    episodes: 12,
    status: "Currently Airing",
    aired: "Apr 5, 2025 to ?",
    duration: "24 min per ep",
    rating: "PG-13",
    score: 8.0,
    scored_by: 13464,
    rank: 669,
    popularity: 1253,
    members: 207869,
    favorites: 1320,
    synopsis:
      "Third season of Enen no Shouboutai. The story follows Shinra, a boy who gained the ability to ignite his feet at will and was nicknamed 'Devil's Footprints' after his mother died in a mysterious fire that destroyed his family home and left his younger brother missing. He joins Special Fire Force Company 8, which features other people with similar powers and fights against a phenomenon called Spontaneous Human Combustion, where humans are turned into living infernals.",
    season: "Spring",
    year: 2025,
    studios: ["David Production"],
    genres: ["Action", "Fantasy", "Sci-Fi"],
    themes: ["Urban Fantasy"],
    demographics: ["Shounen"],
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Banner */}
        <HeroBannerName animeName={name} />
      {/* Main Content */}
        {/* <MainContent /> */}
    </div>
  )
}
