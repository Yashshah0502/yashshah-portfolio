"use client";

import { useEffect } from "react";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import IntroOverlay from "@/components/ui/IntroOverlay";
import Hero from "@/components/sections/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";

const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Playground = dynamic(() => import("@/components/sections/Playground"), { ssr: false }); // Client-side only for heavy interactive
const BuildWithMe = dynamic(() => import("@/components/sections/BuildWithMe"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  useEffect(() => {
    // Force scroll to top on load
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <IntroOverlay />
      
      <div className="relative z-10">
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Playground /></ScrollReveal>
        <ScrollReveal><BuildWithMe /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </div>
    </main>
  );
}
