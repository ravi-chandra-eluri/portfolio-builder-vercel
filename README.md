# Ravi Chandra Eluri — Personal Portfolio

Personal portfolio website for Ravi Chandra Eluri, Senior Golang Developer. Built with Next.js and deployed on Vercel.

**Live site:** [ravichandra-eluri.com](https://ravichandra-eluri.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **Analytics:** Vercel Analytics
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Project Structure

```
├── app/
│   ├── page.tsx          # Root page — composes all sections
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── globals.css       # Global styles and CSS variables
│   └── global-error.tsx  # Global error boundary
├── components/
│   ├── nav.tsx           # Sticky navigation bar
│   ├── hero.tsx          # Hero section with terminal code preview
│   ├── about.tsx         # About section
│   ├── experience.tsx    # Work experience timeline
│   ├── projects.tsx      # Featured projects
│   ├── writing.tsx       # Blog / writing section
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer
│   ├── reveal.tsx        # Scroll-triggered reveal animation wrapper
│   └── ui/               # Radix UI / shadcn component library
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets (icons, images)
└── styles/               # Additional stylesheets
```
