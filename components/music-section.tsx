"use client"

import { useEffect, useRef, useState } from "react"

interface Song {
  id: number
  title: string
  youtubeUrl: string
  spotifyUrl: string
  deezerUrl: string
}

const songs: Song[] = [
  {
    id: 1,
    title: "Canção da Esperança",
    youtubeUrl: "#",
    spotifyUrl: "#",
    deezerUrl: "#",
  },
  {
    id: 2,
    title: "Luz do Amanhecer",
    youtubeUrl: "#",
    spotifyUrl: "#",
    deezerUrl: "#",
  },
  {
    id: 3,
    title: "Caminho da Fé",
    youtubeUrl: "#",
    spotifyUrl: "#",
    deezerUrl: "#",
  },
  {
    id: 4,
    title: "Graça Infinita",
    youtubeUrl: "#",
    spotifyUrl: "#",
    deezerUrl: "#",
  },
  {
    id: 5,
    title: "Novo Coração",
    youtubeUrl: "#",
    spotifyUrl: "#",
    deezerUrl: "#",
  },
]

export default function MusicSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-background py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">Discografia</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Descubra as canções que tocam o coração e fortalecem a fé. Ouça nas principais plataformas digitais.
          </p>
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50">
                {/* Album Cover Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <div className="text-center text-muted-foreground">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                    <p className="text-xs font-serif">Capa</p>
                  </div>
                </div>

                {/* Song Title */}
                <h3 className="text-lg font-sans font-semibold text-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {song.title}
                </h3>

                {/* Platform Links */}
                <div className="flex justify-center space-x-4">
                  {/* YouTube */}
                  <a
                    href={song.youtubeUrl}
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/30"
                    aria-label={`Ouvir ${song.title} no YouTube`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* Spotify */}
                  <a
                    href={song.spotifyUrl}
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-600/30"
                    aria-label={`Ouvir ${song.title} no Spotify`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </a>

                  {/* Deezer */}
                  <a
                    href={song.deezerUrl}
                    className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30"
                    aria-label={`Ouvir ${song.title} no Deezer`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.81 8.23v1.54h3.63V8.23h-3.63zm0 2.77v1.54h3.63v-1.54h-3.63zm0 2.77v1.54h3.63v-1.54h-3.63zM1.56 11v1.54h3.63V11H1.56zm0 2.77v1.54h3.63v-1.54H1.56zm4.62-2.77v1.54h3.63V11H6.18zm0 2.77v1.54h3.63v-1.54H6.18zm4.62-5.54v1.54h3.63V8.23h-3.63zm0 2.77v1.54h3.63V11h-3.63zm0 2.77v1.54h3.63v-1.54h-3.63zm4.62-8.31v1.54h3.63V5.46h-3.63zm0 2.77v1.54h3.63V8.23h-3.63zm0 2.77v1.54h3.63V11h-3.63zm0 2.77v1.54h3.63v-1.54h-3.63z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground font-serif mb-6">
            Acompanhe as novidades e lançamentos nas redes sociais
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/danielramosbh/" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-sans font-semibold hover:bg-primary/90 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
