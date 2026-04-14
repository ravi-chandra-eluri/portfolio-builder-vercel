"use client"

import { Reveal } from "./reveal"

const projects = [
  {
    num: "01",
    title: "Payment Acceptance Solution",
    description: "Real-time payment processing system with WebSocket-based communication for PIN-pad devices. Implemented EMV compliance, SAF (Store and Forward) for offline transactions, and PCI-compliant security flows.",
    stack: ["Go", "GCP", "WebSocket", "Prometheus", "OpenTelemetry"],
  },
  {
    num: "02",
    title: "Kubernetes CRD Controllers",
    description: "Custom Resource Definitions and controllers built with client-go and Operator SDK to extend Kubernetes API for managing custom resources and automating platform operations.",
    stack: ["Go", "Kubernetes", "client-go", "Operator SDK"],
  },
  {
    num: "03",
    title: "Real-time Data Microservices",
    description: "Event-driven microservices using Kafka for message processing and WebSockets for real-time communication. Built with concurrent Goroutines and Channels for fault-tolerant transaction flows.",
    stack: ["Go", "Kafka", "WebSocket", "Docker", "AWS"],
  },
  {
    num: "04",
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solutions using Terraform and CloudFormation for provisioning AWS, GCP, and Azure resources. Implemented CI/CD pipelines with Jenkins and GitHub Actions.",
    stack: ["Terraform", "AWS", "GCP", "Azure", "Jenkins"],
  },
]

export function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 px-8 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-accent)] text-sm">03.</span>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]">Projects</h2>
          <div className="flex-1 h-px bg-[var(--color-rule)] max-w-xs" />
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
            <div className="group h-full bg-[var(--color-bg2)] p-8 rounded-xl border border-[var(--color-rule)] transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[var(--color-accent)] text-sm opacity-50">
                  {project.num}
                </span>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--color-ink2)] leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 rounded bg-[var(--color-accent)]/5 text-[var(--color-ink3)] border border-[var(--color-rule)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
