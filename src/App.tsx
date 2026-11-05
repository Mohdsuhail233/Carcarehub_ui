import { motion, useReducedMotion } from 'motion/react'
import { Phone, Shield, Droplets } from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()

  const serviceCards = [
    {
      id: 'updates',
      title: 'Live Ride Updates',
      desc: 'Navigate Seamlessly with Real-Time Data',
      tag: 'PRECISION TELEMETRY',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
        </svg>
      )
    },
    {
      id: 'alerts',
      title: 'Assistive Alerts',
      desc: 'Stay Informed and Safe',
      tag: 'ACTIVE MONITORING',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="2" width="4" height="4" rx="1"/>
          <rect x="10" y="18" width="4" height="4" rx="1"/>
          <rect x="2" y="10" width="4" height="4" rx="1"/>
          <rect x="18" y="10" width="4" height="4" rx="1"/>
          <rect x="7" y="7" width="3" height="3" rx="0.5"/>
          <rect x="14" y="7" width="3" height="3" rx="0.5"/>
          <rect x="7" y="14" width="3" height="3" rx="0.5"/>
          <rect x="14" y="14" width="3" height="3" rx="0.5"/>
        </svg>
      )
    },
    {
      id: 'recording',
      title: 'High-Definition Ride Recording',
      desc: 'Capture Every Adventure Clearly',
      tag: '4K OPTICAL LOGGING',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
        </svg>
      )
    },
    {
      id: 'installation',
      title: 'Easy Installation',
      desc: 'Simple Setup for Instant Riding',
      tag: 'SEAMLESS INTEGRATION',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="3" y="3" width="18" height="18" rx="4"/>
          <rect x="8" y="8" width="8" height="8" rx="2"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-dvh w-full bg-[#EAE8E3] text-zinc-950 font-sans antialiased relative overflow-x-hidden selection:bg-black selection:text-white flex flex-col justify-between">
      
      {/* ================= 1. HERO SECTION (WIX WH-1274 SOLSTICE DETAILING) ================= */}
      <section className="relative min-h-dvh w-full flex flex-col justify-between overflow-hidden">
        
        {/* Background: Studio Wall + Floor + Center Porsche Taycan with Laser Wireframe */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: "url('/solstice-hero-bg.jpg')",
            backgroundPosition: 'center 40%',
          }}
        />

        {/* Ambient Vignette for crisp text contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#EAE8E3]/60 via-transparent to-[#EAE8E3]/60 pointer-events-none" />

        {/* Top Navigation */}
        <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between">
          <div className="cursor-pointer select-none">
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-950">
              Solstice Detailing
            </span>
          </div>

          <div className="flex items-center gap-8 sm:gap-12">
            <nav className="hidden md:flex items-center gap-8 text-[14px] text-zinc-800">
              <a href="#services" className="hover:text-black transition-colors">
                Services
              </a>
              <a href="#services" className="hover:text-black transition-colors">
                Features
              </a>
              <a href="#contact" className="hover:text-black transition-colors">
                Contact
              </a>
            </nav>

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

        {/* Hero Split Content */}
        <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 flex-1 flex flex-col justify-center py-10 lg:py-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Headline */}
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

            {/* Center Breathing Space for Porsche Taycan Scan */}
            <div className="hidden lg:block lg:col-span-3 min-h-[300px] pointer-events-none" />

            {/* Right Subtext */}
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

        {/* Hero Bottom Bar */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
              <Shield className="size-3.5 text-zinc-900" /> Certified Precision Partner
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
              <Droplets className="size-3.5 text-zinc-900" /> Advanced Engineering Specs
            </span>
          </div>

          <a
            href="#services"
            className="text-zinc-600 hover:text-black flex items-center gap-1 transition-colors"
          >
            <span>Explore Enhancements</span>
            <span className="text-[11px]">&darr;</span>
          </a>
        </div>

      </section>

      {/* ================= 2. SERVICES / ENHANCEMENTS SECTION (EXACT MATCH WITH USER'S VIDEO) ================= */}
      <section
        id="services"
        className="relative z-10 w-full bg-[#0d0e12] text-white py-28 sm:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-zinc-800"
      >
        <div className="max-w-[1280px] mx-auto">
          
          {/* Section Header (From Video) */}
          <div className="max-w-2xl mb-20 sm:mb-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              Intelligent Ride
              <br />
              Enhancements
            </h2>
            <p className="text-[15px] sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl text-pretty">
              Discover advanced features that elevate your vehicle experience.
              Each element is designed to enhance safety, convenience, and the joy of riding.
            </p>
          </div>

          {/* Tilted Cards Grid (Exact Layout from Video) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
            {serviceCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* 
                  Tilted Card Container:
                  - Base tilt: -rotate-[6deg]
                  - Smooth tactile straighten on hover: group-hover:rotate-0
                  - 1px crisp outline: border border-white/[0.18]
                  - Deep glass card surface: bg-[#14151b]
                */}
                <div className="relative -rotate-[6deg] group-hover:rotate-0 group-hover:scale-[1.02] group-hover:-translate-y-2 bg-[#14151b] border border-white/[0.18] group-hover:border-white/40 rounded-[24px] sm:rounded-[28px] p-7 sm:p-9 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                  
                  {/* Subtle top glare reflection */}
                  <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                  {/* Top: Card Title */}
                  <div className="relative z-10 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.15] text-balance">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom: White Square Icon + Subtext Right Next to It */}
                  <div className="relative z-10 flex items-center gap-4 sm:gap-5 mt-8">
                    
                    {/* White Rounded Square Icon Container */}
                    <div className="size-12 sm:size-14 rounded-2xl bg-white text-zinc-950 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>

                    {/* Subtext Beside Icon */}
                    <p className="text-xs sm:text-[13.5px] text-zinc-400 font-normal leading-snug max-w-[220px] text-pretty">
                      {card.desc}
                    </p>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. MINIMAL FOOTER ================= */}
      <footer
        id="contact"
        className="w-full bg-[#0a0a0c] text-zinc-500 py-16 px-6 sm:px-12 lg:px-20 border-t border-zinc-800 text-xs"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div>
            <span className="font-bold text-white text-base tracking-tight block">
              Solstice Detailing
            </span>
            <p className="text-zinc-500 mt-1">
              Precision Engineering & Vehicle Enhancements
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Enhancements</a>
            <a href="tel:1234567890" className="hover:text-white transition-colors tabular-nums">
              123-456-7890
            </a>
          </div>

          <div className="text-zinc-500 font-mono text-[11px] tabular-nums">
            &copy; 2026 Solstice. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  )
}
