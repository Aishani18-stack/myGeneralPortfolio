import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 bg-card/40 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-fade-in space-y-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">About</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Aerospace Engineering student exploring propulsion, space systems,
                and thermal engineering solutions.
              </p>
            </div>

            {/* Quick links column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:aishani@example.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/20"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-muted-foreground">
            <p>
              © {currentYear} Aishani Srivastava. All rights reserved.
            </p>
            <p className="font-light">
              Built with Next.js and deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
