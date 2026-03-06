"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { personal } from "@/data/portfolio";
import { TypingAnimation } from "../ui/typing-animation";
import { BlurFade } from "../ui/blur-fade";

const TRANSFORM_DEFAULT = "translateY(-50%) perspective(1000px) rotateY(-8deg)";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const imgSrc = mounted && resolvedTheme === "dark" ? "/koii-dark.jpg" : "/koii.jpg";

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background image — anchored to the right */}
      <div className=" absolute inset-0 z-0" aria-hidden>
        <Image
          src={imgSrc}
          alt="hero-image"
          className="hidden lg:block absolute w-auto object-contain"
          width={900}
          height={900}
          priority
          style={{
            height: "80%",
            right: "-6%",
            top: "50%",
            transform: TRANSFORM_DEFAULT,
            transformOrigin: "right center",
            opacity: 0.9,
            transition: "transform 0.5s ease",
            willChange: "transform",
          }}
        />

        {/* Gradient overlay — left is opaque, fades to transparent right */}
        {/* <div
          className="absolute inset-0 bg-linear-to-r from-[#F0EDE8] via-[#F0EDE8]/60 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/90 dark:to-transparent"
          aria-hidden
        /> */}
      </div>

      {/* Text content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-2xl pt-12">
        {/* Panel label */}
        <TypingAnimation
          duration={40}
          className="text-xs tracking-widest font-mono text-muted-foreground"
          startOnView={false} // starts immediately on page load
        >
          SOFTWARE ENGINEER / FULL-STACK DEVELOPER
        </TypingAnimation>

        {/* Name */}
        <BlurFade
          className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-2 leading-none"
          style={{ color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {personal.name}
        </BlurFade>

        {/* Nickname */}
        <BlurFade
          className="text-lg md:text-2xl mb-8"
          style={{ color: "var(--accent-orange)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          ({personal.nickname})
        </BlurFade>

        <Separator
          style={{ backgroundColor: "var(--border-warm)" }}
          className="mb-8"
        />

        {/* Summary */}
        <BlurFade
          className="text-sm md:text-base max-w-xl mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {personal.summary}
        </BlurFade>

        {/* Location */}
        <BlurFade
          className="label-tag mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          LOC: {personal.location.toUpperCase()}
        </BlurFade>

        {/* CTA buttons */}
        <BlurFade
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Button
            asChild
            className="text-xs tracking-widest uppercase h-10 px-6 transition-colors"
            style={{
              backgroundColor: "var(--accent-orange)",
              color: "#F0EDE8",
            }}
          >
            <a href="#contact">CONTACT</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="text-xs tracking-widest uppercase h-10 px-6 transition-colors"
            style={{
              borderColor: "var(--panel-dark)",
              color: "var(--foreground)",
              backgroundColor: "transparent",
            }}
          >
            <a href="#projects">PROJECTS</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="text-xs tracking-widest uppercase h-10 px-6 transition-colors"
            style={{
              borderColor: "var(--border-warm)",
              color: "var(--text-secondary)",
              backgroundColor: "transparent",
            }}
          >
            <a href="/resume.pdf" download>
              <Download size={12} className="mr-2" />
              RESUME
            </a>
          </Button>
        </BlurFade>

        {/* Icon links */}
        <BlurFade
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 border transition-colors"
                style={{
                  borderColor: "var(--border-warm)",
                  color: "var(--text-secondary)",
                }}
              >
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 border transition-colors"
                style={{
                  borderColor: "var(--border-warm)",
                  color: "var(--text-secondary)",
                }}
              >
                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 border transition-colors"
                style={{
                  borderColor: "var(--border-warm)",
                  color: "var(--text-secondary)",
                }}
              >
                <a href={`mailto:${personal.email}`}>
                  <Mail size={16} />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Email</TooltipContent>
          </Tooltip>
        </BlurFade>
      </div>
    </section>
  );
}
