import { LineNumbers } from "@/components/organisms/line-numbers";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 - Present",
    description: [
      "Developed and maintained web applications using Next.js, React, and Node.js",
      "Implemented responsive designs and modern UI components with Tailwind CSS",
      "Worked with various databases including PostgreSQL and MongoDB",
      "Deployed applications on AWS and Vercel",
    ],
  },
  {
    company: "REDQ Inc",
    role: "Senior Software Engineer",
    period: "2023 - 2024",
    description: [
      "Leading a team in building large-scale enterprise applications using TypeScript, NextJS",
      "Achieved project milestones and delivered features with responsibility",
    ],
  },
  {
    company: "Strativ AB",
    role: "Software Engineer",
    period: "2022 - 2022",
    description: [
      "Worked on multiple large client projects in frontend, backend, Android & iOS (React Native)",
      "Actively participated in overcoming many challenges within those projects",
    ],
  },
  {
    company: "Minicabit",
    role: "Software Engineer",
    period: "2021 - 2021",
    description: [
      "Developed a dynamic automated integration system to onboard and integrate multiple 3rd-party taxi rental partners",
      "Refactored legacy services and upgraded the manual system to adopt modern tools and technologies",
      "Worked with Docker, Kubernetes, and Terraform",
    ],
  },
  {
    company: "Riseuplab",
    role: "Software Engineer",
    period: "2020 - 2021",
    description: [
      "Developed a full-stack multi-tenant SaaS app (music reviewing platform) called Overchr",
      "Used TypeScript, React, Redux, React Native, Node.js, Nest.js, REST, GraphQL, PostgreSQL",
    ],
  },
  {
    company: "Shobhobe/Deliveryhobe",
    role: "Software Engineer",
    period: "2019 - 2020",
    description: [
      "Maintained and migrated their old system during a major pivot and growth phase",
      "Developed new systems as part of a major pivot and growth phase",
    ],
  },
  {
    company: "Happihub",
    role: "Co-Founder",
    period: "2018 - 2022",
    description: [
      "Developed multiple web and mobile dashboard applications",
      "Used TypeScript, React, Redux, React Native, Node.js, REST",
    ],
  },
];

const education = [
  {
    degree: "Diploma in Computer Science and Technology",
    school: "Daffodil Polytechnic Institute",
    period: "2015 - 2019",
    achievements: [
      "Specialized in Computer Science and Technology",
      "Graduated with First Class Diploma",
      "Led student programming club",
    ],
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Introduction Section */}
      <div className="space-y-2">
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">introduction </span>
        <span className="text-muted-foreground">= </span>
        <span className="text-orange-400">
          &quot;Passionate programmer and Full-Stack Developer with 6+ years of
          experience. Achieved a track record of success in developing scalable
          web applications. Experienced in maintaining and refactoring legacy
          systems, as well as developing new systems for making initial launch
          and growth.&quot;
        </span>
        <span className="text-muted-foreground">;</span>
      </div>

      {/* Years of Experience */}
      <div className="space-y-2">
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">yearsOfExperience </span>
        <span className="text-muted-foreground">= </span>
        <span className="text-orange-400">6+</span>
        <span className="text-muted-foreground">;</span>
      </div>

      {/* Experience Section */}
      <div className="space-y-4">
        <div>
          <span className="text-blue-400">const </span>
          <span className="text-purple-400">experience </span>
          <span className="text-muted-foreground">= [</span>
        </div>

        <div className="grid gap-4 pl-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "rounded-md border border-transparent p-4",
                "bg-muted/50 hover:border-primary hover:bg-muted"
              )}
            >
              <h3 className="text-lg font-semibold mb-2">{exp.company}</h3>
              <div className="text-sm text-muted-foreground mb-2">
                {exp.role} | {exp.period}
              </div>
              <ul className="list-disc list-inside space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground">];</div>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <div>
          <span className="text-blue-400">const </span>
          <span className="text-purple-400">education </span>
          <span className="text-muted-foreground">= [</span>
        </div>

        <div className="pl-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className={cn(
                "rounded-md border border-transparent p-4",
                "bg-muted/50 hover:border-primary hover:bg-muted"
              )}
            >
              <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
              <div className="text-sm text-muted-foreground mb-2">
                {edu.school} | {edu.period}
              </div>
              <ul className="list-disc list-inside space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground">];</div>
      </div>
    </div>
  );
}
