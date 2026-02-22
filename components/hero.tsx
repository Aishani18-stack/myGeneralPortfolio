import Link from "next/link"
import { Download, Mail, Phone, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-20 md:pt-0 md:pb-0">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="scroll-fade-in space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Aishani
              <br />
              Srivastava
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Aerospace Engineering Student
            </p>
            <p className="text-base md:text-lg text-secondary font-light">
              Space Systems Enthusiast
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
              Sitapur, Uttar Pradesh, India
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed max-w-lg font-light">
              Designing the future of propulsion, flight, and thermal systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:aishani@example.com"
              aria-label="Email"
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </Link>
            <Link
              href="tel:+919876543210"
              aria-label="Phone"
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <Phone size={24} />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 font-medium text-base shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="scroll-fade-in hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Animated background circles */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-primary/20"></div>
            <div className="absolute inset-8 rounded-full bg-card border border-primary/40"></div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">✈️</div>
              <p className="text-center text-muted-foreground text-sm font-light">
                Aerospace
                <br />
                Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
