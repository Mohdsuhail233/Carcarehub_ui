import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { cn } from './lib/utils'
import {
  Calendar,
  ShieldCheck,
  Leaf,
  Award,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
  X,
  Clock,
  MapPin,
  Car as CarIcon,
  ChevronRight,
  Phone,
  Droplets,
  Cog,
  Disc,
  Wind,
  Paintbrush,
  Gauge,
  Check
} from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()
  const [activeNav, setActiveNav] = useState('Home')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isReviewsOpen, setIsReviewsOpen] = useState(false)

  // Booking Flow State
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedVehicle, setSelectedVehicle] = useState('SUV / Crossover')
  const [selectedPackage, setSelectedPackage] = useState('General Service')
  const [selectedDate, setSelectedDate] = useState('Today (Within 2 hrs)')
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const navItems = ['Home', 'Services', 'About Us', 'Reviews', 'Contact']

  const handleNavClick = (item: string) => {
    setActiveNav(item)
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (item === 'Services') {
      const el = document.getElementById('services-section')
      el?.scrollIntoView({ behavior: 'smooth' })
    } else if (item === 'About Us') {
      const el = document.getElementById('about-section')
      el?.scrollIntoView({ behavior: 'smooth' })
    } else if (item === 'Reviews') {
      const el = document.getElementById('reviews-section')
      el?.scrollIntoView({ behavior: 'smooth' })
    } else if (item === 'Contact') {
      setIsBookingOpen(true)
    }
  }

  // Auto-update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      const servicesEl = document.getElementById('services-section')
      const aboutEl = document.getElementById('about-section')
      const reviewsEl = document.getElementById('reviews-section')

      if (reviewsEl && scrollPos >= reviewsEl.offsetTop) {
        setActiveNav('Reviews')
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveNav('About Us')
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop) {
        setActiveNav('Services')
      } else {
        setActiveNav('Home')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleServiceSelect = (serviceName: string) => {
    setSelectedPackage(serviceName)
    setIsBookingOpen(true)
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingSuccess(true)
  }

  const resetBooking = () => {
    setBookingSuccess(false)
    setBookingStep(1)
    setIsBookingOpen(false)
  }

  // 6 Core Services from user's reference image
  const servicesList = [
    {
      id: 'general',
      title: 'General Service',
      desc: 'Periodic maintenance & health check.',
      icon: Droplets,
      image: '/services/oil-exact.png',
      price: '$89'
    },
    {
      id: 'engine',
      title: 'Engine Repair',
      desc: 'Expert engine diagnostics & repair.',
      icon: Cog,
      image: '/services/engine-exact.png',
      price: '$189'
    },
    {
      id: 'brake',
      title: 'Brake Service',
      desc: 'Brake inspection, pad & disc replacement.',
      icon: Disc,
      image: '/services/brake-exact.png',
      price: '$129'
    },
    {
      id: 'ac',
      title: 'AC Service',
      desc: 'Cooling system check & gas refill.',
      icon: Wind,
      image: '/services/ac-exact.png',
      price: '$99'
    },
    {
      id: 'denting',
      title: 'Denting & Painting',
      desc: 'Remove dents & restore original finish.',
      icon: Paintbrush,
      image: '/services/paint-exact.png',
      price: '$249'
    },
    {
      id: 'diagnostics',
      title: 'Car Diagnostics',
      desc: 'Advanced scanning & issue detection.',
      icon: Gauge,
      image: '/services/diagnostics-exact.png',
      price: '$69'
    }
  ]

  return (
    <div className="min-h-dvh w-full bg-white text-zinc-900 flex flex-col relative overflow-x-hidden selection:bg-zinc-950 selection:text-white font-sans antialiased">
      
      {/* ================= FLOATING LUXURY NAVBAR ================= */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-40 px-4 sm:px-8 max-w-[1360px] mx-auto pointer-events-none">
        <div className="w-full bg-white/92 hover:bg-white backdrop-blur-xl border border-zinc-200/80 rounded-full sm:rounded-2xl px-5 sm:px-8 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto transition-all">
          
          {/* Left: Brand Logo */}
          <div
            className="flex flex-col cursor-pointer select-none"
            onClick={() => handleNavClick('Home')}
          >
            <span className="font-extrabold text-[15px] sm:text-base tracking-[0.24em] text-zinc-950 uppercase leading-none font-sans">
              ATELIER
            </span>
            <span className="text-[8px] sm:text-[8.5px] font-semibold tracking-[0.26em] text-zinc-400 uppercase mt-0.5 leading-none">
              MOBILE DETAIL
            </span>
          </div>

          {/* Right Group: Nav Items + Book Now Button */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-6 sm:gap-7 text-[12.5px] sm:text-[13px]">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    'relative py-1 transition-colors flex flex-col items-center cursor-pointer',
                    activeNav === item
                      ? 'text-zinc-950 font-bold'
                      : 'text-zinc-500 font-normal hover:text-zinc-950'
                  )}
                >
                  <span>{item}</span>
                  {activeNav === item && (
                    <motion.span
                      layoutId="nav-underline"
                      className="w-3.5 h-[2px] bg-zinc-950 rounded-full mt-0.5"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Book Now Button */}
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => setIsBookingOpen(true)}
              className="group inline-flex items-center gap-2 bg-[#0f1012] hover:bg-black text-white text-[12px] font-medium pl-4 pr-3.5 py-2 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="size-3.5 text-amber-200/90" />
              <span>Book Now</span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-[12px]">
                &rarr;
              </span>
            </motion.button>
          </div>

        </div>
      </header>

      {/* ================= HERO VIEW (EXACT LUXURY CAR SCREENSHOT) ================= */}
      <section id="home" className="relative min-h-dvh w-full flex flex-col justify-between pt-24 sm:pt-28 pb-6 px-6 sm:px-12 lg:px-20 overflow-hidden bg-white">
        
        {/* Background Car Image (2nd Car: Studio HD Luxury SUV) */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundPosition: 'right 25% center',
          }}
        />

        {/* Pure Clean White Gradient: Crisp Left Typography Fade */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 md:via-white/70 to-transparent w-full md:w-[62%] pointer-events-none" />

        {/* Top Fade for Floating Navbar */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/80 via-white/30 to-transparent pointer-events-none z-0" />

        {/* Left Hero Content */}
        <main className="relative z-10 w-full py-8 sm:py-12 md:py-16 flex-1 flex flex-col justify-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xs mb-5 sm:mb-6">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-zinc-800 tracking-tight">
                Available Today
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-bold text-zinc-950 tracking-[-0.035em] leading-[1.04] text-balance font-sans">
              Premium care
              <br />
              at your door.
            </h1>

            {/* Subheading */}
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-zinc-600 font-normal max-w-sm sm:max-w-md leading-relaxed text-pretty">
              Professional mobile detailing that fits your life.
            </p>

            {/* Action Row */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
              
              {/* Book Mobile Service Button */}
              <motion.button
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex items-center gap-3.5 bg-zinc-950 hover:bg-black text-white px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-[13px] font-semibold shadow-lg shadow-zinc-950/15 hover:shadow-zinc-950/25 transition-all cursor-pointer"
              >
                <div className="size-5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <Calendar className="size-4" />
                </div>
                <span>Book Mobile Service</span>
                <ArrowRight className="size-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Social Proof Pill */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => setIsReviewsOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2.5 bg-white/90 hover:bg-white backdrop-blur-md border border-zinc-200/80 rounded-full px-3.5 py-2 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white object-cover"
                    src="/avatars/avatar1.jpg"
                    alt="Client avatar 1"
                  />
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white object-cover"
                    src="/avatars/avatar2.jpg"
                    alt="Client avatar 2"
                  />
                  <img
                    className="inline-block size-6 rounded-full ring-2 ring-white object-cover"
                    src="/avatars/avatar3.jpg"
                    alt="Client avatar 3"
                  />
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <Star className="size-3.5 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-zinc-950 tabular-nums">4.9</span>
                  <span className="text-zinc-500 font-normal tabular-nums">1,250+ reviews</span>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </main>

        {/* ================= BOTTOM FLOATING CARD / DOCK ================= */}
        <footer className="relative z-10 w-full pt-4 pb-2">
          <div className="w-full bg-white/90 hover:bg-white backdrop-blur-xl border border-zinc-200/80 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.08)] rounded-2xl sm:rounded-[26px] p-4 sm:p-5 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/70">
              
              {/* Feature 1: Protected */}
              <div className="flex items-center gap-4 py-2.5 md:py-1 px-3 sm:px-6 first:pl-2">
                <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
                  <ShieldCheck className="size-4 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-bold text-[13px] sm:text-sm text-zinc-900 leading-tight text-balance">
                    Protected
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 text-pretty">
                    Licensed & insured
                  </p>
                </div>
              </div>

              {/* Feature 2: Safe Products */}
              <div className="flex items-center gap-4 py-2.5 md:py-1 px-3 sm:px-6">
                <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
                  <Leaf className="size-4 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-bold text-[13px] sm:text-sm text-zinc-900 leading-tight text-balance">
                    Safe Products
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 text-pretty">
                    Paint-safe detailing
                  </p>
                </div>
              </div>

              {/* Feature 3: Expert Care */}
              <div className="flex items-center gap-4 py-2.5 md:py-1 px-3 sm:px-6 last:pr-2">
                <div className="size-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
                  <Award className="size-4 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-bold text-[13px] sm:text-sm text-zinc-900 leading-tight text-balance">
                    Expert Care
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 text-pretty">
                    Handled by pros
                  </p>
                </div>
              </div>

            </div>
          </div>
        </footer>

      </section>

      {/* ================= 1. OUR SERVICES HERO BANNER (#servicesHero) ================= */}
      <div id="services-section" className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pt-20 sm:pt-28 pb-10 max-w-[1360px] mx-auto">
        <section id="servicesHero" className="hero-banner relative rounded-2xl sm:rounded-[28px] overflow-hidden min-h-[220px] sm:min-h-[250px] lg:min-h-[268px] flex items-center mb-7 border border-zinc-200/60 shadow-xs">
          <img
            src="/images/services-hero-car.jpg"
            alt="Luxury Dark Sports Sedan"
            className="absolute inset-0 w-full h-full object-cover object-right sm:object-[70%_center]"
          />
          <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-r from-[#E5E3DF] via-[#E5E3DF]/90 sm:via-[#E5E3DF]/80 to-transparent pointer-events-none w-[75%] sm:w-[60%]"></div>

          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 py-8 sm:py-10 max-w-xl">
            <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-[#0f0f10] leading-[1.12] mb-3">
              Our Services
            </h1>
            <p className="text-[15.5px] sm:text-[17.5px] text-[#52565e] font-normal leading-[1.48] max-w-[430px]">
              Complete car care &amp; maintenance solutions for long-lasting performance.
            </p>
          </div>
        </section>

        {/* ================= 2. SERVICES 3x2 CARDS GRID (#servicesGridSection) ================= */}
        <section id="servicesGridSection" aria-label="Car Care Services">
          <div id="servicesGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {/* Card 1: General Service */}
            <article
              onClick={() => handleServiceSelect('General Service')}
              className="service-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group bg-white border border-zinc-200/80 rounded-[22px] hover:border-zinc-300 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col justify-between flex-1 min-w-0 py-1 pl-1">
                <div className="w-12 h-12 rounded-full bg-[#f0f1f3] flex items-center justify-center mb-5 text-[#1f242d] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  {/* Wrench Icon SVG */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="4"/>
                    <path d="M14.5 9.5 9.5 14.5"/>
                    <path d="M15.5 7.5a2.12 2.12 0 0 1 0 3l-1-1-1-1a2.12 2.12 0 0 1 3 0Z"/>
                    <path d="M8.5 16.5a2.12 2.12 0 0 1 0-3l1 1 1 1a2.12 2.12 0 0 1-3 0Z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] sm:text-[19px] font-bold text-[#141414] mb-1.5">General Service</h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#686d76]">Periodic maintenance &amp; health check.</p>
                </div>
              </div>
              <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] shrink-0 rounded-[16px] overflow-hidden bg-gray-100">
                <img src="/images/general-service.jpg" alt="General Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </article>

            {/* Card 2: Engine Repair */}
            <article
              onClick={() => handleServiceSelect('Engine Repair')}
              className="service-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group bg-white border border-zinc-200/80 rounded-[22px] hover:border-zinc-300 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col justify-between flex-1 min-w-0 py-1 pl-1">
                <div className="w-12 h-12 rounded-full bg-[#f0f1f3] flex items-center justify-center mb-5 text-[#1f242d] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3L4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4z"/>
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 7v2M12 15v2M7 12h2M15 12h2"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] sm:text-[19px] font-bold text-[#141414] mb-1.5">Engine Repair</h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#686d76]">Expert engine diagnostics &amp; repair.</p>
                </div>
              </div>
              <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] shrink-0 rounded-[16px] overflow-hidden bg-gray-100">
                <img src="/images/engine-repair.jpg" alt="Engine Repair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </article>

            {/* Card 3: Brake Service */}
            <article
              onClick={() => handleServiceSelect('Brake Service')}
              className="service-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group bg-white border border-zinc-200/80 rounded-[22px] hover:border-zinc-300 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col justify-between flex-1 min-w-0 py-1 pl-1">
                <div className="w-12 h-12 rounded-full bg-[#f0f1f3] flex items-center justify-center mb-5 text-[#1f242d] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="8" cy="8" r="2.5"/>
                    <circle cx="16" cy="8" r="2.5"/>
                    <circle cx="8" cy="16" r="2.5"/>
                    <circle cx="16" cy="16" r="2.5"/>
                    <path d="M10.5 8h3M8 10.5v3M16 10.5v3M10.5 16h3"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] sm:text-[19px] font-bold text-[#141414] mb-1.5">Brake Service</h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#686d76]">Brake inspection, pad &amp; disc replacement.</p>
                </div>
              </div>
              <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] shrink-0 rounded-[16px] overflow-hidden bg-gray-100">
                <img src="/images/brake-service.jpg" alt="Brake Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </article>

            {/* Card 4: AC Service */}
            <article
              onClick={() => handleServiceSelect('AC Service')}
              className="service-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group bg-white border border-zinc-200/80 rounded-[22px] hover:border-zinc-300 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col justify-between flex-1 min-w-0 py-1 pl-1">
                <div className="w-12 h-12 rounded-full bg-[#f0f1f3] flex items-center justify-center mb-5 text-[#1f242d] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 4a2 2 0 1 1 4 0c0 1.5-1.5 2.5-2.5 3.5L11 12a3.5 3.5 0 1 1-5-5l4.5-4.5C11.5 1.5 12.5 4 14 4z"/>
                    <circle cx="8.5" cy="14.5" r="1"/>
                    <path d="M15 14h4M17 12v4"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] sm:text-[19px] font-bold text-[#141414] mb-1.5">AC Service</h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#686d76]">Cooling system check &amp; gas refill.</p>
                </div>
              </div>
              <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] shrink-0 rounded-[16px] overflow-hidden bg-gray-100">
                <img src="/images/ac-service.jpg" alt="AC Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </article>

            {/* Card 5: Denting & Painting */}
            <article
              onClick={() => handleServiceSelect('Denting & Painting')}
              className="service-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group bg-white border border-zinc-200/80 rounded-[22px] hover:border-zinc-300 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col justify-between flex-1 min-w-0 py-1 pl-1">
                <div className="w-12 h-12 rounded-full bg-[#f0f1f3] flex items-center justify-center mb-5 text-[#1f242d] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3v5m0 0L9 6m3 2 3-2"/>
                    <rect x="6" y="11" width="12" height="5" rx="1.5"/>
                    <path d="M8 16v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3"/>
                    <circle cx="9.5" cy="8.5" r="1"/>
                    <circle cx="14.5" cy="8.5" r="1"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] sm:text-[19px] font-bold text-[#141414] mb-1.5">Denting &amp; Painting</h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#686d76]">Remove dents &amp; restore original finish.</p>
                </div>
              </div>
              <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] shrink-0 rounded-[16px] overflow-hidden bg-gray-100">
                <img src="/images/denting-painting.jpg" alt="Denting and Painting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </article>

            {/* Card 6: Car Diagnostics */}
            <article
              onClick={() => handleServiceSelect('Car Diagnostics')}
              className="service-card p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group bg-white border border-zinc-200/80 rounded-[22px] hover:border-zinc-300 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col justify-between flex-1 min-w-0 py-1 pl-1">
                <div className="w-12 h-12 rounded-full bg-[#f0f1f3] flex items-center justify-center mb-5 text-[#1f242d] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 7l2-3h10l2 3v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z"/>
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M8 17h8"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[18px] sm:text-[19px] font-bold text-[#141414] mb-1.5">Car Diagnostics</h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#686d76]">Advanced scanning &amp; issue detection.</p>
                </div>
              </div>
              <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] shrink-0 rounded-[16px] overflow-hidden bg-gray-100">
                <img src="/images/car-diagnostics.jpg" alt="Car Diagnostics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </article>

          </div>
        </section>
      </div>

      {/* ================= ABOUT US / CONCIERGE PROCESS ================= */}
      <section id="about-section" className="w-full bg-zinc-50/70 border-y border-zinc-200/60 py-20 sm:py-28 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1360px] mx-auto">
          
          <div className="max-w-xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight text-balance">
              Concierge Car Care.
              <br />
              Zero Disruption.
            </h2>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed text-pretty">
              We bring professional studio-grade equipment directly to your driveway, condo bay, or office park.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'You Choose the Location',
                desc: 'Book a 2-hour window online. Park at home or at work; our technicians handle everything on-site.'
              },
              {
                step: '02',
                title: 'Fully Autonomous Van',
                desc: 'Our vans carry filtered spot-free deionized water, ultra-quiet generator power, and medical-grade steam.'
              },
              {
                step: '03',
                title: 'Flawless Showroom Handover',
                desc: 'Final inspection checklist with paint thickness scan, leather nourishment, and ceramic glass treatment.'
              }
            ].map((col) => (
              <div key={col.step} className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/80 shadow-xs">
                <span className="font-mono text-xs font-bold text-zinc-400 tracking-wider">
                  {col.step}
                </span>
                <h3 className="mt-4 font-bold text-base sm:text-lg text-zinc-950 text-balance">
                  {col.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed text-pretty">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= VERIFIED REVIEWS SECTION ================= */}
      <section id="reviews-section" className="w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-[1360px] mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-3 border border-amber-200/60">
              <Star className="size-3.5 fill-amber-500 text-amber-500" />
              <span className="tabular-nums">4.9 / 5.0 Verified Rating</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight text-balance">
              Trusted by 1,250+ Luxury Drivers
            </h2>
          </div>
          <button
            onClick={() => setIsReviewsOpen(true)}
            className="text-xs font-semibold text-zinc-900 hover:text-black flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>View all reviews</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Marcus Vance',
              car: 'Tesla Model Y Performance',
              date: 'Yesterday',
              comment: 'They showed up in my driveway on time with their own water & electricity. The paint depth and ceramic reflection looked better than when I picked it up from the dealer.'
            },
            {
              name: 'Elena Rostova',
              car: 'Porsche Taycan 4S',
              date: '3 days ago',
              comment: 'Incredible attention to detail. No harsh chemicals, zero water marks, and the interior leather treatment feels completely revitalized.'
            },
            {
              name: 'David Chen',
              car: 'BMW M3 Competition',
              date: '1 week ago',
              comment: 'Booking took 30 seconds. Seamless doorstep experience while I was working from home. Will never go back to standard car washes.'
            }
          ].map((rev, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200/80 text-xs shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-zinc-950">{rev.name}</span>
                  <span className="text-zinc-400 text-[11px] tabular-nums">{rev.date}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-amber-500" />
                  ))}
                  <span className="ml-2 text-[11px] font-medium text-zinc-500">{rev.car}</span>
                </div>
                <p className="text-zinc-600 leading-relaxed text-pretty text-xs sm:text-[13px]">
                  {rev.comment}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-2 text-zinc-400 text-[11px]">
                <Check className="size-3.5 text-emerald-500" />
                <span>Verified Service Record</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= MINIMAL FOOTER ================= */}
      <footer className="w-full border-t border-zinc-200/80 bg-white py-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-bold text-zinc-950 tracking-[0.2em] text-sm uppercase">
              ATELIER
            </span>
            <span className="text-[9px] tracking-[0.24em] text-zinc-400 uppercase">
              MOBILE DETAIL
            </span>
          </div>

          <div className="flex items-center gap-6 text-zinc-600 text-xs">
            <button onClick={() => handleNavClick('Home')} className="hover:text-zinc-950 cursor-pointer">Home</button>
            <button onClick={() => handleNavClick('Services')} className="hover:text-zinc-950 cursor-pointer">Services</button>
            <button onClick={() => handleNavClick('About Us')} className="hover:text-zinc-950 cursor-pointer">About Us</button>
            <button onClick={() => handleNavClick('Reviews')} className="hover:text-zinc-950 cursor-pointer">Reviews</button>
            <button onClick={() => handleNavClick('Contact')} className="hover:text-zinc-950 cursor-pointer">Book Service</button>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Phone className="size-3 text-zinc-400" />
              <span className="tabular-nums text-zinc-700 font-medium">(800) 555-CARE</span>
            </div>
            <span>&bull;</span>
            <span>&copy; 2026 Atelier. All rights reserved.</span>
          </div>

        </div>
      </footer>

      {/* ================= BOOKING MODAL WIZARD ================= */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-hidden"
            >
              <button
                onClick={resetBooking}
                aria-label="Close booking dialog"
                className="absolute top-5 right-5 size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>

              {!bookingSuccess ? (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-semibold uppercase tracking-wider mb-2">
                      Step {bookingStep} of 3
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-950 text-balance">
                      Book Doorstep Detailing
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1 text-pretty">
                      Certified technicians arrive fully equipped with water, power & high-grade tools.
                    </p>
                  </div>

                  {/* Step 1 */}
                  {bookingStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-2">
                          Select Vehicle Type
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {['Sedan / Coupe', 'SUV / Crossover', 'Truck / Van', 'Luxury / EV'].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setSelectedVehicle(v)}
                              className={cn(
                                'p-3 rounded-xl border text-left font-medium transition-all flex items-center justify-between cursor-pointer',
                                selectedVehicle === v
                                  ? 'border-zinc-950 bg-zinc-950 text-white shadow-xs'
                                  : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50/50 text-zinc-800'
                              )}
                            >
                              <span>{v}</span>
                              {selectedVehicle === v && <CheckCircle2 className="size-3.5" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-2">
                          Choose Detailing Package
                        </label>
                        <div className="space-y-2">
                          {servicesList.map((pkg) => (
                            <div
                              key={pkg.title}
                              onClick={() => setSelectedPackage(pkg.title)}
                              className={cn(
                                'p-3 rounded-xl border cursor-pointer transition-all',
                                selectedPackage === pkg.title
                                  ? 'border-zinc-950 bg-zinc-50 ring-1 ring-zinc-950'
                                  : 'border-zinc-200 hover:border-zinc-300'
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-sm text-zinc-950">{pkg.title}</span>
                                <span className="font-extrabold text-sm text-zinc-900 tabular-nums">{pkg.price}</span>
                              </div>
                              <p className="text-xs text-zinc-500 mt-0.5 text-pretty">{pkg.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setBookingStep(2)}
                        className="w-full mt-2 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                      >
                        <span>Continue to Schedule</span>
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  )}

                  {/* Step 2 */}
                  {bookingStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-2">
                          Select Available Slot
                        </label>
                        <div className="space-y-2">
                          {[
                            { time: 'Today (Within 2 hrs)', badge: 'Fastest arrival' },
                            { time: 'Tomorrow • 9:00 AM - 11:30 AM', badge: 'Morning slot' },
                            { time: 'Tomorrow • 2:00 PM - 4:30 PM', badge: 'Afternoon slot' },
                            { time: 'Saturday • 10:00 AM - 12:30 PM', badge: 'Weekend slot' }
                          ].map((slot) => (
                            <div
                              key={slot.time}
                              onClick={() => setSelectedDate(slot.time)}
                              className={cn(
                                'p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all',
                                selectedDate === slot.time
                                  ? 'border-zinc-950 bg-zinc-50 ring-1 ring-zinc-950 font-semibold'
                                  : 'border-zinc-200 hover:border-zinc-300'
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <Clock className="size-3.5 text-zinc-400" />
                                <span className="tabular-nums">{slot.time}</span>
                              </div>
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                                {slot.badge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => setBookingStep(1)}
                          className="py-3 px-4 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-xs font-semibold text-zinc-700 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setBookingStep(3)}
                          className="flex-1 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                        >
                          <span>Continue to Address</span>
                          <ChevronRight className="size-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {bookingStep === 3 && (
                    <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Julian Hayes"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:ring-2 focus:ring-zinc-950 focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs font-semibold text-zinc-700 block mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(555) 234-5678"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:ring-2 focus:ring-zinc-950 focus:outline-none tabular-nums"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-zinc-700 block mb-1">
                            Vehicle Model & Year
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 2024 Porsche Taycan"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:ring-2 focus:ring-zinc-950 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-1">
                          Doorstep Service Address
                        </label>
                        <div className="relative">
                          <MapPin className="size-4 text-zinc-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Home driveway or private office parking"
                            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:ring-2 focus:ring-zinc-950 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setBookingStep(2)}
                          className="py-3 px-4 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-xs font-semibold text-zinc-700 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                        >
                          <CheckCircle2 className="size-4 text-emerald-400" />
                          <span>Confirm Mobile Service</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="size-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 text-balance">
                    Appointment Confirmed!
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed text-pretty">
                    Our mobile detailing van is scheduled. A confirmation SMS with GPS live tracking has been sent to your number.
                  </p>
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-left text-xs max-w-xs mx-auto space-y-2">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <CarIcon className="size-4 text-zinc-400" />
                      <span>{selectedVehicle} &bull; {selectedPackage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Clock className="size-4 text-zinc-400" />
                      <span className="tabular-nums">{selectedDate}</span>
                    </div>
                  </div>
                  <button
                    onClick={resetBooking}
                    className="mt-4 px-6 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= REVIEWS MODAL ================= */}
      <AnimatePresence>
        {isReviewsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative"
            >
              <button
                onClick={() => setIsReviewsOpen(false)}
                aria-label="Close reviews dialog"
                className="absolute top-5 right-5 size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500">
                  <Star className="size-6 fill-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 text-balance tabular-nums">4.9 / 5.0 Rating</h3>
                  <p className="text-xs text-zinc-500 text-pretty tabular-nums">Based on 1,250+ verified luxury vehicle reviews</p>
                </div>
              </div>

              <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
                {[
                  {
                    name: 'Marcus Vance',
                    car: 'Tesla Model Y Performance',
                    date: 'Yesterday',
                    comment: 'They showed up in my driveway on time with their own water & electricity. The paint depth and ceramic reflection looked better than when I picked it up from the dealer.'
                  },
                  {
                    name: 'Elena Rostova',
                    car: 'Porsche Taycan 4S',
                    date: '3 days ago',
                    comment: 'Incredible attention to detail. No harsh chemicals, zero water marks, and the interior leather treatment feels completely revitalized.'
                  },
                  {
                    name: 'David Chen',
                    car: 'BMW M3 Competition',
                    date: '1 week ago',
                    comment: 'Booking took 30 seconds. Seamless doorstep experience while I was working from home. Will never go back to standard car washes.'
                  }
                ].map((rev, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-zinc-900">{rev.name}</span>
                      <span className="text-zinc-400 text-[11px] tabular-nums">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="size-3 fill-amber-500" />
                      ))}
                      <span className="ml-2 text-[11px] font-medium text-zinc-500">{rev.car}</span>
                    </div>
                    <p className="text-zinc-600 leading-relaxed text-pretty">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
