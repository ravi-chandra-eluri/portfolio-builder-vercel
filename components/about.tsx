"use client"

import { Reveal } from "./reveal"

const skillGroups = [
  {
    title: "Languages",
    skills: ["Golang", "Java", "Python", "TypeScript", "Scala"],
  },
  {
    title: "Cloud & Infra",
    skills: ["AWS", "GCP", "Azure", "Kubernetes", "Docker"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Cassandra"],
  },
  {
    title: "Tools",
    skills: ["Terraform", "Kafka", "gRPC", "Jenkins", "GitHub Actions"],
  },
]

export function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-8 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-accent)] text-sm">01.</span>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]">About Me</h2>
          <div className="flex-1 h-px bg-[var(--color-rule)] max-w-xs" />
        </div>
      </Reveal>
      
      <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
        <div className="space-y-5">
          <Reveal delay={100}>
            <p className="text-lg text-[var(--color-ink2)] leading-relaxed">
              {"I'm a Senior Golang Developer with over "}
              <span className="text-[var(--color-accent)]">10 years</span>
              {" of IT experience and "}
              <span className="text-[var(--color-accent)]">6+ years</span>
              {" specializing in Go. I focus on building scalable microservices, cloud-native applications, and distributed systems."}
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-lg text-[var(--color-ink2)] leading-relaxed">
              Currently at <span className="text-[var(--color-accent)]">Genuine Parts Company</span>, 
              I design and implement Golang microservices supporting real-time payment transactions 
              over GCP infrastructure. My expertise includes concurrent programming with 
              Goroutines and Channels, RESTful APIs, and gRPC services.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg text-[var(--color-ink2)] leading-relaxed">
              {"I hold a Master's in Computer and Information Science from the "}
              <span className="text-[var(--color-accent)]">University of South Alabama</span>
              {" and have worked across industries including fintech, healthcare, and retail."}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-lg text-[var(--color-ink2)] leading-relaxed">
              {"I'm passionate about writing clean, maintainable code and architecting systems that can handle millions of requests. I enjoy solving complex problems around concurrency, distributed messaging, and high-availability systems. When I'm not coding, I'm exploring new technologies and contributing to open-source projects."}
            </p>
          </Reveal>
        </div>
        
        {/* Technologies section moved here instead of RC card */}
        <Reveal delay={300}>
          <div className="relative group">
            <div className="relative rounded-xl overflow-hidden bg-[var(--color-bg2)] border border-[var(--color-rule)] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent" />
              
              <h3 className="relative font-mono text-sm text-[var(--color-accent)] mb-6">
                Technologies I work with:
              </h3>
              
              <div className="relative grid grid-cols-2 gap-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs font-mono text-[var(--color-ink3)] uppercase tracking-wider mb-3">
                      {group.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {group.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="flex items-center gap-2 text-sm text-[var(--color-ink2)] group/item cursor-default"
                        >
                          <span className="text-[var(--color-accent)] text-xs">{">"}</span>
                          <span className="transition-colors group-hover/item:text-[var(--color-accent)]">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[var(--color-accent)] transition-all group-hover:w-10 group-hover:h-10" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[var(--color-accent)] transition-all group-hover:w-10 group-hover:h-10" />
            </div>
            {/* Glow effect on hover */}
            <div className="absolute -inset-4 bg-[var(--color-accent)]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
