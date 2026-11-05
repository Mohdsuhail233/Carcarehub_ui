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
  Send,
  CheckCircle2
} from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'General Service & Inspection',
    date: '',
    notes: ''
  })

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

      {/* ================= 4. CONTACT & SERVICE BOOKING SECTION ================= */}
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
            className="max-w-2xl mb-16 sm:mb-20"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-500 block mb-3">
              Contact &amp; Bookings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0f1013] leading-[1.08] text-balance mb-4">
              Schedule Service or Speak With a Mechanic
            </h2>
            <p className="text-[16px] sm:text-[17.5px] text-[#4d515a] font-normal leading-[1.6]">
              Book your vehicle into our workshop, request a computerized diagnostic scan, or contact our 24/7 roadside emergency support.
            </p>
          </motion.div>

          {/* 2-Column Split: Workshop Details & Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Workshop Details & Live Dispatch (5 Columns) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              {/* Location Card */}
              <div className="p-7 rounded-[22px] bg-white/60 border border-zinc-950/10 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="size-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0f1013] mb-1">
                      Workshop Facility
                    </h3>
                    <p className="text-sm text-[#555a64] leading-relaxed">
                      Solstice Automotive Engineering<br />
                      500 Terry Francine St, Industrial Bay 04<br />
                      San Francisco, CA 94158
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Direct Contacts Card */}
              <div className="p-7 rounded-[22px] bg-white/60 border border-zinc-950/10 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="size-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0f1013] mb-1">
                      Direct Communication
                    </h3>
                    <div className="text-sm text-[#555a64] space-y-1">
                      <div>
                        <span className="text-zinc-500 text-xs">Direct Workshop:</span>{' '}
                        <a href="tel:1234567890" className="font-medium text-zinc-950 hover:underline tabular-nums">
                          123-456-7890
                        </a>
                      </div>
                      <div>
                        <span className="text-zinc-500 text-xs">Emergency Roadside:</span>{' '}
                        <a href="tel:18007657842" className="font-medium text-emerald-700 hover:underline tabular-nums">
                          1-800-SOLSTICE
                        </a>
                      </div>
                      <div className="pt-1">
                        <span className="text-zinc-500 text-xs">Direct Email:</span>{' '}
                        <a href="mailto:service@solsticeauto.com" className="font-medium text-zinc-950 hover:underline">
                          service@solsticeauto.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-7 rounded-[22px] bg-white/60 border border-zinc-950/10 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl bg-zinc-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="size-5 stroke-[2.2]" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-base font-semibold text-[#0f1013] mb-2">
                      Hours of Operation
                    </h3>
                    <div className="text-xs sm:text-sm text-[#555a64] space-y-1.5 w-full">
                      <div className="flex justify-between items-center py-0.5 border-b border-zinc-950/5">
                        <span>Monday - Friday</span>
                        <span className="font-mono text-zinc-900 font-medium">7:30 AM - 6:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-zinc-950/5">
                        <span>Saturday</span>
                        <span className="font-mono text-zinc-900 font-medium">8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span>Sunday</span>
                        <span className="text-emerald-700 font-medium">Emergency Roadside Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Workshop Status Pill */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900 text-white text-xs font-medium">
                <span className="relative flex size-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500" />
                </span>
                <span>Service Bays Open &bull; Next Available Slot Today</span>
              </div>

            </motion.div>

            {/* Right Column: Interactive Service Appointment Form (7 Columns) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="p-8 sm:p-10 rounded-[26px] bg-white border border-zinc-950/10 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
                
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="size-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                      <CheckCircle2 className="size-8 stroke-[2.2]" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                      Booking Request Received
                    </h3>
                    <p className="text-zinc-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
                      Thank you, <span className="font-semibold text-zinc-900">{formData.name || 'valued client'}</span>. Our service advisor is reviewing your request for your <span className="font-semibold text-zinc-900">{formData.vehicle || 'vehicle'}</span> and will call you within 30 minutes to confirm your bay slot.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false)
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          vehicle: '',
                          service: 'General Service & Inspection',
                          date: '',
                          notes: ''
                        })
                      }}
                      className="px-6 py-2.5 rounded-xl bg-zinc-950 text-white text-xs font-medium hover:bg-zinc-800 transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setFormSubmitted(true)
                    }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-1">
                        Request a Service Appointment
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Fill out your vehicle specs and required service below.
                      </p>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Mercer"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="123-456-7890"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all tabular-nums"
                        />
                      </div>
                    </div>

                    {/* Email & Vehicle Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                          Vehicle Make &amp; Model *
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.vehicle}
                          onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                          placeholder="e.g. 2021 Porsche Taycan"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Type & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                          Service Category *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all cursor-pointer"
                        >
                          <option value="General Service & Inspection">General Service &amp; Inspection</option>
                          <option value="Computerized Engine Diagnostics">Computerized Engine Diagnostics</option>
                          <option value="Mechanical & Transmission Repair">Mechanical &amp; Transmission Repair</option>
                          <option value="Brake & Suspension Calibration">Brake &amp; Suspension Calibration</option>
                          <option value="Performance Tuning & Dyno">Performance Tuning</option>
                          <option value="Emergency Roadside Repair">Emergency Roadside Repair</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all"
                        />
                      </div>
                    </div>

                    {/* Notes / Symptoms */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                        Issue Description / Specific Requests
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Please describe any warning lights, noises, vibration, or required routine maintenance..."
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0f1013] text-white text-sm font-semibold tracking-wide hover:bg-black hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Confirm Booking Request</span>
                      <Send className="size-4" />
                    </button>

                    <p className="text-[11.5px] text-zinc-500 text-center">
                      We respect your privacy. No spam. You will only be contacted regarding this service appointment.
                    </p>

                  </form>
                )}

              </div>
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
