"use client";

import { useState } from "react";
import useWeb3Forms from "@web3forms/react";
import { motion } from "framer-motion";
import { Mail, Github, MapPin, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { submit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY!,
    settings: {
      from_name: "Portfolio Contact",
      subject: "New message from your portfolio",
    },
    onSuccess: () => {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    },
    onError: (error) => {
      console.error(error);
      setIsLoading(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await submit(formData);
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--background)" }}>
      <Separator style={{ backgroundColor: "var(--border-warm)" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <p className="label-tag mb-8">CONTACT</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-tag mb-6">SEND MESSAGE</p>

            {sent ? (
              <div
                className="border p-6 text-sm"
                style={{ borderColor: "var(--accent-orange)", color: "var(--accent-orange)" }}
              >
                <p className="tracking-widest uppercase text-xs mb-2">TRANSMISSION SENT</p>
                <p style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p className="label-tag mb-1.5">NAME</p>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-sm h-10"
                    style={{
                      borderColor: "var(--border-warm)",
                      backgroundColor: "var(--surface)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
                <div>
                  <p className="label-tag mb-1.5">EMAIL</p>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-sm h-10"
                    style={{
                      borderColor: "var(--border-warm)",
                      backgroundColor: "var(--surface)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
                <div>
                  <p className="label-tag mb-1.5">MESSAGE</p>
                  <Textarea
                    required
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-sm resize-none"
                    style={{
                      borderColor: "var(--border-warm)",
                      backgroundColor: "var(--surface)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="text-xs tracking-widest uppercase h-10 px-6 w-full transition-colors"
                  style={{
                    backgroundColor: "var(--accent-orange)",
                    color: "#F0EDE8",
                    opacity: isLoading ? 0.7 : 1,
                  }}
                >
                  {isLoading ? (
                    "SENDING..."
                  ) : (
                    <>
                      <Send size={12} className="mr-2" />
                      SEND MESSAGE
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="label-tag mb-6">DIRECT CONTACT</p>

            <div className="space-y-6">
              <div className="flex gap-3 items-start">
                <Mail
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--accent-orange)" }}
                />
                <div>
                  <p className="label-tag mb-1">EMAIL</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm hover:underline"
                    style={{ color: "var(--foreground)" }}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Github
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--accent-orange)" }}
                />
                <div>
                  <p className="label-tag mb-1">GITHUB</p>
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "var(--foreground)" }}
                  >
                    github.com/{personal.github}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--accent-orange)" }}
                />
                <div>
                  <p className="label-tag mb-1">LOCATION</p>
                  <p className="text-sm">{personal.location}</p>
                </div>
              </div>
            </div>

            <Separator className="my-8" style={{ backgroundColor: "var(--border-warm)" }} />

            <p className="label-tag mb-3">RESPONSE TIME</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Typically within 24–48 hours. Open to full-time, contract, and remote roles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
