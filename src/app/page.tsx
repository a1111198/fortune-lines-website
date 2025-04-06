"use client"
import FirstTimeInIndia from "@/components/FirstTimeInIndia";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KnowAboutYour from "@/components/KnowAboutYour";
import YouDeserveToKnow from "@/components/YouDeserveToKnow";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div >

      <HeroSection/>
      <KnowAboutYour />
      <YouDeserveToKnow />
      <FirstTimeInIndia />
      <Footer />
      {/* <p className="font-figtree_black_italic_900 mt-[50px] w-full text-center">Hello</p> */}
   </div>
  );  
}
