"use client"

import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section 
      id="contact" 
      className="py-20 px-8 max-w-3xl mx-auto text-center"
    >
      <Reveal>
        <p className="font-mono text-[var(--color-accent)] text-sm mb-6">05. What&apos;s Next?</p>
      </Reveal>
      
      <Reveal delay={100}>
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-6">
          Get In Touch
        </h2>
      </Reveal>
      
      <Reveal delay={200}>
        <p className="text-lg text-[var(--color-ink2)] leading-relaxed mb-12 max-w-xl mx-auto">
          {"I'm always interested in connecting with fellow engineers working on Golang, microservices, cloud infrastructure, or distributed systems. Whether you have a project in mind or just want to say hello, feel free to reach out!"}
        </p>
      </Reveal>
      
      <Reveal delay={300}>
        <a
          href="mailto:Chandra.sk59@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-lg transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]"
        >
          <span>Say Hello</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </Reveal>

      <Reveal delay={400}>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.linkedin.com/in/ravi-chandra18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[var(--color-ink2)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:Chandra.sk59@gmail.com"
            className="p-3 text-[var(--color-ink2)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
