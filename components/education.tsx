export default function Education() {
  const education = [
    {
      degree: "B.Tech Aerospace Engineering",
      school: "Lovely Professional University",
      period: "2023–2027",
      details: "CGPA: 7.5",
    },
    {
      degree: "12th Standard",
      school: "Lucknow Public School",
      period: "Completed",
      details: "80%",
    },
    {
      degree: "10th Standard",
      school: "Regency Public School",
      period: "Completed",
      details: "81%",
    },
  ]

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-fade-in space-y-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Education
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-6 mt-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="scroll-fade-in group relative border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-all duration-300 bg-card/20 hover:bg-card/40"
              >
                {/* Timeline indicator */}
                <div className="absolute left-8 -top-6 w-3 h-3 bg-primary rounded-full border-2 border-background hidden md:block"></div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-foreground/80 font-medium">{edu.school}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                    <span className="text-sm text-primary font-medium">
                      {edu.details}
                    </span>
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
