export default function Internship() {
  const internships = [
    {
      title: "LG Intern",
      company: "LG Electronics India Pvt Ltd",
      period: "Jul 2025 – Aug 2025",
      responsibilities: [
        "Control Lab testing of indoor and outdoor PCBs",
        "Fault analysis, voltage spike testing, firmware issue detection",
        "Siemens NX 2D and 3D modeling",
        "Calorimeter testing for COP and cooling capacity",
        "Reliability testing: temperature cycling, vibration, humidity, salt spray",
        "Thermal management comparison with aerospace ECS systems",
      ],
    },
  ]

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-fade-in space-y-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Experience
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-12 mt-12">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="scroll-fade-in group border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 bg-card/20 hover:bg-card/40"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {internship.title}
                    </h3>
                    <p className="text-lg text-foreground font-medium mb-1">
                      {internship.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {internship.period}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {internship.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="flex gap-4 text-foreground/85 leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
