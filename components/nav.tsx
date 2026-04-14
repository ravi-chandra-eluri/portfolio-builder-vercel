"use client"

import Link from "next/link"
import { useActiveSection } from "@/hooks/use-scroll-reveal"
import { useState, useEffect } from "react"

const navItems = ["About", "Experience", "Projects", "Writing", "Contact"]

export function Nav() {
  const activeSection = useActiveSection(["hero", "about", "experience", "projects", "writing", "contact"])
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-rule)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <Link 
          href="#hero" 
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent2)] flex items-center justify-center text-[var(--color-bg)] font-bold text-lg transition-transform group-hover:scale-110">
            RC
          </div>
          <span className="font-serif text-xl text-[var(--color-ink)] hidden sm:block">
            Ravi Chandra
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase()
            return (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all ${
                    isActive 
                      ? "text-[var(--color-accent)]" 
                      : "text-[var(--color-ink2)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                  )}
                </Link>
              </li>
            )
          })}
          
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[var(--color-ink)] transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-[var(--color-ink)] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[var(--color-ink)] transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg)]/95 backdrop-blur-xl border-b border-[var(--color-rule)] animate-fade-in">
          <ul className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg text-[var(--color-ink2)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
            
          </ul>
        </div>
      )}
    </nav>
  )
}
