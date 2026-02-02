import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const craftItems = [
  {
    id: 1,
    title: "Design System Toolkit",
    description: "A comprehensive system for scaling design consistency across products",
    year: "2024",
    image: "/craft/craft-1.jpg",
    color: "bg-slate-100",
  },
  {
    id: 2,
    title: "Motion Principles",
    description: "Guidelines for meaningful animation in user interfaces",
    year: "2024",
    image: "/craft/craft-2.jpg",
    color: "bg-amber-50",
  },
  {
    id: 3,
    title: "Typography Scale",
    description: "A modular type system for digital products",
    year: "2023",
    image: "/craft/craft-3.jpg",
    color: "bg-stone-100",
  },
  {
    id: 4,
    title: "Icon Library",
    description: "Custom icon set designed for clarity and consistency",
    year: "2023",
    image: "/craft/craft-4.jpg",
    color: "bg-neutral-100",
  },
]

export function Craft() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-muted-foreground mb-8">Craft</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftItems.map((item) => (
            <article 
              key={item.id}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-square rounded-lg overflow-hidden mb-4 ${item.color}`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background rounded-full p-2">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
              <h3 className="font-medium text-foreground mb-1 group-hover:underline">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              <span className="text-xs text-muted-foreground">{item.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
