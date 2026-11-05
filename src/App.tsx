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
  ArrowUpRight
} from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()

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
        <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between">
          <div className="cursor-pointer select-none">
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-950">
              Solstice Automotive
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
            <span>Explore Services</span>
            <span className="text-[11px]">&darr;</span>
          </a>
        </div>

      </section>

      {/* ================= 2. SERVICES SECTION (EXACT MATCH WITH USER REFERENCE IMAGE & HERO BG COLOR) ================= */}
      <section
        id="services"
        className="relative z-10 w-full bg-[#EAE8E3] text-zinc-950 py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-zinc-950/10"
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Row 1: Diagnosis | Repairs | Maintenance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 lg:gap-16">
            {servicesRow1.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer select-none flex flex-col justify-start"
              >
                {/* Minimalist Tech Icon */}
                <div className="group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2 className="text-[26px] sm:text-[30px] lg:text-[33px] font-normal tracking-[-0.025em] text-[#0f1013] mt-6 sm:mt-7 mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h2>

                {/* Subtitle / Description */}
                <p className="text-[14px] sm:text-[15px] text-[#555a64] font-normal leading-normal">
                  {service.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Clean Thin Divider Line Between Rows (Exact match with reference) */}
          <div className="w-full border-t border-zinc-950/15 my-14 sm:my-18 lg:my-20" />

          {/* Row 2: Tuning | Emergency Assistance | Consultation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 lg:gap-16">
            {servicesRow2.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer select-none flex flex-col justify-start"
              >
                {/* Minimalist Tech Icon */}
                <div className="group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2 className="text-[26px] sm:text-[30px] lg:text-[33px] font-normal tracking-[-0.025em] text-[#0f1013] mt-6 sm:mt-7 mb-2 max-w-[260px] group-hover:text-black transition-colors">
                  {service.title}
                </h2>

                {/* Subtitle / Description */}
                <p className="text-[14px] sm:text-[15px] text-[#555a64] font-normal leading-normal">
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
          
          {/* Section Header & Narrative */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16 sm:mb-20"
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

          {/* 3 Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14">
            
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-start"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <Cpu className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Advanced Computerized Diagnostics
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed">
                OBD-II telemetry and live sensor mapping detect transmission, ECU, and electrical faults before they escalate into costly failures.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-start"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <Wrench className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Mechanical Overhauls &amp; OEM Standards
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed">
                Engine rebuilding, suspension calibration, and brake service aligned to exact factory torque specifications using genuine manufacturer parts.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-start"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Certified Mechanics &amp; Roadside Care
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed">
                Transparent digital inspection reports, upfront repair quotes with no hidden fees, and dedicated 24/7 emergency roadside assistance.
              </p>
            </motion.div>

          </div>

          {/* Thin Divider Line */}
          <div className="w-full border-t border-zinc-950/15 my-14 sm:my-18" />

          {/* 4-Column Verified Workshop Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                15,000+
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
                48-Point
              </div>
              <div className="text-xs sm:text-[13.5px] text-zinc-600 mt-1 font-medium">
                Electronic Inspection Scan
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
          
          {/* Section Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-14 sm:mb-18"
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

          {/* Large Prominent Calling Banner */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 sm:mb-18 p-8 sm:p-12 rounded-[28px] bg-white border border-zinc-950/10 shadow-[0_12px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Direct Workshop Hotline &bull; Live Dispatch
              </div>
              <a
                href="tel:1234567890"
                className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-zinc-950 hover:opacity-80 transition-opacity tabular-nums underline decoration-zinc-950/20 underline-offset-8"
              >
                123-456-7890
              </a>
              <p className="text-sm text-zinc-500 mt-3">
                Emergency 24/7 Roadside Assistance: <span className="font-semibold text-emerald-800">1-800-SOLSTICE</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:1234567890"
                className="px-7 py-4 rounded-full bg-[#0f1013] text-white text-sm font-semibold tracking-wide hover:bg-black hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="size-4" />
                <span>Call Workshop Now</span>
              </a>
              <a
                href="mailto:service@solsticeauto.com"
                className="px-7 py-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Send Email</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>

          {/* 3-Column Minimalist Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14">
            
            {/* Column 1: Facility Location */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-start"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6">
                <MapPin className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Workshop Facility
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-[#555a64] leading-relaxed mb-4">
                Solstice Automotive Engineering<br />
                500 Terry Francine St, Industrial Bay 04<br />
                San Francisco, CA 94158
              </p>
              <a
                href="https://maps.google.com/?q=500+Terry+Francine+St,+San+Francisco,+CA+94158"
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
              className="flex flex-col justify-start"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6">
                <Clock className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Hours of Operation
              </h3>
              <div className="text-[14px] text-[#555a64] space-y-1.5 mb-4">
                <div className="flex justify-between">
                  <span>Mon &ndash; Fri:</span>
                  <span className="font-mono text-zinc-900 font-medium">7:30 AM &ndash; 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-mono text-zinc-900 font-medium">8:00 AM &ndash; 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-emerald-800 font-medium">Emergency Roadside</span>
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
              className="flex flex-col justify-start"
            >
              <div className="size-11 rounded-2xl bg-[#0f1013] text-white flex items-center justify-center shrink-0 mb-6">
                <Phone className="size-5 stroke-[2.2]" />
              </div>
              <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#0f1013] mb-2 tracking-tight">
                Direct Channels
              </h3>
              <div className="text-[14px] text-[#555a64] space-y-2 mb-4">
                <div>
                  <span className="text-xs text-zinc-500 block">General Workshop Desk:</span>
                  <a href="tel:1234567890" className="text-zinc-950 font-medium hover:underline tabular-nums">
                    123-456-7890
                  </a>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Electronic Inquiries:</span>
                  <a href="mailto:service@solsticeauto.com" className="text-zinc-950 font-medium hover:underline">
                    service@solsticeauto.com
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

      {/* ================= 5. MINIMAL FOOTER ================= */}
      <footer
        className="w-full bg-[#0a0a0c] text-zinc-500 py-16 px-6 sm:px-12 lg:px-20 border-t border-zinc-800 text-xs"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div>
            <span className="font-bold text-white text-base tracking-tight block">
              Solstice Automotive
            </span>
            <p className="text-zinc-500 mt-1">
              Full-Service Garage &amp; Engineering Workshop
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
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
