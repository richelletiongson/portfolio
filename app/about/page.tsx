import { Github, Linkedin, Twitter, Dribbble, Mail, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
]

const experience = [
  {
    period: "2023 — Present",
    role: "Lead Product Designer",
    company: "Vercel",
    description: "Leading design for developer experience tools, creating interfaces that empower millions of developers worldwide. Spearheading the redesign of core dashboard experiences and establishing new design patterns for AI-powered features.",
  },
  {
    period: "2020 — 2023",
    role: "Senior Designer",
    company: "Linear",
    description: "Designed core product features and established design systems that scaled across the entire application. Led the design of real-time collaboration features and contributed to Linear's distinctive visual language.",
  },
  {
    period: "2018 — 2020",
    role: "Product Designer",
    company: "Stripe",
    description: "Created payment experiences and dashboards, focusing on simplifying complex financial workflows. Worked on the Stripe Connect platform, designing tools for marketplace businesses.",
  },
  {
    period: "2016 — 2018",
    role: "UI/UX Designer",
    company: "Figma",
    description: "Early design team member contributing to core editing features and plugin architecture. Helped shape the collaborative design tool used by millions of designers today.",
  },
]

const skills = [
  { category: "Design", items: ["Product Design", "UI/UX Design", "Design Systems", "Prototyping", "User Research"] },
  { category: "Tools", items: ["Figma", "Framer", "Adobe Creative Suite", "Principle", "Webflow"] },
  { category: "Development", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
]

const awards = [
  { year: "2024", title: "Awwwards Site of the Day", project: "Vercel Dashboard Redesign" },
  { year: "2023", title: "Communication Arts Award", project: "Linear Brand Identity" },
  { year: "2022", title: "Red Dot Design Award", project: "Stripe Connect Platform" },
  { year: "2021", title: "FWA of the Day", project: "Figma Community Portal" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-16">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
            </Button>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
                  I craft digital experiences that people love to use.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {"I'm Richelle Tiongson, a digital product designer based in San Francisco. With over 8 years of experience, I specialize in creating intuitive, accessible, and visually compelling digital products that solve real problems."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="mailto:hello@alexchen.design">
                      <Mail className="w-4 h-4 mr-2" />
                      Get in touch
                    </Link>
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                    <Image
                    src="/about/portrait.jpg"
                    alt="Richelle Tiongson - Digital Product Designer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex gap-4 mb-6">
                  {socials.map((social) => (
                    <Link 
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">Location:</span> San Francisco, CA
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Email:</span> hello@richelletiongson.design
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Availability:</span> Open to select projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <section className="mb-20">
            <h2 className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Background</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="prose prose-neutral max-w-none">
                <p className="text-foreground leading-relaxed">
                  {"My journey into design started with a fascination for how digital products could make complex tasks feel effortless. I believe great design is invisible—it gets out of the way and lets users accomplish their goals with ease and even delight."}
                </p>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {"I've had the privilege of working with companies ranging from early-stage startups to industry leaders. Each experience has reinforced my belief that the best products come from deep collaboration between design, engineering, and product teams."}
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Experience</h2>
            <div className="space-y-10">
              {experience.map((item) => (
                <div key={item.period} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <span className="text-sm text-muted-foreground md:col-span-2">{item.period}</span>
                  <div className="md:col-span-10">
                    <h3 className="font-medium text-foreground mb-1">
                      {item.role}
                    </h3>
                    <p className="text-muted-foreground mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="font-medium text-foreground mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="mb-20">
            <h2 className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Recognition</h2>
            <div className="space-y-6">
              {awards.map((award) => (
                <div key={award.title} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-4 border-b border-border">
                  <span className="text-sm text-muted-foreground w-16 shrink-0">{award.year}</span>
                  <span className="font-medium text-foreground flex-1">{award.title}</span>
                  <span className="text-sm text-muted-foreground">{award.project}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4 text-balance">
              {"Let's create something great together"}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out."}
            </p>
            <Button asChild size="lg">
              <Link href="mailto:hello@richelletiongson.design">
                Start a conversation
              </Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
