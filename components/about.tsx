import { Github, Linkedin, Twitter, Dribbble, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
    description: "Leading design for developer experience tools, creating interfaces that empower millions of developers worldwide.",
  },
  {
    period: "2020 — 2023",
    role: "Senior Designer",
    company: "Linear",
    description: "Designed core product features and established design systems that scaled across the entire application.",
  },
  {
    period: "2018 — 2020",
    role: "Product Designer",
    company: "Stripe",
    description: "Created payment experiences and dashboards, focusing on simplifying complex financial workflows.",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Bio */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/about/portrait.jpg"
                alt="Richelle Tiongson"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">About</h2>
            <p className="text-muted-foreground text-sm mb-6">
              {"I build accessible, pixel-perfect digital experiences for the web."}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-neutral max-w-none mb-16">
              <p className="text-foreground text-lg leading-relaxed mb-6">
                {"I'm a designer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {"In the past, I've had the opportunity to design digital products across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. I believe in the power of understanding technical foundations to create more thoughtful, implementable designs."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {"In my spare time, I'm usually exploring new design tools, contributing to open source projects, reading about design systems, or experimenting with creative coding."}
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn more about me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">Experience</h3>
              <div className="space-y-8">
                {experience.map((item) => (
                  <div key={item.period} className="group">
                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                      <span className="text-sm text-muted-foreground w-36 shrink-0">{item.period}</span>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {item.role} · <span className="text-muted-foreground">{item.company}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
