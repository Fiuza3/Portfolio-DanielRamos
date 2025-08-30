"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add new trail point
      setTrail((prev) => {
        const newTrail = [...prev, { ...newPosition, id: trailId++ }]
        // Keep only last 8 trail points
        return newTrail.slice(-8)
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

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-sm transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: "0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)",
        }}
      />

      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-4 h-4 rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-sm"
          style={{
            left: point.x - 8,
            top: point.y - 8,
            opacity: ((index + 1) / trail.length) * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
          }}
        />
      ))}
    </div>
  )
}
