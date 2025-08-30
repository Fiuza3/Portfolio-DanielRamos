"use client"

import { useEffect, useState } from "react"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [showLighting, setShowLighting] = useState(false)
  const name = "DANIEL RAMOS"
  const letters = name.split("")

  useEffect(() => {
    // Start lighting effect immediately
    setShowLighting(true)

    // Start the exit animation after all letters have appeared
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Complete the splash screen after fade out
      setTimeout(onComplete, 800)
    }, 4000) // 4 seconds total display time

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-800 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-full bg-gradient-to-b from-primary/15 via-primary/5 to-transparent transition-opacity duration-2000 ${
            showLighting ? "opacity-100" : "opacity-0"
          }`}
          style={{
            clipPath: "polygon(35% 0%, 65% 0%, 80% 100%, 20% 100%)",
          }}
        />

        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-full bg-gradient-to-b from-white/8 via-primary/8 to-transparent transition-opacity duration-2000 delay-500 ${
            showLighting ? "opacity-100" : "opacity-0"
          }`}
          style={{
            clipPath: "polygon(40% 0%, 60% 0%, 75% 100%, 25% 100%)",
          }}
        />

        {/* Floating light particles */}
        <div
          className={`absolute inset-0 transition-opacity duration-2000 delay-1000 ${showLighting ? "opacity-100" : "opacity-0"}`}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-60"
              style={{
                left: `${20 + i * 6}%`,
                top: `${10 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-gradient-radial from-primary/8 via-primary/3 to-transparent rounded-full transition-opacity duration-2000 delay-1500 ${
            showLighting ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-sans font-bold tracking-wider relative">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`inline-block text-primary animate-bounce relative ${letter === " " ? "w-4" : ""}`}
              style={{
                animationDelay: `${index * 0.1 + 1}s`,
                animationFillMode: "both",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
              {letter !== " " && (
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shine"
                  style={{
                    animationDelay: `${index * 0.1 + 2}s`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                />
              )}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex justify-center">
          <div
            className="w-16 h-1 bg-primary rounded-full relative animate-gold-glow"
            style={{
              boxShadow: "0 0 20px currentColor, 0 0 40px currentColor",
              filter: "drop-shadow(0 0 10px currentColor)",
            }}
          >
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-75" />
          </div>
        </div>
      </div>
    </div>
  )
}
