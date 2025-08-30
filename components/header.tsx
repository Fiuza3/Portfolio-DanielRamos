import { Github, Linkedin, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="text-white/80">
            Desenvolvedor <span className="text-primary font-medium">Marcus Fiuza</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-white/60">Entre em contato:</span>

            <div className="flex items-center gap-4">
              <a
                href="mailto:devfiuza@gmail.com"
                className="text-white/80 hover:text-primary transition-colors"
                title="devfiuza@gmail.com"
              >
                <Mail size={16} />
              </a>

              <a
                href="https://github.com/marcusfiuza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Github size={16} />
              </a>

              <a
                href="https://linkedin.com/in/marcusfiuza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
