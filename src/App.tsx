import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  Phone,
  Shield,
  Droplets,
  Cpu,
  Wrench,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowUpRight,
  User,
  X
} from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()
  const [showPrivacy, setShowPrivacy] = useState(false)

  const servicesRow1 = [
    {
      id: 'diagnosis',
      title: 'Diagnosis',
      desc: 'Efficient issue identification',
      icon: (
        <svg className="size-8 text-[#0f1013]" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="10" width="3.5" height="12" rx="1.75" fill="currentColor"/>
          <rect x="10.5" y="4" width="3.5" height="24" rx="1.75" fill="currentColor"/>
          <rect x="17" y="8" width="3.5" height="16" rx="1.75" fill="currentColor"/>
          <rect x="23.5" y="12" width="3.5" height="8" rx="1.75" fill="currentColor"/>
          <circle cx="5.75" cy="27" r="1.5" fill="currentColor" fillOpacity="0.35"/>
          <circle cx="12.25" cy="30" r="1.5" fill="currentColor" fillOpacity="0.35"/>
          <circle cx="18.75" cy="27" r="1.5" fill="currentColor" fillOpacity="0.35"/>
        </svg>
      )
    },
    {
      id: 'repairs',
      title: 'Repairs',
      desc: 'High-quality fixes performed',
      icon: (
        <svg className="size-8 text-[#0f1013]" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3.5"/>
          <path d="M16 5.5 A 10.5 10.5 0 1 1 5.5 19.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      desc: 'Regular upkeep services',
      icon: (
        <svg className="size-8 text-[#0f1013]" viewBox="0 0 32 32" fill="none">
          <rect x="5.5" y="16" width="3.5" height="11" rx="1.75" fill="currentColor" fillOpacity="0.35"/>
          <rect x="12" y="8" width="3.5" height="19" rx="1.75" fill="currentColor"/>
          <rect x="18.5" y="14" width="3.5" height="13" rx="1.75" fill="currentColor"/>
          <rect x="25" y="5" width="3.5" height="22" rx="1.75" fill="currentColor"/>
        </svg>
      )
    }
  ]

  const servicesRow2 = [
    {
      id: 'tuning',
      title: 'Tuning',
      desc: 'Optimizing vehicle performance',
      icon: (
        <svg className="size-8 text-[#0f1013]" viewBox="0 0 32 32" fill="none">
          <line x1="7" y1="4" x2="7" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.3"/>
          <circle cx="7" cy="11" r="3" fill="currentColor"/>
          <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.3"/>
          <circle cx="16" cy="20" r="3" fill="currentColor"/>
          <line x1="25" y1="4" x2="25" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.3"/>
          <circle cx="25" cy="8" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'emergency',
      title: 'Emergency Assistance',
      desc: 'Quick response for urgent needs',
      icon: (
        <svg className="size-8 text-[#0f1013]" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="2.5"/>
          <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5"/>
          <circle cx="16" cy="16" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'consultation',
      title: 'Consultation',
      desc: 'Expert advice on car care',
      icon: (
        <svg className="size-8 text-[#0f1013]" viewBox="0 0 32 32" fill="none">
          <path d="M16 5.5a10.5 10.5 0 0 1 10.5 10.5 10.5 10.5 0 0 1-10.5 10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M16 11a5 5 0 0 1 5 5 5 5 0 0 1-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5"/>
          <circle cx="16" cy="16" r="2" fill="currentColor"/>
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
        <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-8">
          <div className="max-w-[1240px] mx-auto flex items-center justify-between w-full">
            <div className="cursor-pointer select-none">
              <span className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-950">
               CAR CARE HUB
              </span>
            </div>

            <div className="flex items-center gap-8 sm:gap-12">
              <nav className="hidden md:flex items-center gap-8 text-[14px] text-zinc-800">
                <a href="#services" className="hover:text-black transition-colors">
                  Services
                </a>
                <a href="#about" className="hover:text-black transition-colors">
                  About
                </a>
                <a href="#contact" className="hover:text-black transition-colors">
                  Contact
                </a>
              </nav>

              <a
                href="https://portal.carcarehubgp.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-medium hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                <User className="size-4" />
                <span>Login</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Split Content */}
        <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 flex-1 flex flex-col justify-center py-10 lg:py-16">
          <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
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
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-8 pt-4">
          <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 w-full">
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
              <span>Explore Services</span>
              <span className="text-[11px]">&darr;</span>
            </a>
          </div>
        </div>

      </section>

      {/* ================= 2. SERVICES SECTION (EXACT MATCH WITH USER REFERENCE IMAGE & HERO BG COLOR) ================= */}
      <section
        id="services"
        className="relative z-10 w-full bg-[#EAE8E3] text-zinc-950 py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-zinc-950/10"
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Centered Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 block mb-3">
              Services &amp; Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0f1013] leading-[1.08] text-balance mb-4">
              Comprehensive Automotive Care
            </h2>
            <p className="text-[15px] sm:text-[16.5px] text-[#555a64] font-normal leading-[1.6]">
              Delivering specialized engineering and diagnostic solutions to ensure peak mechanical health and driving dynamics.
            </p>
          </div>

          {/* Row 1: Diagnosis | Repairs | Maintenance - Centered & Equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 lg:gap-16">
            {servicesRow1.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer select-none flex flex-col items-center text-center"
              >
                {/* Minimalist Tech Icon */}
                <div className="group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2 className="text-[26px] sm:text-[30px] lg:text-[33px] font-normal tracking-[-0.025em] text-[#0f1013] mt-6 sm:mt-7 mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h2>

                {/* Subtitle / Description */}
                <p className="text-[14px] sm:text-[15px] text-[#555a64] font-normal leading-normal max-w-xs">
                  {service.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Clean Thin Divider Line Between Rows (Exact match with reference) */}
          <div className="w-full border-t border-zinc-950/15 my-14 sm:my-18 lg:my-20" />

          {/* Row 2: Tuning | Emergency Assistance | Consultation - Centered & Equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 lg:gap-16">
            {servicesRow2.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer select-none flex flex-col items-center text-center"
              >
                {/* Minimalist Tech Icon */}
                <div className="group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2 className="text-[26px] sm:text-[30px] lg:text-[33px] font-normal tracking-[-0.025em] text-[#0f1013] mt-6 sm:mt-7 mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h2>

                {/* Subtitle / Description */}
                <p className="text-[14px] sm:text-[15px] text-[#555a64] font-normal leading-normal max-w-xs">
                  {service.desc}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. ABOUT US SECTION (CLEAN EDITORIAL GARAGE & WORKSHOP) ================= */}
      <section
        id="about"
        className="relative z-10 w-full bg-[#EAE8E3] text-zinc-950 py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-zinc-950/10 overflow-hidden"
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Section Header & Narrative - Centered */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 block mb-3">
              About Our Workshop
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0f1013] leading-[1.08] text-balance mb-6">
              Precision Engineering &amp; Complete Automotive Care
            </h2>
            <p className="text-[16.5px] sm:text-[18px] text-[#434750] font-normal leading-[1.65] text-pretty">
              Built on mechanical integrity and computer-guided diagnostics, our workshop provides complete automotive care for all vehicle makes and models. From complex powertrain overhauls and electronic calibration to routine scheduled servicing, our certified technicians ensure your car operates at peak reliability.
            </p>
          </motion.div>

          {/* 3 Value Pillars Grid - Centered & Equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14">
            
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <Cpu className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Advanced Computerized Diagnostics
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed max-w-sm">
                OBD-II telemetry and live sensor mapping detect transmission, ECU, and electrical faults before they escalate into costly failures.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <Wrench className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Mechanical Overhauls &amp; OEM Standards
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed max-w-sm">
                Engine rebuilding, suspension calibration, and brake service aligned to exact factory torque specifications using genuine manufacturer parts.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Certified Mechanics &amp; Roadside Care
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed max-w-sm">
                Transparent digital inspection reports, upfront repair quotes with no hidden fees, and dedicated 24/7 emergency roadside assistance.
              </p>
            </motion.div>

          </div>

          {/* Thin Divider Line */}
          <div className="w-full border-t border-zinc-950/15 my-14 sm:my-18" />

          {/* 3-Column Verified Workshop Metrics - Centered & Equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                200+
              </div>
              <div className="text-xs sm:text-[13.5px] text-zinc-600 mt-1 font-medium">
                Vehicles Serviced
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                100%
              </div>
              <div className="text-xs sm:text-[13.5px] text-zinc-600 mt-1 font-medium">
                Genuine OEM Components
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                24/7
              </div>
              <div className="text-xs sm:text-[13.5px] text-zinc-600 mt-1 font-medium">
                Emergency Response Fleet
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. CONTACT & DIRECT CHANNELS SECTION (NO FORM, PURE MINIMALIST) ================= */}
      <section
        id="contact"
        className="relative z-10 w-full bg-[#EAE8E3] text-zinc-950 py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-zinc-950/10 overflow-hidden"
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Section Header - Centered */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-center mb-14 sm:mb-18"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 block mb-3">
              Contact &amp; Location
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0f1013] leading-[1.08] text-balance mb-4">
              Speak Directly With Our Workshop
            </h2>
            <p className="text-[16px] sm:text-[17.5px] text-[#4d515a] font-normal leading-[1.6]">
              Whether you need routine maintenance, complex diagnostics, or immediate roadside assistance, our technicians are directly available.
            </p>
          </motion.div>

          {/* 3-Column Minimalist Details Grid - Centered & Equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14">
            
            {/* Column 1: Facility Location */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6">
                <MapPin className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Car Care Hub
              </h3>
              <a
                href="https://share.google/qM0sdv309Wfve2RlG"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[14px] sm:text-[14.5px] text-[#555a64] hover:text-black leading-relaxed mb-4 group max-w-xs"
              >
                <span className="underline decoration-zinc-950/40 group-hover:decoration-black underline-offset-4">
                  Hazrat Ali Chowk, Ali Nagar, Naugawan Sadat, Uttar Pradesh 244251
                </span>
              </a>
              <a
                href="https://share.google/qM0sdv309Wfve2RlG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-black underline decoration-zinc-900/30 underline-offset-4"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </motion.div>

            {/* Column 2: Hours */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6">
                <Clock className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Hours of Operation
              </h3>
              <div className="text-[14px] text-[#555a64] space-y-1.5 mb-4 w-full max-w-[240px]">
                <div className="flex justify-between">
                  <span>Mon &ndash; Sunday:</span>
                  <span className="font-mono text-zinc-900 font-medium">9:00 AM &ndash; 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday:</span>
                  <span className="text-emerald-800 font-medium">Closed</span>
                </div>
              </div>
              <span className="text-xs text-zinc-500">
                Walk-in diagnostic slots available daily
              </span>
            </motion.div>

            {/* Column 3: Direct Inquiries */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6">
                <Phone className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Contact Us
              </h3>
              <div className="text-[14px] text-[#555a64] space-y-2 mb-4">
                <div>
                  <span className="text-xs text-zinc-500 block">General Workshop Desk:</span>
                  <a href="tel:+918279846617" className="text-zinc-950 font-medium hover:underline tabular-nums">
                    +91 8279846617
                  </a>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Electronic Inquiries:</span>
                  <a href="mailto:carcarehub0@gmail.com" className="text-zinc-950 font-medium hover:underline">
                    carcarehub0@gmail.com
                  </a>
                </div>
              </div>
              <span className="text-xs text-zinc-500">
                Average reply time: under 30 minutes
              </span>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Minimal Legal Bottom Bar */}
      <footer className="w-full py-10 px-6 sm:px-12 lg:px-20 border-t border-zinc-950/10">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 w-full">
          <div>
            &copy; {new Date().getFullYear()} CarCareHub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-zinc-600 hover:text-black underline decoration-zinc-950/30 underline-offset-4 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <a
              href="/data-deletion.html"
              className="text-zinc-600 hover:text-black underline decoration-zinc-950/30 underline-offset-4 transition-colors"
            >
              Data Deletion
            </a>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl border border-zinc-200 overflow-hidden my-auto max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-zinc-100 flex items-center justify-between shrink-0 bg-zinc-50/50">
              <div>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight">Privacy Policy</h3>
                <p className="text-xs text-zinc-500 mt-0.5">CarCareHub &bull; Customer Data Protection</p>
              </div>
              <button
                onClick={() => setShowPrivacy(false)}
                className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:px-8 py-6 overflow-y-auto text-sm text-zinc-600 leading-relaxed space-y-5">
              <p className="text-[14px] text-zinc-800 leading-relaxed font-medium bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                CarCareHub (&ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we may collect, use, store and protect information when you contact us or use our automotive services.
              </p>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">1. Information we may collect</h4>
                <p className="text-zinc-600">Depending on your interaction with us, we may collect your name, phone number, email address, vehicle make and model, service or parts enquiry details, appointment preferences and information you choose to provide.</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">2. How we use information</h4>
                <p className="text-zinc-600">We may use the information you provide to respond to enquiries, arrange or manage service appointments, prepare estimates or invoices, provide vehicle service updates, respond to parts enquiries and improve our customer service.</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">3. Sharing of information</h4>
                <p className="text-zinc-600">We do not sell your personal information. We may share relevant information with service providers who help us operate our business, or where disclosure is required by applicable law. We aim to limit information shared to what is reasonably necessary.</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">4. Communications</h4>
                <p className="text-zinc-600">If you provide your contact details, we may contact you about your enquiry, appointment, invoice or requested service updates. You may ask us to stop non-essential communications at any time.</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">5. Data security and retention</h4>
                <p className="text-zinc-600">We take reasonable steps to protect information and retain it only for as long as reasonably necessary for the purposes described above or as required by law. No method of electronic storage or transmission is completely secure.</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">6. Your choices and requests</h4>
                <p className="text-zinc-600">You may contact us to request access to, correction of or deletion of personal information we hold, subject to applicable legal requirements. For step-by-step instructions on submitting a data deletion request, please refer to our <a href="/data-deletion.html" className="text-zinc-950 font-semibold underline">Data Deletion Instructions</a>.</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-950 text-[15px] mb-1">7. Contact</h4>
                <p className="text-zinc-600">For privacy-related questions or requests, contact us at <a href="mailto:carcarehub0@gmail.com" className="text-zinc-950 font-semibold underline">carcarehub0@gmail.com</a> or Hazrat Ali Chowk, Ali Nagar, Naugawan Sadat, Uttar Pradesh 244251.</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-zinc-100 flex items-center justify-between shrink-0 bg-zinc-50/50 text-xs text-zinc-500">
              <span>Direct link: <a href="/privacy.html" className="underline font-medium text-zinc-700">carcarehubgp.in/privacy.html</a></span>
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-2 rounded-xl bg-zinc-950 text-white font-medium hover:bg-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
