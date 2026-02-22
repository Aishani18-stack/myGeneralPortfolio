'use client'

import { Rocket, Award, Code } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm an aerospace engineering student with a passion for aircraft design and structural mechanics. With hands-on experience from internships and personal projects, I combine theoretical knowledge with practical problem-solving.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            My interests span across aerodynamics, propulsion systems, and flight mechanics. I enjoy working on projects that bridge the gap between simulation and real-world applications.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <Rocket className="text-blue-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Aircraft Design</h3>
              <p className="text-gray-400 text-sm">CAD modeling and aerodynamic analysis</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <Award className="text-blue-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Problem Solving</h3>
              <p className="text-gray-400 text-sm">Structural analysis and optimization</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <Code className="text-blue-400 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Engineering Tools</h3>
              <p className="text-gray-400 text-sm">MATLAB, ANSYS, and simulation software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
