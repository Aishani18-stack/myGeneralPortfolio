export default function Certifications() {
  const certifications = [
    {
      title: "STC on Geospatial Technologies",
      issuer: "Lovely Professional University",
      date: "Mar 2025",
    },
    {
      title: "Communication Skills for Career Development",
      issuer: "Lovely Professional University",
      date: "Aug 2023 – Dec 2023",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-fade-in space-y-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Certifications
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-6 mt-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="scroll-fade-in group border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 bg-background/40 hover:bg-background/60"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-foreground/75">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
