export default function Projects() {
  const projects = [
    {
      title: "Solid Propellant Rocket Workshop",
      period: "Feb 2025",
      description:
        "Model rocket fabrication and launch with focus on propulsion fundamentals and nozzle design.",
      highlights: [
        "Model rocket fabrication and launch",
        "Propulsion fundamentals",
        "Nozzle design and thrust optimization",
      ],
    },
    {
      title: "RC Glider – High Endurance Free Flight",
      period: "Aug 2024 – Sep 2024",
      description:
        "Depron sheet glider design with emphasis on aerodynamic efficiency and passive stability.",
      highlights: [
        "Depron sheet glider design",
        "High aspect ratio wing configuration",
        "Dihedral angle optimization",
        "Passive stability enhancement",
      ],
    },
    {
      title: "RC Glider – Tractor Propulsion Model",
      period: "Nov 2023 – Dec 2023",
      description:
        "Front-mounted propeller configuration glider with optimized aerodynamic characteristics.",
      highlights: [
        "Front-mounted propeller configuration",
        "Airfoil selection and analysis",
        "CG optimization",
        "Lift-to-drag ratio improvement",
      ],
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-fade-in space-y-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Projects
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="scroll-fade-in group border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 bg-background/40 hover:bg-background/60"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-foreground/85 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
