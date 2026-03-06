"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { personal } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "RESEARCH", href: "#research" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "var(--panel-dark)",
        borderColor: "#404040",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xs tracking-widest uppercase font-semibold"
          style={{ color: "#F0EDE8" }}
        >
          {personal.nickname}
          <span style={{ color: "var(--accent-orange)" }}>_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-widest uppercase transition-colors duration-150"
                style={{
                  color: isActive ? "var(--accent-orange)" : "#A0A0A0",
                  borderBottom: isActive ? "1px solid var(--accent-orange)" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-8 w-8 hover:bg-white/10"
                  style={{ color: "#A0A0A0" }}
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Toggle theme</TooltipContent>
            </Tooltip>
          )}

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 hover:bg-white/10"
            style={{ color: "#A0A0A0" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={14} /> : <Menu size={14} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--panel-dark)", borderColor: "#404040" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-[10px] tracking-widest uppercase border-b transition-colors"
                style={{
                  color: isActive ? "var(--accent-orange)" : "#A0A0A0",
                  borderColor: "#404040",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
