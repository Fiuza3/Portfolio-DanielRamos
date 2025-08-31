"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add new trail point
      setTrail((prev) => {
        const newTrail = [...prev, newPosition]
        // Keep only last 20 trail points for smooth curve
        return newTrail.slice(-20)
      })
    }

    // Clear trail points gradually
    const trailInterval = setInterval(() => {
      setTrail((prev) => prev.slice(1))
    }, 50)

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      clearInterval(trailInterval)
    }
  }, [])

  // Create smooth path from trail points
  const createPath = () => {
    if (trail.length < 2) return ""
    
    let path = `M ${trail[0].x} ${trail[0].y}`
    for (let i = 1; i < trail.length; i++) {
      const point = trail[i]
      path += ` L ${point.x} ${point.y}`
    }
    return path
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 rounded-full bg-gradient-radial from-primary/50 via-primary/20 to-transparent blur-sm"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: "0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)",
        }}
      />

      {/* Slime trail effect */}
      {trail.length > 1 && (
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
              <stop offset="50%" stopColor="rgba(212, 175, 55, 0.3)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0.6)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
          </defs>
          <path
            d={createPath()}
            stroke="url(#trailGradient)"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            opacity="0.5"
            style={{
              filter: "blur(15px) drop-shadow(0 0 50px rgba(212, 175, 55, 1)) drop-shadow(0 0 100px rgba(212, 175, 55, 0.7))"
            }}
          />
        </svg>
      )}
    </div>
  )
}
