import { Separator } from "@/components/ui/separator";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--panel-dark)" }}>
      <Separator style={{ backgroundColor: "#404040" }} />
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] tracking-widest uppercase" style={{ color: "#6B6B6B" }}>
          {personal.nickname}
          <span style={{ color: "var(--accent-orange)" }}>_</span>
          PORTFOLIO · {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase transition-colors hover:text-[#F0EDE8]"
            style={{ color: "#6B6B6B" }}
          >
            GITHUB
          </a>
          <a
            href={personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest uppercase transition-colors hover:text-[#F0EDE8]"
            style={{ color: "#6B6B6B" }}
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-[10px] tracking-widest uppercase transition-colors hover:text-[#F0EDE8]"
            style={{ color: "#6B6B6B" }}
          >
            EMAIL
          </a>
        </div>
        <p className="text-[10px]" style={{ color: "#444" }}>
          Built with Next.js · Tailwind · shadcn/ui
        </p>
      </div>
    </footer>
  );
}
