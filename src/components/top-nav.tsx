"use client"

import { Bell, Menu, X } from "lucide-react"
import { Button, Avatar, AvatarFallback, AvatarImage } from "@/lib/components-index";
import Link from "next/link"
import TopNavSearch from "./top-nav-search";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex md:hidden">
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
            className="mr-2 transition-transform hover:bg-purple-100/50 dark:hover:bg-purple-900/50"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Menu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              )}
            </motion.div>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-purple-600 dark:text-purple-400"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <span className="hidden font-bold text-xl md:inline-block text-gray-900 dark:text-gray-100">
            AnimeVault
          </span>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:gap-10">
          <nav className="flex items-center space-x-6 ml-4">
            {["Home", "Anime", "Manga", "Community", "Seasonal"].map((item) => (
              <Link
                key={item}
                href={`/dashboard${item === "Home" ? "" : item === "Anime" ? "/anime-list" :  item === "Seasonal" ? "/seasonal-animes" :`/${item.toLowerCase()}`}`}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-200 hover:text-purple-600 dark:hover:text-purple-400 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4">
            <TopNavSearch />
            <Button variant="ghost" size="icon" className="relative hover:bg-purple-100/50 dark:hover:bg-purple-900/50 transition-colors">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="sr-only">Notifications</span>
              <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-purple-200 dark:ring-purple-700/50">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@username" />
                  <AvatarFallback className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                    UN
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href='/dashboard/profile'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-8 ml-8 md:hidden">
          <Button variant="ghost" size="icon" className="relative hover:bg-purple-100/50 dark:hover:bg-purple-900/50">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-purple-200 dark:ring-purple-700/50">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@username" />
                <AvatarFallback className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                  UN
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href='/dashboard/profile'>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container py-4 space-y-3">
              <div className="px-4">
                <TopNavSearch />
              </div>
              {["Home", "Anime", "Manga", "Community", "Seasonal"].map((item) => (
                <Link
                  key={item}
                  href={`/dashboard${item === "Home" ? "" : item === "Anime" ? "/anime-list" : item === "Seasonal" ? "/seasonal-animes" : `/${item.toLowerCase()}`}`}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-pink-100/50 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 transition-all duration-200"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Button
                  variant="outline"
                  className="w-full border-purple-200 text-purple-600 dark:border-purple-700 dark:text-purple-400 hover:bg-purple-100/50 dark:hover:bg-purple-900/50"
                  onClick={toggleMobileMenu}
                >
                  Close Menu
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}