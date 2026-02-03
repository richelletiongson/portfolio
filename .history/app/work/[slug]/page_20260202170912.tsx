import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCaseStudy } from "@/components/work/ProjectCaseStudy"
import { getProjectBySlug, getOtherProjects, projects } from "@/lib/projects"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return { title: "Project Not Found" }
  }
  
  return {
    title: `${project.title} — Richelle Tiongson`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }

  const otherProjects = getOtherProjects(slug)

  if (project.layout === "case-study") {
    return <ProjectCaseStudy project={project} otherProjects={otherProjects} />
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
            <Link href="/work">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to work
            </Link>
          </Button>

          {/* Project Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-muted-foreground">{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="text-sm text-muted-foreground">{project.client}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-16 bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-border">
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Role</h3>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Duration</h3>
              <p className="font-medium">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Client</h3>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Tools</h3>
              <p className="font-medium">{project.tools.join(", ")}</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-16">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Overview</h2>
            <p className="text-foreground leading-relaxed text-lg max-w-4xl">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">The Challenge</h2>
              <p className="text-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="mb-16 pb-16 border-b border-border">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Results & Impact</h2>
            <p className="text-foreground leading-relaxed text-lg max-w-4xl">
              {project.results}
            </p>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index}
                  className={`relative rounded-xl overflow-hidden bg-muted ${
                    index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-16 pb-16 border-b border-border">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-sm px-4 py-2 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Other Projects - Horizontal Scroll */}
          {otherProjects.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium text-foreground">Check out some of my other projects</h2>
                <Button asChild variant="outline" size="sm" className="hidden md:flex bg-transparent">
                  <Link href="/work">
                    View all work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="overflow-x-auto scrollbar-hide pb-8 -mx-6 px-6">
                <div className="flex gap-6">
                  {otherProjects.map((otherProject) => (
                    <Link 
                      key={otherProject.id}
                      href={`/work/${otherProject.slug}`}
                      className="group shrink-0 w-[280px] md:w-[320px]"
                    >
                      <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-muted">
                        <Image
                          src={otherProject.image || "/placeholder.svg"}
                          alt={otherProject.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors mb-1">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{otherProject.year}</p>
                    </Link>
                  ))}
                  <div className="w-6 shrink-0" />
                </div>
              </div>
            </section>
          )}

          <div className="max-w-6xl mx-auto px-6 md:hidden mt-4 mb-8">
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/work">
                View all work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          </article>
      </main>
      <Footer />
    </>
  )
}
