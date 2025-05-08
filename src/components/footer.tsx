import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-white py-6 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">AnimeVault</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Browse</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Anime
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Manga
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Seasons
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Genres
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Recommendations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">
                    Reddit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 AnimeVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}