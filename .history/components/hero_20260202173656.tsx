import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full mt-0 md:mt-8 lg:mt-14 xl:mt-20">
        <p className="text-sm text-muted-foreground mb-4">Good afternoon</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed text-balance max-w-3xl mb-8">
          {"I'm an independent digital product designer. While design is my primary focus, I regularly work with code, believing that understanding the technical foundations leads to more thoughtful designs."}
        </h1>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <Link href="#about">About Me</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full gap-2">
            <Link href="#work">
              <ArrowDown className="w-4 h-4" />
              View Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
