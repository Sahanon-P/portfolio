"use client";

import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { RichTextRenderer } from "@/components/rich-text-renderer";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ProjectSkeleton } from "@/lib/contentful-types";

type ProjectEntry = Entry<ProjectSkeleton>;

function f<T>(val: unknown): T {
  return val as T;
}

export default function Projects({ projects }: { projects: ProjectEntry[] }) {
  return (
    <section id="projects" style={{ backgroundColor: "var(--surface)" }}>
      <Separator style={{ backgroundColor: "var(--border-warm)" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <p className="label-tag mb-8">PROJECTS</p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ border: "1px solid var(--border-warm)" }}
        >
          {projects.map((project, i) => {
            const githubUrl = f<string | undefined>(project.fields.githubUrl);
            const liveUrl = f<string | undefined>(project.fields.liveUrl);
            const techStack = f<string | undefined>(project.fields.techStack);
            const techItems = techStack
              ? techStack.split(",").map((t) => t.trim()).filter(Boolean)
              : [];

            return (
              <motion.div
                key={project.sys.id}
                className="p-6 flex flex-col border"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border-warm)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p
                      className="text-[9px] tracking-widest uppercase mb-1"
                      style={{ color: "var(--accent-orange)" }}
                    >
                      PROJECT_{String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-sm font-semibold">
                      {f<string>(project.fields.title)}
                    </h3>
                  </div>

                  {/* Links */}
                  <div className="flex gap-1 ml-2 shrink-0">
                    {githubUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-7 w-7 hover:text-[#FF5500]"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={13} />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>GitHub</TooltipContent>
                      </Tooltip>
                    )}
                    {liveUrl && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-7 w-7 hover:text-[#FF5500]"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={13} />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Live demo</TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </div>

                <Separator className="mb-4" style={{ backgroundColor: "var(--border-warm)" }} />

                {/* Description (RichText) */}
                {project.fields.description && (
                  <div className="mb-6 flex-1">
                    <RichTextRenderer document={f<Document>(project.fields.description)} />
                  </div>
                )}

                {/* Tech stack */}
                {techItems.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {techItems.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-[9px] tracking-widest uppercase px-2 py-0.5 font-normal"
                        style={{
                          borderColor: "var(--border-warm)",
                          color: "var(--text-secondary)",
                          backgroundColor: "transparent",
                        }}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
