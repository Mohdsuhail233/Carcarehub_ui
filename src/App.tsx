import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate
} from 'motion/react'
import { Phone, Shield, Droplets } from 'lucide-react'

interface ServiceCardItem {
  id: string
  line1: string
  line2: string
  desc: string
  icon: React.ReactNode
}

function AnimatedServiceCard({
  card,
  index,
  shouldReduceMotion
}: {
  card: ServiceCardItem
  index: number
  shouldReduceMotion: boolean | null
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Cursor coordinates for radial spotlight
  const spotX = useMotionValue(-1000)
  const spotY = useMotionValue(-1000)
  const spotBackground = useMotionTemplate`radial-gradient(350px circle at ${spotX}px ${spotY}px, rgba(255, 255, 255, 0.08), transparent 75%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    spotX.set(e.clientX - rect.left)
    spotY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    spotX.set(-1000)
    spotY.set(-1000)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -5,
              scale: 1.012,
              transition: { duration: 0.25, ease: 'easeOut' }
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-[#17171d] border border-white/[0.18] hover:border-white/50 rounded-[20px] p-7 sm:p-8 min-h-[235px] sm:min-h-[245px] flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.7)] cursor-pointer overflow-hidden transition-all duration-300 select-none will-change-transform"
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotBackground }}
      />

      {/* Top: Two-line Title (Exact match to screenshot) */}
      <div className="relative z-10 pt-1">
        <h3 className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-[1.12]">
          <span className="block">{card.line1}</span>
          <span className="block">{card.line2}</span>
        </h3>
      </div>

      {/* Bottom: White Square Icon + Subtext directly beside it */}
      <div className="relative z-10 flex items-center gap-4 sm:gap-5 mt-8">
        {/* White Rounded Square Icon Box */}
        <div className="size-12 rounded-[14px] bg-white text-zinc-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
          {card.icon}
        </div>

        {/* Subtext beside Icon */}
        <p className="text-[13px] sm:text-[14px] text-[#cfd1d8] font-normal leading-[1.38] max-w-[210px] text-pretty group-hover:text-white transition-colors duration-200">
          {card.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function App() {
  const shouldReduceMotion = useReducedMotion()

  const serviceCards: ServiceCardItem[] = [
    {
      id: 'updates',
      line1: 'Live Ride',
      line2: 'Updates',
      desc: 'Navigate Seamlessly with Real-Time Data',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="5" y1="8" x2="19" y2="16" />
          <line x1="5" y1="16" x2="19" y2="8" />
        </svg>
      )
    },
    {
      id: 'alerts',
      line1: 'Assistive',
      line2: 'Alerts',
      desc: 'Stay Informed and Safe',
      icon: (
        <svg className="size-5 text-zinc-950" viewBox="0 0 24 24" fill="currentColor">
          <rect x="10.5" y="2" width="3" height="3" rx="0.5"/>
          <rect x="10.5" y="19" width="3" height="3" rx="0.5"/>
          <rect x="2" y="10.5" width="3" height="3" rx="0.5"/>
          <rect x="19" y="10.5" width="3" height="3" rx="0.5"/>
          <rect x="6" y="6" width="3" height="3" rx="0.5"/>
          <rect x="15" y="6" width="3" height="3" rx="0.5"/>
          <rect x="6" y="15" width="3" height="3" rx="0.5"/>
          <rect x="15" y="15" width="3" height="3" rx="0.5"/>
        </svg>
      )
    },
    {
      id: 'recording',
      line1: 'High-Definition',
      line2: 'Ride Recording',
      desc: 'Capture Every Adventure Clearly',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <circle cx="12" cy="12" r="3.5"/>
          <path d="M12 2.5v6M21.5 12h-6M12 21.5v-6M2.5 12h6"/>
        </svg>
      )
    },
    {
      id: 'installation',
      line1: 'Easy',
      line2: 'Installation',
      desc: 'Simple Setup for Instant Riding',
      icon: (
        <svg className="size-6 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4"/>
          <path d="M12 8v8M8 12h8"/>
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

          {/* Cards Grid (Exact match with user screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {serviceCards.map((card, idx) => (
              <AnimatedServiceCard
                key={card.id}
                card={card}
                index={idx}
                shouldReduceMotion={shouldReduceMotion}
              />
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
