"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-card/50 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Column - Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-primary/20 pointer-events-none z-10"></div>

              <div className="w-80 h-[500px] md:w-96 md:h-[600px] rounded-lg border-2 border-primary/30 overflow-hidden shadow-2xl relative">
                <Image
                  src="/danielRamos.png"
                  alt="Daniel Ramos - Cantor Gospel"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Elegant border effect */}
                <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors duration-300"></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-2">Sobre</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-8">Daniel Ramos</h3>

              <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg font-serif">
                  Daniel Ramos é um cantor que dedica sua vida à música gospel, levando mensagens de fé e esperança
                  através de suas canções. Com uma voz marcante e uma paixão genuína pela palavra de Deus, ele tem
                  tocado corações em todo o país.
                </p>

                <p className="text-lg font-serif">
                  Sua jornada musical começou ainda na juventude, quando descobriu seu chamado para ministrar através da
                  música. Desde então, tem se dedicado a criar composições que fortalecem a fé e inspiram transformação
                  na vida das pessoas.
                </p>

                <p className="text-lg font-serif">
                  Com um repertório que combina tradição e contemporaneidade, Daniel Ramos continua sua missão de
                  espalhar o amor de Cristo através da música, alcançando diferentes gerações com sua mensagem de
                  salvação e renovação.
                </p>
              </div>
            </div>

            {/* Decorative quote */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="border-l-4 border-primary pl-6 mt-8">
                <p className="text-primary font-serif italic text-xl">
                  "A música é o idioma da alma, e através dela, Deus fala ao coração de cada pessoa."
                </p>
                <p className="text-muted-foreground text-sm mt-2 font-sans">- Daniel Ramos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
