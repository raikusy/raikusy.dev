import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "cuid2gen",
    description:
      "A fast and secure command-line tool for generating CUID2 identifiers - Collision-resistant Unique IDs.",
    image: "/projects/cuid2gen.webp",
    technologies: ["Rust", "TypeScript"],
    links: {
      github: "https://github.com/raikusy/cuid2gen",
      live: "https://crates.io/crates/cuid2gen",
    },
  },
  {
    title: "ROK Mail Art",
    description:
      "Create beautiful Rise of Kingdoms & Call of Dragons mail for event guides, KVK strategies, alliance and kingdom updates, MGE announcements with ease. Create stylish Alliance Descriptions. Browse hundreds of public mail templates created by other players.",
    image: "/projects/rok-mail-art.webp",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "React Server Components",
      "Vercel",
    ],
    links: {
      github: "https://github.com/raikusy/rok-lost-toolkit",
      live: "https://www.rok-mail.art/",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js 14, showcasing modern web development practices and beautiful UI/UX.",
    image: "/projects/portfolio.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Server Components",
      "Cloudflare Pages",
    ],
    links: {
      github: "https://github.com/raikusy/raikusy.dev",
      live: "https://raikusy.dev",
    },
  },
];

export default function Projects() {
  return (
    <div className="mb-10">
      {/* Projects Section */}
      <div className="space-y-2">
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">projects </span>
        <span className="text-muted-foreground">= [</span>
      </div>

      <div className="pl-4 space-y-4 max-w-4xl my-4">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              "rounded-lg border border-transparent overflow-hidden",
              "bg-muted/50 hover:border-primary hover:bg-muted",
              "transition-all duration-300"
            )}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-48 w-full md:h-full">
                <Image
                  alt={project.title}
                  className="object-cover"
                  fill
                  src={project.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2",
                      "text-muted-foreground hover:text-primary",
                      "transition-colors"
                    )}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </Link>
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2",
                      "text-muted-foreground hover:text-primary",
                      "transition-colors"
                    )}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-muted-foreground">];</div>
    </div>
  );
}
