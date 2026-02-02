import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Project } from "@/lib/projects"

interface ProjectCaseStudyProps {
  project: Project
  otherProjects: Project[]
}

function CaseStudySection({
  title,
  children,
  className = "",
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`mb-16 md:mb-24 ${className}`}>
      <h2 className="text-sm text-zinc-400 uppercase tracking-wider mb-6">{title}</h2>
      {children}
    </section>
  )
}

function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-800">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1152px"
      />
    </div>
  )
}

export function ProjectCaseStudy({ project, otherProjects }: ProjectCaseStudyProps) {
  const rolesDisplay = project.rolesDisplay ?? project.role
  const tagline = project.tagline ?? ""
  const introImage = project.introImage ?? project.image
  const wireframeLowFi = project.wireframeLowFi ?? project.gallery[0]
  const wireframeHighFi = project.wireframeHighFi ?? project.gallery[1]
  const userFlowImage = project.userFlowImage ?? project.gallery[0]
  const moodboardImage = project.moodboardImage ?? project.gallery[1]

  return (
    <div className="bg-neutral-950 min-h-screen">
      <Header />
      <main className="pt-24 pb-16 text-white">
        <article className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Button asChild variant="ghost" size="sm" className="mb-12 -ml-3 text-zinc-400 hover:text-white hover:bg-zinc-800">
            <Link href="/work">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to work
            </Link>
          </Button>

          {/* Hero: Title + Sidebar */}
          <header className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight">
                  {project.title}
                </h1>
              </div>
              <div className="lg:col-span-4 space-y-4 text-sm text-zinc-400">
                <p><span className="text-zinc-500">Duration:</span> {project.duration}</p>
                <p><span className="text-zinc-500">Roles:</span> {rolesDisplay}</p>
                <p><span className="text-zinc-500">Tools:</span> {project.tools.join(", ")}</p>
              </div>
            </div>
          </header>

          {/* Banner + Tagline */}
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-zinc-800 mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            {tagline && (
              <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-12">
                <p className="text-lg md:text-xl text-white max-w-2xl font-medium">
                  {tagline}
                </p>
              </div>
            )}
          </div>

          {/* Introduction: Text + Phone Mockup */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            <div className="lg:col-span-7">
              <p className="text-zinc-300 leading-relaxed text-lg">
                {project.overview}
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-48 aspect-[9/19] rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700 shadow-2xl">
                <Image
                  src={introImage}
                  alt={`${project.title} app preview`}
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <CaseStudySection title="The Challenge">
            <p className="text-zinc-300 leading-relaxed max-w-3xl">
              {project.challenge}
            </p>
          </CaseStudySection>

          {/* Wireframes */}
          <CaseStudySection title="Wireframes">
            <div className="space-y-12">
              <div>
                <h3 className="text-xs text-zinc-500 uppercase tracking-wider mb-4">Low-fidelity Wireframes</h3>
                <CaseStudyImage src={wireframeLowFi} alt="Low-fidelity wireframes" />
              </div>
              <div>
                <h3 className="text-xs text-zinc-500 uppercase tracking-wider mb-4">High-fidelity Wireframes</h3>
                <CaseStudyImage src={wireframeHighFi} alt="High-fidelity wireframes" />
              </div>
            </div>
          </CaseStudySection>

          {/* The Solution */}
          <CaseStudySection title="The Solution">
            <p className="text-zinc-300 leading-relaxed max-w-3xl">
              {project.solution}
            </p>
          </CaseStudySection>

          {/* User Flow */}
          <CaseStudySection title="User Flow">
            <CaseStudyImage src={userFlowImage} alt="User flow diagram" />
          </CaseStudySection>

          {/* Moodboard */}
          <CaseStudySection title="Moodboard">
            <CaseStudyImage src={moodboardImage} alt="Design moodboard" />
          </CaseStudySection>

          {/* The Impact */}
          <CaseStudySection title="The Impact">
            <p className="text-zinc-300 leading-relaxed text-lg max-w-3xl">
              {project.results}
            </p>
          </CaseStudySection>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-20 pt-8 border-t border-zinc-800">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-2 rounded-full border border-zinc-700 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium text-white">Check out some of my other projects</h2>
                <Button asChild variant="outline" size="sm" className="hidden md:flex border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
                  <Link href="/work">
                    View all work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="overflow-x-auto scrollbar-hide pb-8">
                <div className="flex gap-6">
                  {otherProjects.map((p) => (
                    <Link
                      key={p.id}
                      href={`/work/${p.slug}`}
                      className="group shrink-0 w-[280px] md:w-[320px]"
                    >
                      <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-zinc-800">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-medium text-white group-hover:text-zinc-400 transition-colors mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-zinc-500">{p.year}</p>
                    </Link>
                  ))}
                  <div className="w-6 shrink-0" />
                </div>
              </div>
            </section>
          )}

          <div className="md:hidden">
            <Button asChild variant="outline" className="w-full border-zinc-700 text-zinc-300">
              <Link href="/work">
                View all work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer variant="dark" />
    </div>
  )
}
