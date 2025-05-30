import Link from "next/link"
import { Star, Sparkles, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t py-8 overflow-hidden bg-gradient-to-r from-purple-600/5 to-blue-600/5 dark:from-purple-900/20 dark:to-blue-900/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      <div className="absolute -top-10 left-1/4 text-4xl animate-pulse opacity-10">✨</div>
      <div className="absolute top-20 right-1/3 text-4xl animate-pulse opacity-10" style={{ animationDelay: "1s" }}>
        🌸
      </div>
      <div className="absolute bottom-10 left-1/3 text-4xl animate-pulse opacity-10" style={{ animationDelay: "2s" }}>
        ⭐
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              title: "AnimeVault",
              links: [
                { href: "/dashboard/about", label: "About Us" },
                { href: "/dashboard/contact", label: "Contact" },
                { href: "/dashboard/terms", label: "Terms of Service" },
                { href: "/dashboard/privacy", label: "Privacy Policy" },
              ],
              icon: <Sparkles className="h-4 w-4" />,
            },
            {
              title: "Browse",
              links: [
                { href: "/dashboard/anime-list", label: "Anime" },
                { href: "/dashboard/manga", label: "Manga" },
                { href: "/dashboard/seasonal-animes", label: "Seasons" },
                { href: "/dashboard/", label: "Genres" },
              ],
              icon: <Star className="h-4 w-4" />,
            },
            {
              title: "Community",
              links: [
                { href: "#", label: "Forums" },
                { href: "#", label: "Reviews" },
                { href: "#", label: "Recommendations" },
                { href: "#", label: "News" },
              ],
              icon: <Heart className="h-4 w-4" />,
            },
            {
              title: "Connect",
              links: [
                { href: "#", label: "Twitter" },
                { href: "#", label: "Discord" },
                { href: "#", label: "Instagram" },
                { href: "#", label: "Reddit" },
              ],
              icon: <Sparkles className="h-4 w-4" />,
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="mb-4 text-lg font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300">
                {section.icon}
                <span>{section.title}</span>
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link, j) => (
                  <li key={j} className="group">
                    <Link
                      href={link.href}
                      className="relative inline-block hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    >
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                        <span className="opacity-0 scale-0 -ml-4 mr-1 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                          ➤
                        </span>
                        {link.label}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 text-center">
          <div className="inline-block mx-auto mb-4 px-8 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-500/20">
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300 font-medium">
              Your Gateway to Anime Adventures
            </p>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 AnimeVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
