"use client";

import { Entry, Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ResearchSkeleton } from "@/lib/contentful-types";
import { RichTextRenderer } from "@/components/rich-text-renderer";

type ResearchEntry = Entry<ResearchSkeleton>;

function f<T>(val: unknown): T {
  return val as T;
}

export default function Research({ research }: { research: ResearchEntry[] }) {
  return (
    <section id="research" style={{ backgroundColor: "var(--background)" }}>
      <Separator style={{ backgroundColor: "var(--border-warm)" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <p className="label-tag mb-8">RESEARCH</p>

        <div className="space-y-6">
          {research.map((item, i) => (
            <motion.div
              key={item.sys.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="border p-8 md:p-10 bg-[#E8E4DE] dark:bg-[#2A2A2A] border-[#C8C4BE] dark:border-[#404040]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase mb-3 text-[#FF5500]">
                      {f<string>(item.fields.type)} · {f<string>(item.fields.year)}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold leading-snug max-w-2xl text-[#1A1A1A] dark:text-[#F0EDE8]">
                      {f<string>(item.fields.title)}
                    </h3>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-2">
                    <p className="text-[10px] tracking-widest uppercase text-right text-[#5A5A5A] dark:text-[#6B6B6B]">
                      {f<string>(item.fields.institution)}
                    </p>
                    {item.fields.pdfUrl && (() => {
                      const asset = f<Asset>(item.fields.pdfUrl);
                      const url = f<{ url: string }>(asset.fields.file)?.url;
                      return url ? (
                        <a
                          href={url.startsWith("//") ? `https:${url}` : url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] tracking-widest uppercase text-[#FF5500] transition-opacity hover:opacity-70"
                        >
                          VIEW PDF →
                        </a>
                      ) : null;
                    })()}
                  </div>
                </div>

                <Separator className="mb-6 bg-[#C8C4BE] dark:bg-[#404040]" />

                <p className="text-[10px] tracking-widest uppercase mb-4 text-[#FF5500]">
                  KEY FINDINGS
                </p>

                {item.fields.keyFindings && (
                  <RichTextRenderer document={f<Document>(item.fields.keyFindings)} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
