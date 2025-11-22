import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ViewModeProvider } from "@/context/ViewModeContext";
import StatsPanel from "@/components/ui/StatsPanel";
import CommandPalette from "@/components/ui/CommandPalette";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Yash Shah | AI Engineer & Full-Stack Developer",
    template: "%s | Yash Shah"
  },
  description: "Portfolio of Yash Shah, an AI Engineer and Full-Stack Developer specializing in building scalable AI agents, RAG systems, and modern web applications.",
  keywords: ["AI Engineer", "Full Stack Developer", "Machine Learning", "Next.js", "React", "Python", "LangChain", "RAG"],
  authors: [{ name: "Yash Shah" }],
  creator: "Yash Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashshah.dev",
    title: "Yash Shah | AI Engineer & Full-Stack Developer",
    description: "Building intelligent systems that ship. Explore my portfolio of AI agents and full-stack projects.",
    siteName: "Yash Shah Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or is a placeholder
        width: 1200,
        height: 630,
        alt: "Yash Shah Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Shah | AI Engineer & Full-Stack Developer",
    description: "Building intelligent systems that ship. Explore my portfolio of AI agents and full-stack projects.",
    images: ["/og-image.png"],
    creator: "@yashshah"
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased`}>
        <ViewModeProvider>
          <Navbar />
          {children}
          <StatsPanel />
          <CommandPalette />
          <Footer />
        </ViewModeProvider>
      </body>
    </html>
  );
}
