import HeroBanner from "@/components/hero-banner"
import MainContent from "@/components/main-content";

export default async function AnimePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  const numericId = parseInt(id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Banner */}
        <HeroBanner animeId={numericId} />
      {id}
      {/* Main Content */}
        <MainContent animeId={numericId} />
    </div>
  )
}
