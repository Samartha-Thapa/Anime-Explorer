"use client" // Add this at the top to make it a Client Component

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-4">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-2">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">Oops! Page Not Found</h2>
          <p className="text-purple-700 mb-6">The page you&apos;re looking for has disappeared into another dimension!</p>
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          <div className="relative w-full max-w-xs">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-300 rounded-full opacity-70 animate-pulse delay-300"></div>

            {/* Anime Character SVG */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto relative z-10 drop-shadow-xl"
              aria-label="Anime character looking confused"
            >
              {/* Head */}
              <circle cx="200" cy="150" r="90" fill="#FFD5D5" />

              {/* Hair */}
              <path
                d="M120,150 Q150,50 200,70 Q250,50 280,150 Q300,200 280,220 Q250,240 200,230 Q150,240 120,220 Q100,200 120,150"
                fill="#9C59D1"
              />

              {/* Face */}
              <ellipse cx="160" cy="140" rx="10" ry="15" fill="#5D1D91" />
              <ellipse cx="240" cy="140" rx="10" ry="15" fill="#5D1D91" />

              {/* Surprised expression */}
              <path d="M180,180 Q200,200 220,180" stroke="#5D1D91" strokeWidth="4" fill="none" />

              {/* Sweat drop */}
              <path d="M260,120 Q265,130 270,140" stroke="#88C1FF" strokeWidth="4" fill="#D6EAFF" />
              <circle cx="270" cy="145" r="5" fill="#D6EAFF" />

              {/* Body */}
              <path d="M150,240 Q200,260 250,240 L270,340 Q200,360 130,340 Z" fill="#F4AEFF" />

              {/* Arms */}
              <path d="M150,250 Q120,280 100,320" stroke="#FFD5D5" strokeWidth="20" strokeLinecap="round" />
              <path d="M250,250 Q280,280 300,320" stroke="#FFD5D5" strokeWidth="20" strokeLinecap="round" />

              {/* Question marks */}
              <text x="100" y="100" fontSize="40" fill="#FF6B9E" fontWeight="bold">
                ?
              </text>
              <text x="280" y="90" fontSize="30" fill="#FF6B9E" fontWeight="bold">
                ?
              </text>
              <text x="130" y="50" fontSize="25" fill="#FF6B9E" fontWeight="bold">
                ?
              </text>
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-8 text-white/80 text-sm">
        Lost in the anime multiverse? Don&apos;t worry, we&apos;ll help you find your way back!
      </p>
    </div>
  )
}