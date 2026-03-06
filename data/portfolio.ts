export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  detail?: string;
}

export interface Skill {
  name: string;
  iconKey?: string; // matches key in SKILL_ICONS map in Skills component
  brandColor?: string; // hex brand color for hover
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const personal = {
  name: "Sahanon Phisetpaksit",
  nickname: "Ping",
  title: "Software Engineer / Full-Stack Developer",
  email: "sahanon.dev@gmail.com",
  github: "Sahanon-P",
  githubUrl: "https://github.com/Sahanon-P",
  linkedIn: "https://linkedin.com/in/sahanon-p",
  location: "Christchurch, New Zealand",
  visa: "3-year Post-Study Work Visa (open work rights)",
  summary:
    "Software Engineer with 3+ years of experience delivering secure, production-grade SaaS platforms for banking and government sectors. Specialized in full-stack development (React, Node.js, NestJS) with strong DevOps capability (Azure, Docker, CI/CD). Master's-qualified from University of Otago.",
};

export const education: Education[] = [
  {
    degree: "Master of Applied Data Science",
    institution: "University of Otago",
    year: "2023",
    detail: "Dissertation: Adversarial Machine Learning in Financial Fraud Detection",
  },
  {
    degree: "Bachelor of Science — Computer Science",
    institution: "University of Otago",
    year: "2021",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "JavaScript", iconKey: "SiJavascript", brandColor: "#F7DF1E" },
      { name: "TypeScript", iconKey: "SiTypescript", brandColor: "#3178C6" },
      { name: "React.js", iconKey: "SiReact", brandColor: "#61DAFB" },
      { name: "Next.js", iconKey: "SiNextdotjs", brandColor: "#000000" },
      { name: "Ionic", iconKey: "SiIonic", brandColor: "#3880FF" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", iconKey: "SiNodedotjs", brandColor: "#339933" },
      { name: "NestJS", iconKey: "SiNestjs", brandColor: "#E0234E" },
      { name: "Python", iconKey: "SiPython", brandColor: "#3776AB" },
      { name: "FastAPI", iconKey: "SiFastapi", brandColor: "#009688" },
      { name: "Django", iconKey: "SiDjango", brandColor: "#092E20" },
      { name: "PostgreSQL", iconKey: "SiPostgresql", brandColor: "#4169E1" },
      { name: "MongoDB", iconKey: "SiMongodb", brandColor: "#47A248" },
      { name: "Prisma", iconKey: "SiPrisma", brandColor: "#2D3748" },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { name: "Dart", iconKey: "SiDart", brandColor: "#0175C2" },
      { name: "Flutter", iconKey: "SiFlutter", brandColor: "#02569B" },
    ],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      { name: "Docker", iconKey: "SiDocker", brandColor: "#2496ED" },
      { name: "Azure", iconKey: "VscAzure", brandColor: "#0078D4" },
      { name: "GitHub Actions", iconKey: "SiGithubactions", brandColor: "#2088FF" },
      { name: "Nginx", iconKey: "SiNginx", brandColor: "#009639" },
      { name: "Git", iconKey: "SiGit", brandColor: "#F05032" },
    ],
  },
  {
    label: "Testing",
    skills: [
      { name: "Jest", iconKey: "SiJest", brandColor: "#C21325" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Full-Stack Developer",
    period: "2022 — 2024",
    location: "Bangkok, Thailand",
    bullets: [
      "Delivered secure SaaS platforms for major Thai commercial banks, handling millions of transactions daily.",
      "Architected and implemented RESTful APIs with NestJS and PostgreSQL, meeting PCI-DSS compliance requirements.",
      "Built responsive React dashboards with real-time data visualization for government financial monitoring systems.",
      "Established CI/CD pipelines on Azure DevOps, reducing deployment time by 60%.",
      "Led code reviews and mentored 3 junior developers on TypeScript best practices.",
    ],
    tech: ["React", "NestJS", "TypeScript", "PostgreSQL", "Azure", "Docker"],
  },
  {
    company: "True Corporation",
    role: "Software Engineer Intern",
    period: "2021 — 2022",
    location: "Bangkok, Thailand",
    bullets: [
      "Developed internal tooling for network performance monitoring using Node.js and React.",
      "Integrated third-party APIs for SMS and push notification delivery systems.",
      "Participated in agile sprints, contributing to mobile application features used by 5M+ users.",
    ],
    tech: ["Node.js", "React", "MongoDB", "Docker"],
  },
];

export const research = {
  title:
    "Adversarial Robustness in Machine Learning-Based Financial Fraud Detection Systems",
  institution: "University of Otago — Master's Dissertation",
  year: "2023",
  findings: [
    "Evaluated vulnerability of supervised ML models (XGBoost, Random Forest, Neural Networks) to adversarial evasion attacks in real-world fraud datasets.",
    "Proposed adversarial training pipeline that improved model robustness by 34% under FGSM and PGD attack scenarios.",
    "Demonstrated trade-offs between model accuracy and adversarial robustness in high-stakes financial environments.",
    "Published findings contributed to internal security guidelines for a major New Zealand financial institution.",
  ],
};

export const projects: Project[] = [
  {
    title: "BankGuard — Fraud Detection API",
    description:
      "Production-grade REST API for real-time transaction fraud scoring. Integrates ML inference, rule-based filters, and audit logging with sub-100ms response time.",
    tech: ["NestJS", "PostgreSQL", "Redis", "Docker", "Python", "Scikit-learn"],
    github: "https://github.com/Sahanon-P/bankguard-api",
  },
  {
    title: "DataFlow Dashboard",
    description:
      "Real-time analytics dashboard for financial KPI monitoring. Features live charting, role-based access control, and export to PDF/CSV.",
    tech: ["React", "TypeScript", "Recharts", "NestJS", "Azure"],
    github: "https://github.com/Sahanon-P/dataflow-dashboard",
  },
  {
    title: "Adversarial ML Benchmark",
    description:
      "Research toolkit for benchmarking adversarial attack resilience across classification models. Supports FGSM, PGD, and C&W attacks with structured result reporting.",
    tech: ["Python", "PyTorch", "Scikit-learn", "Jupyter", "Pandas"],
    github: "https://github.com/Sahanon-P/adv-ml-benchmark",
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Built with Next.js App Router, Tailwind CSS, shadcn/ui, and Framer Motion. Themed after the Teenage Engineering K.O. II sampler.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    github: "https://github.com/Sahanon-P/portfolio",
  },
];
