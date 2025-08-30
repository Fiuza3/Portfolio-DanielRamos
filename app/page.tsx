"use client"

import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import MusicSection from "@/components/music-section"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"

export default function Page() {
  return (
    <main className="relative">
      <CursorGlow />

      <Header />

      <div className="animate-fade-in-up">
        <div id="about" className="pt-16">
          <AboutSection />
        </div>

        <div id="music">
          <MusicSection />
        </div>

        <div id="contact">
          <Footer />
        </div>
      </div>
    </main>
  )
}
