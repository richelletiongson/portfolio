"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects, categories, type Category } from "@/lib/projects"

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-12">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4 text-balance">
              All Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects spanning UI/UX design, product design, and graphic design. Each project represents a unique challenge and creative solution.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeCategory === category.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                href={`/work/${project.slug}`}
                className="group"
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
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-sm text-muted-foreground shrink-0">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
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
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
