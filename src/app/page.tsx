import { Header } from "@/components/common/Header"
import { TopSection } from "@/components/sections/TopSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ScheduleSection } from "@/components/sections/ScheduleSection"
import { GamesSection } from "@/components/sections/GamesSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/common/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-fuchsia-100">
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <TopSection />
      <AboutSection />
      <ScheduleSection />
      <GamesSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
