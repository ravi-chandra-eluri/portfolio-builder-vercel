"use client"

import { useState } from "react"
import { Reveal } from "./reveal"

const experiences = [
  {
    company: "Genuine Parts Company",
    shortName: "GPC",
    title: "Senior Software Engineer",
    period: "May 2024 - Present",
    location: "Atlanta, GA",
    description: [
      "Designing Golang microservices for Payment Acceptance Solution (PAS) on GCP, supporting real-time transactions with WebSocket communication",
      "Implementing EMV compliance and distributed tracing with Prometheus and OpenTelemetry",
      "Building CI/CD pipelines with GitHub Actions for automated testing and deployment",
      "Developing SAF (Store and Forward) for offline transaction handling",
    ],
    tags: ["Go", "GCP", "WebSocket", "Prometheus", "OpenTelemetry"],
  },
  {
    company: "Capital One",
    shortName: "Cap1",
    title: "Sr. Golang Developer",
    period: "Sep 2023 - Apr 2024",
    location: "McLean, VA",
    description: [
      "Developed RESTful APIs and middleware services using Gin, Revel, and Beego frameworks",
      "Built gRPC services with Protocol Buffers for inter-service communication",
      "Implemented OAuth2 authentication and authorization flows",
      "Containerized services with Docker and orchestrated with Kubernetes on AWS",
    ],
    tags: ["Go", "gRPC", "React", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "Cigna",
    shortName: "Cigna",
    title: "Sr. Golang Developer",
    period: "Jan 2022 - Aug 2023",
    location: "Dallas, TX",
    description: [
      "Built microservices consuming Kafka messages for healthcare data processing",
      "Implemented real-time communication with WebSockets for instant notifications",
      "Developed serverless solutions with AWS Lambda and MongoDB",
      "Utilized client-go for Kubernetes CRD management and automation",
    ],
    tags: ["Go", "Kafka", "WebSocket", "AWS Lambda", "MongoDB"],
  },
  {
    company: "Capital One",
    shortName: "Cap1",
    title: "Sr. Golang Developer",
    period: "Jan 2021 - Dec 2021",
    location: "McLean, VA",
    description: [
      "Designed configurable REST APIs using Go frameworks for financial services",
      "Created Terraform templates for cloud infrastructure provisioning",
      "Managed AWS services including EC2, Fargate, ECS, and DynamoDB",
    ],
    tags: ["Go", "Terraform", "AWS", "REST APIs", "Docker"],
  },
  {
    company: "First Republic Bank",
    shortName: "FRB",
    title: "Sr. Golang Developer",
    period: "Oct 2019 - Dec 2020",
    location: "San Francisco, CA",
    description: [
      "Developed microservices for high-volume PostgreSQL data processing",
      "Designed gRPC APIs for efficient inter-service communication",
      "Implemented CI/CD with Jenkins and deployed on Azure and GCP",
    ],
    tags: ["Go", "PostgreSQL", "gRPC", "Azure", "GCP"],
  },
  {
    company: "Molina Healthcare",
    shortName: "Molina",
    title: "Golang Developer",
    period: "Oct 2018 - Sep 2019",
    location: "Long Beach, CA",
    description: [
      "Built RESTful APIs with Golang backend and ReactJS frontend",
      "Implemented WebSocket integration for real-time data updates",
      "Managed AWS infrastructure including Route53, EC2, and ECS",
    ],
    tags: ["Go", "React", "WebSocket", "AWS", "Terraform"],
  },
]

export function Experience() {
  const [hoveredTab, setHoveredTab] = useState(0)

  return (
    <section 
      id="experience" 
      className="py-20 px-8 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[var(--color-accent)] text-sm">02.</span>
          <h2 className="text-3xl font-bold text-[var(--color-ink)]">Where I&apos;ve Worked</h2>
          <div className="flex-1 h-px bg-[var(--color-rule)] max-w-xs" />
        </div>
      </Reveal>
      
      <Reveal delay={100}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab buttons - hover to switch */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:min-w-[180px] scrollbar-hide">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onMouseEnter={() => setHoveredTab(index)}
                className={`relative px-5 py-4 text-left text-sm font-mono whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 ${
                  hoveredTab === index
                    ? "text-[var(--color-accent)] border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                    : "text-[var(--color-ink2)] border-[var(--color-rule)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
                }`}
              >
                {exp.shortName}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-h-[350px]">
            <div key={hoveredTab} className="animate-fade-in">
              <h3 className="text-xl text-[var(--color-ink)] mb-1">
                {experiences[hoveredTab].title}
                <span className="text-[var(--color-accent)]"> @ {experiences[hoveredTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-[var(--color-ink3)] mb-5">
                {experiences[hoveredTab].period} | {experiences[hoveredTab].location}
              </p>
              <ul className="space-y-3">
                {experiences[hoveredTab].description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[var(--color-ink2)]">
                    <span className="text-[var(--color-accent)] mt-1.5 flex-shrink-0">{">"}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {experiences[hoveredTab].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
