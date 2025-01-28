"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/server/contact";
import { AtSign, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useFormState } from "react-dom";

const socialLinks = [
  {
    name: "Email",
    value: "ping@raikusy.dev",
    icon: Mail,
    href: "mailto:ping@raikusy.dev",
  },
  {
    name: "GitHub",
    value: "github.com/raikusy",
    icon: Github,
    href: "https://github.com/raikusy",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/raikusy",
    icon: Linkedin,
    href: "https://linkedin.com/in/raikusy",
  },
];

export default function Contact() {
  const [formState, formAction] = useFormState(submitContactForm, {
    message: "",
    errors: {},
  });

  return (
    <div className="max-w-4xl">
      {/* Contact Form Section */}
      <div className="space-y-2">
        <span className="text-blue-400">const </span>
        <span className="text-purple-400">ContactForm </span>
        <span className="text-muted-foreground">= </span>
        <span className="text-blue-400">() =&gt; </span>
        <span className="text-muted-foreground">{"{"}</span>
      </div>

      <div className="pl-4 space-y-6">
        <form className="space-y-4" action={formAction}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                <AtSign className="inline-block w-4 h-4 mr-2" />
                Name
              </label>
              <input
                required
                name="name"
                type="text"
                className={cn(
                  "w-full px-4 py-2 rounded-md bg-background",
                  "border border-border focus:border-primary",
                  "outline-none transition-colors"
                )}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">
                <Mail className="inline-block w-4 h-4 mr-2" />
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                className={cn(
                  "w-full px-4 py-2 rounded-md bg-background",
                  "border border-border focus:border-primary",
                  "outline-none transition-colors"
                )}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">
              <MessageSquare className="inline-block w-4 h-4 mr-2" />
              Message
            </label>
            <textarea
              required
              name="message"
              className={cn(
                "w-full px-4 py-2 rounded-md bg-background",
                "border border-border focus:border-primary",
                "outline-none transition-colors",
                "min-h-[120px] resize-y"
              )}
              placeholder="Your message here..."
            />
          </div>

          {formState.message && (
            <div className="text-sm text-muted-foreground">
              {formState.message}
            </div>
          )}

          <Button
            type="submit"
            className={cn(
              "w-full bg-primary text-primary-foreground",
              "hover:bg-primary/90"
            )}
          >
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="space-y-4 pt-4">
          <div className="text-sm text-muted-foreground">
            You can also reach me at:
          </div>
          <div className="space-y-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 text-sm",
                    "p-2 rounded-md",
                    "hover:bg-muted transition-colors"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-muted-foreground">{link.name}:</span>
                  <span>{link.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-muted-foreground">{"}"}</div>
    </div>
  );
}
