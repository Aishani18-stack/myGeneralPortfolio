export default function About() {
  return (
    <section className="relative py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-fade-in space-y-6">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              About
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          <div className="mt-8 space-y-6 text-foreground/90 text-lg leading-relaxed font-light">
            <p>
              I am a third-year Aerospace Engineering student at{" "}
              <span className="text-primary font-medium">
                Lovely Professional University
              </span>{" "}
              with a strong interest in propulsion, space systems, and thermal
              engineering.
            </p>

            <p>
              I have hands-on internship experience in control lab testing, PCB
              reliability testing, CAD modeling using Siemens NX, and calorimeter
              performance analysis. My work focuses on the intersection of thermal
              management systems and aerospace applications.
            </p>

            <p>
              I aim to contribute to aerospace and space technology through
              research-driven engineering solutions, with a particular focus on
              propulsion systems and thermal management in extreme environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
