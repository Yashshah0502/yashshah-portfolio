"use client";

import { useEffect } from "react";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroOverlay from "@/components/ui/IntroOverlay";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Playground from "@/components/sections/Playground";
import BuildWithMe from "@/components/sections/BuildWithMe";
import Contact from "@/components/sections/Contact";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
