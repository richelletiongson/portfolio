import Link from "next/link"

export function Footer({ variant = "default" }: { variant?: "default" | "dark" }) {
  const isDark = variant === "dark"
  return (
    <footer className={`py-8 px-6 border-t ${isDark ? "border-zinc-800" : "border-border"}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className={`text-sm ${isDark ? "text-zinc-400" : "text-muted-foreground"}`}>
          © 2026. Crafted by Richelle
        </p>
        <div className="flex gap-6">
          <Link 
            href="#" 
            className={`text-sm transition-colors ${isDark ? "text-zinc-400 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
          >
            Colophon
          </Link>
          <Link 
            href="#" 
            className={`text-sm transition-colors ${isDark ? "text-zinc-400 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
