import { Button } from "@/components/ui/button"
import { ArrowUpRight, Copy } from "lucide-react"
import Link from "next/link"

const links = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "GitHub", href: "#" },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider">Contact</h2>
          </div>
          
          <div className="lg:col-span-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 max-w-2xl text-balance">
              {"If you would like to discuss a project or just say hi, I'm always down to chat."}
            </h3>
            
            <Button asChild className="rounded-full mb-12">
              <Link href="mailto:hello@alexchen.design">
                Get in Touch
              </Link>
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Mail</p>
                <button className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group">
                  <span>richelletiongson@icloud.com</span>
                  <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Social</p>
                <div className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link 
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors group w-fit"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
