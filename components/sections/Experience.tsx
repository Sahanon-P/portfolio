"use client";

import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ExperienceSkeleton } from "@/lib/contentful-types";
import { RichTextRenderer } from "@/components/rich-text-renderer";

type ExperienceEntry = Entry<ExperienceSkeleton>;

// Contentful v10 types fields as `T | { [locale]: T }`.
// Since we use a single locale, cast to the concrete type at the call site.
function f<T>(val: unknown): T {
  return val as T;
}

export default function Experience({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <section id="experience" style={{ backgroundColor: "var(--surface)" }}>
      <Separator style={{ backgroundColor: "var(--border-warm)" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <p className="label-tag mb-12">EXPERIENCE</p>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.sys.id}
              className="relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 mt-1 shrink-0"
                    style={{ backgroundColor: "var(--accent-orange)" }}
                  />
                  {i < experience.length - 1 && (
                    <div
                      className="flex-1 w-px mt-2"
                      style={{ backgroundColor: "var(--border-warm)", minHeight: "40px" }}
                    />
                  )}
                </div>

                <div className="pb-12 flex-1">
                  {/* Date */}
                  <p
                    className="text-[10px] tracking-widest uppercase font-medium mb-2"
                    style={{ color: "var(--accent-orange)" }}
                  >
                    {f<string>(exp.fields.startDate)}
                    {f<string>(exp.fields.endDate) ? ` — ${f<string>(exp.fields.endDate)}` : " — Present"}
                  </p>

                  {/* Role + company */}
                  <h3 className="text-base font-semibold mb-0.5">{f<string>(exp.fields.role)}</h3>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {f<string>(exp.fields.company)}
                  </p>

                  <Separator className="my-4" style={{ backgroundColor: "var(--border-warm)" }} />

                  {/* Responsibilities (RichText) */}
                  {exp.fields.responsibilities && (
                    <RichTextRenderer document={f<Document>(exp.fields.responsibilities)} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
