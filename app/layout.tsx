import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ping's Studio",
  description:
    "Full-Stack Developer based in Christchurch, NZ. 3+ years delivering secure SaaS platforms for banking and government sectors. Specialized in React, Node.js, NestJS, and Azure.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Christchurch",
    "New Zealand",
  ],
  authors: [{ name: "Sahanon Phisetpaksit (Ping)" }],
  openGraph: {
    title: "Ping's Studio — Software Engineer",
    description:
      "Full-Stack Developer based in Christchurch, NZ. 3+ years delivering secure SaaS platforms for banking and government sectors.",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ping's Studio — Software Engineer",
    description: "Full-Stack Developer based in Christchurch, NZ.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
