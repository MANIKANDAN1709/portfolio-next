'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Favorities() {
    const favoriteChannels = [
      {
        name: "Fireship",
        description: "High-intensity ⚡  tech news",
        category: "Programming",
        url: "https://www.youtube.com/@Fireship"
      },
      {
        name: "3Blue1Brown",
        description: "AI and Machine Learning with visual storytelling",
        category: "Programming",
        url: "https://www.youtube.com/@3blue1brown"
      },
      {
        name: "Theo - t3.gg",
        description: "Web development, React, and tech takes",
        category: "Programming",
        url: "https://www.youtube.com/@t3dotgg"
      },
      {
        name: "Web Dev Simplified",
        description: "Making web development simple and accessible",
        category: "Programming",
        url: "https://www.youtube.com/@WebDevSimplified"
      },
      {
        name: "Techy Tacos",
        description: "Tutorials on various programming languages and technologies.",
        category: "Programming",
        url: "https://www.youtube.com/@TechyTacos/playlists"
      },
      {
        name: "Ankita Kulkarni",
        description: "Sass Product Development",
        category: "Product Development",
        url: "https://www.youtube.com/@Kulkarniankita"
      },
      {
        name: "Sriniously",
        description: "Backend development",
        category: "Programming",
        url: "https://www.youtube.com/@sriniously"
      },
      {
        name: "Adi Ravi",
        description: "Sass product development",
        category: "Product Development",
        url: "https://www.youtube.com/@adiiravi"
      },
      {
        name: "Keerti Purswani",
        description: "AI & ML applications development",
        category: "Programming",
        url: "https://www.youtube.com/@KeertiPurswani"
      },
      {
        name: "Sanjeev NC",
        description: "Sass product development",
        category: "Product Development",
        url: "https://www.youtube.com/@sanjeevnctamil"
      },
      {
        name: "Marc-Lou",
        description: "Sass product development",
        category: "Product Development",
        url: "https://www.youtube.com/@marc-lou"
      },
      {
        name: "Finance Boosan",
        description: "Finance and investment",
        category: "Finance",
        url: "https://www.youtube.com/@finance.boosan"
      },
      {
       name: "Hitesh Choudhary",
       description: "Full Stack Developer",
       category: "Programming",
       url: "https://www.youtube.com/@HiteshCodeLab"
      },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>("All")
    
    // Get unique categories
    const categories = ["All", ...Array.from(new Set(favoriteChannels.map(channel => channel.category)))]
    
    // Filter channels based on selected category
    const filteredChannels = selectedCategory === "All" 
      ? favoriteChannels 
      : favoriteChannels.filter(channel => channel.category === selectedCategory)

    return (
      <div className="font-sans min-h-screen bg-background">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Favorite YouTube Channels
            </h1>
            <p className="text-muted-foreground text-lg">
              My go-to channels for learning and entertainment
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 bg-muted text-muted-foreground text-xs px-1.5 py-0.5 rounded-full">
                    {favoriteChannels.filter(channel => channel.category === category).length}
                  </span>
                )}
                {category === "All" && (
                  <span className="ml-2 bg-muted text-muted-foreground text-xs px-1.5 py-0.5 rounded-full">
                    {favoriteChannels.length}
                  </span>
                )}
              </Button>
            ))}
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card text-card-foreground rounded-lg border shadow-sm hover:shadow-md transition-all duration-200 p-6 hover:scale-105 cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    <h3 className="text-xl font-semibold">{channel.name}</h3>
                    </div>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {channel.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              These channels have been instrumental in my learning journey and continue to inspire me daily.
            </p>
          </div>
        </main>
      </div>
    )
  }