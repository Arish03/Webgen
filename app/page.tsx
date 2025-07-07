"use client"; // Ensure this page runs only on the client

import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import Testimonials from "@/components/landing/testimonials";
import Navbar from "@/components/landing/navibar"


export default function Home() {
  return (
    <main className="relative bg-[#020817]">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      {/* Landing Page Sections */}
      <Navbar/>
      <Hero />
      <Features />
      <Testimonials />
      
      <CTA />
      <Footer />
    </main>
  );
}
