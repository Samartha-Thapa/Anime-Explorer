"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface GetStartedLinkProps {
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  href: string
  children: React.ReactNode
}

export function GetStartedLink({
  className,
  variant = "default",
  size = "default",
  href,
  children,
}: GetStartedLinkProps) {
  const [isHovering, setIsHovering] = useState(false)

  const baseStyles =
    "relative group inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variantStyles = {
    default:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md shadow-purple-500/20",
    outline:
      "border border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-950/30",
    ghost: "text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-950/30",
  }

  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className={cn("h-4 w-4 transition-transform duration-300", isHovering ? "translate-x-1" : "")} />
      </span>

      {variant === "default" && (
        <>
          <span className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent to-white/10 transform translate-x-[-100%] skew-x-[20deg] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          <Sparkles className="absolute right-1 top-1 h-3 w-3 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
    </Link>
  )
}
