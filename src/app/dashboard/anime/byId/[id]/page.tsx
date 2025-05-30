import WholeAnimePage from "@/components/whole-anime-byId";
import { getAnimeById } from "@/lib/api";
import { Anime } from "@/lib/types";

export default async function AnimePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = parseInt(id);

  if (isNaN(numericId)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <main className="container py-6">
          <h1 className="text-2xl font-bold text-red-500">Invalid anime ID</h1>
        </main>
      </div>
    );
  }

  let anime: Anime | null = null;
  try {
    const response = await getAnimeById(numericId);
    anime = response.data;
  } catch (error) {
    console.error("Failed to fetch anime:", error);
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <main className="container py-6">
          <h1 className="text-2xl font-bold text-red-500">Failed to load anime data</h1>
        </main>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <main className="container py-6">
          <h1 className="text-2xl font-bold text-red-500">Anime not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <WholeAnimePage anime={anime} />
    </div>
  );
}