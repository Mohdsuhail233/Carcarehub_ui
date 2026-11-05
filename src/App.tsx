import { motion, useReducedMotion } from 'motion/react'
import { Phone, Shield, Droplets, CheckCircle2, Sparkles, Award } from 'lucide-react'

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
              Solstice Detailing
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

      {/* ================= 3. ABOUT US SECTION ================= */}
      <section
        id="about"
        className="relative z-10 w-full bg-[#EAE8E3] text-zinc-950 py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-zinc-950/10 overflow-hidden"
      >
        <div className="max-w-[1240px] mx-auto">
          
          {/* Section Header */}
          <div className="mb-14 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 block mb-3">
              About Solstice
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0f1013] leading-[1.08] text-balance max-w-3xl">
              Where Artistry Meets Scientific Precision
            </h2>
          </div>

          {/* 2-Column Split Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (7 Columns) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <p className="text-[17px] sm:text-[19px] text-[#2c2f35] font-normal leading-[1.6] mb-8 text-pretty">
                Founded on the premise that fine automobiles deserve the standard of care usually reserved for aerospace components. We operate a dedicated, climate-controlled cleanroom laboratory where every surface is treated with unhurried rigor and scientific measurement.
              </p>

              {/* 3 Value Pillars */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="size-4.5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-semibold text-[#0f1013] mb-1">
                      Micron-Calibrated Surface Correction
                    </h3>
                    <p className="text-[14px] text-[#555a64] leading-relaxed">
                      Ultrasonic paint depth gauges map clear coat thickness before cutting, eliminating swirl marks without thinning factory finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-4.5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-semibold text-[#0f1013] mb-1">
                      Cleanroom Infrared Ceramic Curing
                    </h3>
                    <p className="text-[14px] text-[#555a64] leading-relaxed">
                      Dual-layer 9H SiO2 coatings cured under precision short-wave infrared heat lamps for an impenetrable, hydrophobic glass armor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="size-4.5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-semibold text-[#0f1013] mb-1">
                      Master Guild Accreditation
                    </h3>
                    <p className="text-[14px] text-[#555a64] leading-relaxed">
                      Every technician holds master certification in paint restoration, adhering to strict multi-point inspection protocols.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-950/15">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                    99.8%
                  </div>
                  <div className="text-xs sm:text-[13px] text-zinc-600 mt-1">
                    Optical Gloss Rating
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                    12+
                  </div>
                  <div className="text-xs sm:text-[13px] text-zinc-600 mt-1">
                    Inspection Gates
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0f1013] tabular-nums">
                    5-Year
                  </div>
                  <div className="text-xs sm:text-[13px] text-zinc-600 mt-1">
                    Ceramic Guarantee
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: Editorial Visuals (5 Columns) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-zinc-950/10 group bg-zinc-900 aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/services/solstice/ceramic.jpg"
                  alt="Precision Ceramic Detailing in Cleanroom"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Studio Tag (Top) */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    Cleanroom Bay 01
                  </span>
                  <span className="text-[11px] font-mono text-white/80 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md">
                    ISO 9001
                  </span>
                </div>

                {/* Bottom Spec Caption Card */}
                <div className="absolute bottom-5 inset-x-5 p-5 rounded-[18px] bg-black/75 backdrop-blur-md border border-white/15 text-white">
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1 font-medium">
                    Current Active Restoration
                  </div>
                  <div className="text-base font-semibold tracking-tight text-white">
                    Multi-Stage Paint Restoration
                  </div>
                  <div className="text-xs text-zinc-300 mt-1 flex items-center justify-between">
                    <span>Target Depth: 125 &micro;m</span>
                    <span className="text-emerald-400 font-mono">Calibrated</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= 4. MINIMAL FOOTER ================= */}
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
