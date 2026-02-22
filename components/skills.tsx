export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["C++", "C", "Java", "Python"],
    },
    {
      category: "Domain Tools",
      skills: ["MATLAB", "AutoCAD", "Creo", "Siemens NX"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Decision Making", "Leadership"],
    },
  ]

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-fade-in space-y-12">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Skills
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="scroll-fade-in group border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 bg-card/20 hover:bg-card/40"
              >
                <h3 className="text-lg font-bold text-primary mb-6">
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-foreground/85"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
