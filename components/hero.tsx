"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const pills = ["Golang", "Kubernetes", "Microservices", "AWS", "GCP", "Docker"]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg2)] to-[var(--color-bg)] animate-gradient opacity-50" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--color-accent2)]/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <div 
              className={`font-mono text-sm text-[var(--color-accent)] mb-6 flex items-center gap-3 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-block w-12 h-px bg-[var(--color-accent)]" />
              Hi, my name is
            </div>
            
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-ink)] mb-4 leading-[1.1] transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ravi Chandra
              <span className="text-[var(--color-accent)]">.</span>
            </h1>
            
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink2)] mb-8 leading-tight transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              I build scalable cloud systems.
            </h2>
            
            <p 
              className={`text-lg text-[var(--color-ink2)] max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Senior Golang Developer with 10+ years of experience crafting 
              microservices, Kubernetes-native platforms, and cloud infrastructure 
              at companies like <span className="text-[var(--color-accent)]">Capital One</span>, <span className="text-[var(--color-accent)]">Cigna</span>, and <span className="text-[var(--color-accent)]">Genuine Parts Company</span>.
            </p>
            
            <div 
              className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {pills.map((pill, index) => (
                <span 
                  key={pill}
                  className="group relative font-mono text-xs text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-4 py-2 rounded-full transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 cursor-default"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {pill}
                </span>
              ))}
            </div>
            
            <div 
              className={`flex gap-4 flex-wrap transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link 
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                <span className="relative z-10">Get in Touch</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-[var(--color-accent2)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link 
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 text-[var(--color-ink)] border border-[var(--color-rule)] rounded-lg transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                View My Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Terminal/Code Preview */}
          <div 
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-80 bg-[var(--color-bg2)] border border-[var(--color-rule)] rounded-xl overflow-hidden glow-border">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-rule)]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-[var(--color-ink3)] font-mono">main.go</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-[var(--color-ink3)]">// Building great software</div>
                <div className="mt-2">
                  <span className="text-purple-400">package</span> <span className="text-[var(--color-ink)]">main</span>
                </div>
                <div className="mt-4">
                  <span className="text-purple-400">func</span> <span className="text-yellow-300">main</span>() {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-ink2)]">engineer</span> := <span className="text-[var(--color-accent)]">&amp;Developer</span>{"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[var(--color-ink2)]">Name:</span> <span className="text-orange-300">{'"'}Ravi Chandra Eluri{'"'}</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[var(--color-ink2)]">Role:</span> <span className="text-orange-300">{'"'}Sr. Software Engineer{'"'}</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[var(--color-ink2)]">Coffee:</span> <span className="text-purple-400">true</span>,
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-[var(--color-ink3)] font-mono">Scroll</span>
          <div className="w-6 h-10 border-2 border-[var(--color-ink3)] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
