import { motion, useReducedMotion } from 'motion/react'
import { Phone, Shield, Droplets } from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="min-h-dvh w-full bg-[#EAE8E3] text-zinc-950 font-sans antialiased relative overflow-x-hidden selection:bg-black selection:text-white flex flex-col justify-between">
      
      {/* Background: Studio Wall + Floor + Center Porsche Taycan with Laser Wireframe */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none transition-all duration-700"
        style={{
          backgroundImage: "url('/solstice-hero-bg.jpg')",
          backgroundPosition: 'center 40%',
        }}
      />

      {/* Subtle Ambient Vignette Overlay to ensure razor-sharp typography readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#EAE8E3]/60 via-transparent to-[#EAE8E3]/60 pointer-events-none" />

      {/* ================= HEADER / TOP NAVIGATION ================= */}
      <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="cursor-pointer select-none">
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-950">
            Solstice Detailing
          </span>
        </div>

        {/* Right: Navigation Links & Phone CTA */}
        <div className="flex items-center gap-8 sm:gap-12">
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-zinc-800">
            <a
              href="#services"
              className="hover:text-black transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="hover:text-black transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Direct Phone Call CTA */}
          <a
            href="tel:1234567890"
            className="flex items-center gap-2.5 text-sm sm:text-[15px] font-medium text-zinc-950 hover:opacity-80 transition-opacity"
          >
            <Phone className="size-4 fill-zinc-950 stroke-none" />
            <span className="tabular-nums underline decoration-zinc-950/40 underline-offset-4">
              123-456-7890
            </span>
          </a>
        </div>

      </header>

      {/* ================= HERO SECTION (SPLIT ASYMMETRIC OVER CENTRAL CAR) ================= */}
      <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 flex-1 flex flex-col justify-center py-10 lg:py-16">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Bold Architectural Headline */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 max-w-lg"
          >
            <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] xl:text-[74px] font-normal tracking-[-0.035em] text-zinc-950 leading-[1.04] text-balance">
              Automotive
              <br />
              Perfection,
              <br />
              <span className="font-semibold text-black">Redefined</span>
            </h1>
          </motion.div>

          {/* Center Column: Breathing Space for the Centered Porsche Taycan */}
          <div className="hidden lg:block lg:col-span-3 min-h-[300px] pointer-events-none" />

          {/* Right Column: Mission Subtext */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pl-6 max-w-md"
          >
            <p className="text-[15px] sm:text-[16.5px] text-zinc-700 font-normal leading-[1.55] text-pretty">
              We provide an unrivaled standard of vehicle care, restoring and protecting your automotive investment with scientific precision.
            </p>
          </motion.div>

        </div>

      </main>

      {/* ================= BOTTOM BAR / MINIMAL CONCIERGE SPEC ================= */}
      <footer className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <Shield className="size-3.5 text-zinc-900" /> Certified Ceramic Pro Installer
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <Droplets className="size-3.5 text-zinc-900" /> Paint Protection Film & Restoration
          </span>
        </div>

        <div className="text-zinc-500 font-mono text-[11px] tabular-nums">
          &copy; 2026 Solstice Detailing. Precision Care.
        </div>
      </footer>

    </div>
  )
}
