"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { MessageCircle, Mail, MapPin, Star, Users, Heart } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
          <div className="min-h-screen flex flex-col relative">
    <div className="container mx-auto px-4 py-12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="sakura-petals"></div>
              <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-600/20 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 left-1/4 text-4xl animate-pulse opacity-20">✨</div>
          <div className="absolute top-0 right-1/4 text-4xl animate-pulse opacity-20 animation-delay-700">✨</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            Contact <span className="anime-title">AnimeVerse</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions, suggestions, or just want to chat about your favorite anime? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white anime-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-pink-300" />
                <span>Chat With Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                Join our Discord server for real-time support and to connect with other anime fans.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 group">
                <span className="group-hover:translate-x-1 transition-transform">Join Discord</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white anime-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-300" />
                <span>Email Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                For business inquiries or private matters, reach out to our team directly.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 group">
                <span className="group-hover:translate-x-1 transition-transform">hello@animeverse.com</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white anime-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span>Visit Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">Find us at anime conventions and events throughout the year.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 group">
                <span className="group-hover:translate-x-1 transition-transform">View Schedule</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-4 anime-title">Join Our Anime Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-pink-300" />
              </div>
              <h3 className="font-bold mb-1">10,000+</h3>
              <p className="text-sm text-white/70">Community Members</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="font-bold mb-1">500+</h3>
              <p className="text-sm text-white/70">Anime Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                <Heart className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="font-bold mb-1">50+</h3>
              <p className="text-sm text-white/70">Fan Events Yearly</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription className="text-white/70">
                  We&apos;re here to help and answer any questions you might have.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-1 text-purple-200" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-white/70">hello@animeverse.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 mt-1 text-purple-200" />
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <p className="text-white/70">@AnimeVerse on all platforms</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription className="text-white/70">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Select>
                      <SelectTrigger id="subject" className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="business">Business Proposal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      required
                      className="min-h-32 bbg-gradient-to-r from-purple-600 to-blue-600 g-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-purple-700 hover:bg-white/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
