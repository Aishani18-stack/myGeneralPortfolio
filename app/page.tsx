"use client"

import { useEffect, useRef } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Internship from "@/components/internship"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Education from "@/components/education"
import Footer from "@/components/footer"

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Set up Intersection Observer for fade-in animations
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll(".scroll-fade-in")
    fadeElements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <main className="relative">
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Footer />
    </main>
  )
}
