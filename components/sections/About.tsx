"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { personal } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "var(--surface)" }}>
      <Separator style={{ backgroundColor: "var(--border-warm)" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        {/* Section label */}
        <p className="label-tag mb-8">ABOUT</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="label-tag mb-4">PROFILE</p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a full-stack engineer with 3+ years of production
              experience building secure SaaS platforms for banking and
              government sectors. I specialize in the full delivery cycle,
              taking ideas from requirements through to shipped product, and I
              thrive in small teams where ownership and craft both matter.
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I care deeply about design. Not just how things look, but how they
              work, how they&apos;re maintained, and how they feel to build.
              Being a self-sufficient engineer means I can contribute
              meaningfully at every layer of a product.
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Outside of work, I write on Dev.to, go running to clear my head,
              and regularly bounce ideas with friends about potential business
              projects. I&apos;m drawn to the intersection of engineering and
              entrepreneurship.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              When I&apos;m not at a keyboard, I&apos;m usually reading, playing
              board games, or running a D&D campaign with friends. The Phoenix
              Project and The Unicorn Project are among my favourites, which
              probably says everything about how I think about software teams
              and delivery.
            </p>
          </motion.div>

          {/* Profile picture */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-sm overflow-hidden">
              <Image
                src="/profile.png"
                alt={personal.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover block dark:hidden"
                priority
              />
              <Image
                src="/profile-dark.png"
                alt={personal.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover hidden dark:block"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
