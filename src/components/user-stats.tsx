import { Card, CardContent, Avatar, AvatarFallback, AvatarImage } from "@/lib/components-index";
  
export function UserStats() {
    return (
        <section className="mb-10">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">Username</h2>
                    <p className="text-sm text-muted-foreground">Joined Jan 2023</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="flex flex-col items-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">142</p>
                  <p className="text-sm text-muted-foreground">Anime</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-pink-50 dark:bg-pink-900/10">
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">67</p>
                  <p className="text-sm text-muted-foreground">Manga</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">24</p>
                  <p className="text-sm text-muted-foreground">Friends</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    )
}