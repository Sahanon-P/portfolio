"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories, type Skill } from "@/data/portfolio";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiIonic,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDart,
  SiFlutter,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiGit,
  SiJest,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import type { IconType } from "react-icons";

const SKILL_ICONS: Record<string, IconType> = {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiIonic,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDart,
  SiFlutter,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiGit,
  SiJest,
  VscAzure,
};

function SkillBadge({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.iconKey ? SKILL_ICONS[skill.iconKey] : null;

  return (
    <div
      className="flex items-center gap-2 px-3 py-2 border cursor-default select-none"
      style={{
        borderColor: hovered ? (skill.brandColor ?? "var(--accent-orange)") : "var(--border-warm)",
        backgroundColor: hovered ? "var(--surface)" : "transparent",
        color: hovered ? (skill.brandColor ?? "var(--foreground)") : "var(--foreground)",
        transition: "border-color 150ms ease, background-color 150ms ease, color 150ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {Icon && (
        <Icon
          size={13}
          style={{
            color: hovered ? (skill.brandColor ?? "var(--text-secondary)") : "var(--text-secondary)",
            transition: "color 150ms ease",
            flexShrink: 0,
          }}
        />
      )}
      <span className="text-[10px] tracking-widest uppercase font-medium" style={{ lineHeight: 1 }}>
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "var(--background)" }}>
      <Separator style={{ backgroundColor: "var(--border-warm)" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="label-tag mb-8">SKILLS</p>

          <Tabs defaultValue={skillCategories[0].label} className="w-full">
            <TabsList
              className="h-auto p-0 mb-8 gap-0 bg-transparent border-b w-full justify-start overflow-x-auto"
              style={{ borderColor: "var(--border-warm)" }}
            >
              {skillCategories.map((cat) => (
                <TabsTrigger
                  key={cat.label}
                  value={cat.label}
                  className="rounded-none text-[10px] tracking-widest uppercase px-4 py-3 border-b-2 border-transparent data-[state=active]:border-[#FF5500] data-[state=active]:text-[#FF5500] data-[state=active]:bg-transparent data-[state=active]:shadow-none bg-transparent shadow-none whitespace-nowrap"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.label} value={cat.label} className="mt-0">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
