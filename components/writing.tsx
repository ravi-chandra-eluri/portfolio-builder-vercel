"use client"

import { Reveal } from "./reveal"

const posts = [
  {
    title: "Building store-and-forward telemetry for edge environments",
    date: "Coming soon",
  },
  {
    title: "Reconciliation loops in practice: lessons from controller-runtime",
    date: "Coming soon",
  },
  {
    title: "Designing fault-tolerant microservices with Go channels",
    date: "Coming soon",
  },
  {
    title: "Real-time payment processing: WebSocket patterns in production",
    date: "Coming soon",
  },
]

export function Writing() {
  return (
    <section 
      id="writing" 
      className="py-20 px-8 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-accent)] text-sm">04.</span>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]">Writing</h2>
          <div className="flex-1 h-px bg-[var(--color-rule)] max-w-xs" />
        </div>
      </Reveal>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Reveal key={post.title} delay={index * 100}>
            <div className="group flex items-center justify-between p-6 bg-[var(--color-bg2)] rounded-lg border border-[var(--color-rule)] transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-bg2)]/80 cursor-pointer">
              <span className="text-[var(--color-ink)] font-medium group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[var(--color-ink3)]">
                  {post.date}
                </span>
                <svg 
                  className="w-4 h-4 text-[var(--color-ink3)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={400}>
        <p className="text-center text-[var(--color-ink3)] mt-8 font-mono text-sm">
          Writing is in progress — check back soon.
        </p>
      </Reveal>
    </section>
  )
}
