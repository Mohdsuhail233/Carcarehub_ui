import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate
} from 'motion/react'
import { Phone, Shield, Droplets, ArrowUpRight } from 'lucide-react'

interface ServiceCardItem {
  id: string
  title: string
  desc: string
  tag: string
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

  // 1. Scroll-Linked Rotation & Elevation (Recreating the exact video un-tilt physics)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center 55%']
  })

  // Start with the distinct negative tilt from video (-7.5deg / -6.5deg)
  // As it scrolls into active view, smoothly straightens to level 0deg
  const initialTilt = index % 2 === 0 ? -7.5 : -6.5
  const rawRotate = useTransform(scrollYProgress, [0, 0.85], [initialTilt, 0])
  const rotateZ = useSpring(rawRotate, { stiffness: 90, damping: 20, mass: 0.6 })

  const rawY = useTransform(scrollYProgress, [0, 0.85], [75, 0])
  const y = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.6 })

  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.85], [0.3, 0.75, 1])

  // 2. Interactive 3D Cursor Tilt & Spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rawRotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6])
  const rawRotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6])
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 22 })
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 22 })

  // Cursor coordinates for radial spotlight
  const spotX = useMotionValue(-1000)
  const spotY = useMotionValue(-1000)
  const spotBackground = useMotionTemplate`radial-gradient(380px circle at ${spotX}px ${spotY}px, rgba(255, 255, 255, 0.08), transparent 75%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top

    spotX.set(clientX)
    spotY.set(clientY)

    const normX = clientX / rect.width - 0.5
    const normY = clientY / rect.height - 0.5
    mouseX.set(normX)
    mouseY.set(normY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    spotX.set(-1000)
    spotY.set(-1000)
  }

  return (
    <div
      ref={cardRef}
      style={{ perspective: 1200 }}
      className="w-full"
    >
      {/* Scroll-Driven Outer Motion Layer */}
      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateZ,
                y,
                opacity,
                transformStyle: 'preserve-3d'
              }
        }
        className="w-full"
      >
        {/* Interactive 3D Cursor Tilt & Hover Layer */}
        <motion.div
          style={
            shouldReduceMotion
              ? {}
              : {
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d'
                }
          }
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.025,
                  y: -4,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }
          }
          className="group relative bg-[#14151b] border border-white/[0.18] hover:border-white/45 rounded-[24px] sm:rounded-[28px] p-7 sm:p-9 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden transition-colors duration-300 select-none will-change-transform"
        >
          {/* Dynamic Interactive Cursor Spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: spotBackground }}
          />

          {/* Ambient Top Glare */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent pointer-events-none z-0" />

          {/* Top: Header & Micro Arrow */}
          <div className="relative z-10 pt-2 flex items-start justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.15] text-balance group-hover:text-white transition-colors">
              {card.title}
            </h3>
            <span className="shrink-0 size-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          {/* Bottom: White Square Icon + Subtext Right Next to It */}
          <div className="relative z-10 flex items-center gap-4 sm:gap-5 mt-8">
            {/* White Rounded Square Icon Container with subtle elevation */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="size-12 sm:size-14 rounded-2xl bg-white text-zinc-950 flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(255,255,255,0.12)] group-hover:shadow-[0_12px_28px_rgba(255,255,255,0.22)] transition-shadow duration-300"
            >
              {card.icon}
            </motion.div>

            {/* Subtext Beside Icon */}
            <p className="text-xs sm:text-[13.5px] text-zinc-400 font-normal leading-snug max-w-[220px] text-pretty group-hover:text-zinc-200 transition-colors">
              {card.desc}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

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

          {/* Tilted Cards Grid with Scroll-Driven Rotation & 3D Interactive Physics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
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
