import type { Metadata } from "next"
import Hero from "./components/Hero"
import Capabilities from "./components/Capabilities"
import Technologies from "./components/Technologies"
import Benefits from "./components/Benefits"
import CompanyLogos from "./components/CompanyLogos"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Mosquito",
  description: "AI Solutions for Your Business - Transforming ideas into intelligent solutions",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
    </main>
  )
}
