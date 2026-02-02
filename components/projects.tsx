"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"

const featuredProjects = projects.slice(0, 4)

export function Projects() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("projects-container")
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setScrollPosition(container.scrollLeft + scrollAmount)
    }
  }

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm text-muted-foreground">Selected work</h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-8 w-8"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-8 w-8"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <Button asChild variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <Link href="/work">
                View all work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div 
        id="projects-container"
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="w-[calc((100vw-1152px)/2)] shrink-0 hidden xl:block" />
        {featuredProjects.map((project) => (
          <Link 
            key={project.id}
            href={`/work/${project.slug}`}
            className="group shrink-0 w-[320px] md:w-[380px] snap-start"
          >
            <article>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
        <div className="w-6 shrink-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 md:hidden">
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href="/work">
            View all work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
