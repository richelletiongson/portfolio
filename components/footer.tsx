import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026. Crafted by Richelle
        </p>
        <div className="flex gap-6">
          <Link 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Colophon
          </Link>
          <Link 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
