"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import { useCallback, useState } from "react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <PageIntro onComplete={handleIntroComplete} />
      <div className="max-w-7xl w-full">
        <div id="top" className="absolute top-0 left-0 h-px w-px" />
        <FloatingNav navItems={navItems} />
        <Hero startTyping={introDone} />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
