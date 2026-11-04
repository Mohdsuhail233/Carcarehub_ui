import { useState } from 'react'
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
  Gauge
} from 'lucide-react'

export default function App() {
  const [activeNav, setActiveNav] = useState('Services')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isReviewsOpen, setIsReviewsOpen] = useState(false)

  // Booking Flow State
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedVehicle, setSelectedVehicle] = useState('SUV / Crossover')
  const [selectedPackage, setSelectedPackage] = useState('Signature Atelier')
  const [selectedDate, setSelectedDate] = useState('Today (Within 2 hrs)')
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const navItems = ['Home', 'Services', 'About Us', 'Reviews', 'Contact']

  const handleNavClick = (item: string) => {
    setActiveNav(item)
    if (item === 'Reviews') setIsReviewsOpen(true)
    if (item === 'About Us' || item === 'Contact') setIsBookingOpen(true)
  }

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
    <div className="min-h-dvh w-full bg-[#FAF8F5] text-zinc-900 flex flex-col justify-between relative overflow-x-hidden selection:bg-zinc-900 selection:text-white font-sans antialiased">
      
      {/* ================= HEADER / NAVBAR (EXACT RECREATION) ================= */}
      <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 pt-6 pb-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div
          className="flex flex-col cursor-pointer select-none"
          onClick={() => setActiveNav('Home')}
        >
          <span className="font-extrabold text-[15px] sm:text-base tracking-[0.24em] text-zinc-950 uppercase leading-none font-sans">
            ATELIER
          </span>
          <span className="text-[8px] sm:text-[8.5px] font-semibold tracking-[0.26em] text-zinc-400 uppercase mt-0.5 leading-none">
            MOBILE DETAIL
          </span>
        </div>

        {/* Right Group: Nav Links + Book Now Button Together */}
        <div className="flex items-center gap-7 sm:gap-9">
          <nav className="hidden md:flex items-center gap-6 sm:gap-7 text-[12.5px] sm:text-[13px]">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={cn(
                  'relative py-1 transition-colors flex flex-col items-center',
                  activeNav === item
                    ? 'text-zinc-950 font-bold'
                    : 'text-zinc-500 font-normal hover:text-zinc-900'
                )}
              >
                <span>{item}</span>
                {activeNav === item && (
                  <span className="w-3.5 h-[2px] bg-zinc-950 rounded-full mt-0.5" />
                )}
              </button>
            ))}
          </nav>

          {/* Book Now Button */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="group inline-flex items-center gap-2 bg-[#101012] hover:bg-black text-white text-[12px] font-medium pl-4 pr-3.5 py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <Sparkles className="size-3.5 text-amber-200/90" />
            <span>Book Now</span>
            <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-[12px]">
              &rarr;
            </span>
          </button>
        </div>
      </header>

      {/* ================= CONDITIONAL VIEW: HOME HERO vs SERVICES VIEW ================= */}
      {activeNav === 'Services' ? (
        /* ================= SERVICES VIEW (EXACT MATCH WITH USER'S LATEST SCREENSHOT) ================= */
        <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-4 flex-1 flex flex-col max-w-[1400px] mx-auto animate-in fade-in duration-300">
          
          {/* Top Banner: Our Services with Sports Car */}
          <div className="w-full bg-[#E5E3DF] rounded-2xl sm:rounded-[28px] overflow-hidden relative min-h-[160px] sm:min-h-[190px] flex items-center justify-between p-6 sm:p-10 mb-5 sm:mb-6 shadow-xs border border-zinc-200/50">
            
            {/* Banner Background Car Image */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] bg-cover bg-no-repeat z-0 pointer-events-none"
              style={{
                backgroundImage: "url('/services/banner-exact.png')",
                backgroundPosition: 'right center',
              }}
            />
            {/* Soft fade gradient into the car image */}
            <div className="absolute inset-y-0 left-0 w-[70%] sm:w-[55%] bg-gradient-to-r from-[#E5E3DF] via-[#E5E3DF]/95 to-transparent z-0 pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 max-w-md">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-zinc-950 tracking-tight text-balance">
                Our Services
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-sm text-pretty">
                Complete car care & maintenance solutions for long-lasting performance.
              </p>
            </div>
          </div>

          {/* 6 Service Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 flex-1">
            {servicesList.map((srv) => {
              const IconComp = srv.icon
              return (
                <div
                  key={srv.id}
                  onClick={() => handleServiceSelect(srv.title)}
                  className="group bg-white hover:bg-zinc-50/70 border border-zinc-200/70 hover:border-zinc-300 rounded-2xl sm:rounded-[22px] p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer shadow-xs hover:shadow-md transition-all active:scale-[0.99]"
                >
                  {/* Left: Icon, Title, Subtitle */}
                  <div className="flex-1 flex flex-col justify-between h-full pr-1">
                    <div className="size-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 mb-3 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <IconComp className="size-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-[15px] text-zinc-900 group-hover:text-black leading-tight text-balance">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed text-pretty">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Rounded Image Thumbnail */}
                  <div className="size-24 sm:size-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-xs bg-zinc-100 border border-zinc-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              )
            })}
          </div>

        </main>
      ) : (
        /* ================= HOME VIEW (HERO SECTION WITH LUXURY CAR) ================= */
        <>
          {/* Background Car Image (2nd Car: Studio HD Luxury SUV in front of glowing villa) */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat z-0 transition-all duration-500"
            style={{
              backgroundImage: "url('/hero-bg.jpg')",
              backgroundPosition: 'right 25% center',
            }}
          />

          {/* Seamless Left Fade Gradient for Crystal Clear Typography */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#EDE8DC] via-[#EDE8DC]/85 md:via-[#EDE8DC]/60 to-transparent w-full md:w-[60%] pointer-events-none" />

          {/* Subtle Top Header Soft Fade */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#EDE8DC]/80 via-[#EDE8DC]/30 to-transparent pointer-events-none z-0" />

          {/* Hero Content */}
          <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-8 sm:py-10 md:py-14 flex-1 flex flex-col justify-center">
            <div className="max-w-xl">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/70 shadow-xs mb-5 sm:mb-6">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-zinc-800 tracking-tight">
                  Available Today
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-bold text-zinc-950 tracking-[-0.035em] leading-[1.04] text-balance">
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
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="group inline-flex items-center gap-3.5 bg-zinc-950 hover:bg-black text-white px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-[13px] font-semibold shadow-lg shadow-zinc-950/15 hover:shadow-zinc-950/25 transition-all active:scale-[0.98]"
                >
                  <div className="size-5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <Calendar className="size-4" />
                  </div>
                  <span>Book Mobile Service</span>
                  <ArrowRight className="size-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Social Proof Pill */}
                <div
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
                </div>

              </div>

            </div>
          </main>

          {/* ================= BOTTOM FLOATING CARD / DOCK ================= */}
          <footer className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-7 pt-2">
            <div className="w-full bg-white/85 hover:bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.1)] rounded-2xl sm:rounded-[26px] p-4 sm:p-5 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/70">
                
                {/* Feature 1: Protected */}
                <div className="flex items-center gap-4 py-2.5 md:py-1 px-3 sm:px-6 first:pl-2">
                  <div className="size-9 rounded-full bg-zinc-100/90 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
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
                  <div className="size-9 rounded-full bg-zinc-100/90 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
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
                  <div className="size-9 rounded-full bg-zinc-100/90 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
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
        </>
      )}

      {/* Small bottom footer line */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-4 flex items-center justify-between text-[11px] text-zinc-400">
        <span>&copy; 2026 Atelier Mobile Detail. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <Phone className="size-3 text-zinc-400" />
          <span className="tabular-nums">(800) 555-CARE</span>
        </div>
      </div>

      {/* ================= BOOKING MODAL WIZARD ================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-hidden">
            
            <button
              onClick={resetBooking}
              aria-label="Close booking dialog"
              className="absolute top-5 right-5 size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
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
                              'p-3 rounded-xl border text-left font-medium transition-all flex items-center justify-between',
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
                        {[
                          { name: 'General Service', price: '$89', desc: 'Periodic maintenance & health check.' },
                          { name: 'Engine Repair', price: '$189', desc: 'Expert engine diagnostics & repair.' },
                          { name: 'Brake Service', price: '$129', desc: 'Brake inspection, pad & disc replacement.' },
                          { name: 'AC Service', price: '$99', desc: 'Cooling system check & gas refill.' },
                          { name: 'Denting & Painting', price: '$249', desc: 'Remove dents & restore original finish.' },
                          { name: 'Car Diagnostics', price: '$69', desc: 'Advanced scanning & issue detection.' }
                        ].map((pkg) => (
                          <div
                            key={pkg.name}
                            onClick={() => setSelectedPackage(pkg.name)}
                            className={cn(
                              'p-3 rounded-xl border cursor-pointer transition-all',
                              selectedPackage === pkg.name
                                ? 'border-zinc-950 bg-zinc-50 ring-1 ring-zinc-950'
                                : 'border-zinc-200 hover:border-zinc-300'
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm text-zinc-950">{pkg.name}</span>
                              <span className="font-extrabold text-sm text-zinc-900 tabular-nums">{pkg.price}</span>
                            </div>
                            <p className="text-xs text-zinc-500 mt-0.5 text-pretty">{pkg.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      className="w-full mt-2 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
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
                        className="py-3 px-4 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-xs font-semibold text-zinc-700"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setBookingStep(3)}
                        className="flex-1 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
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
                        Service Location Address
                      </label>
                      <div className="relative">
                        <MapPin className="size-4 text-zinc-400 absolute left-3.5 top-3" />
                        <input
                          required
                          type="text"
                          defaultValue="742 Evergreen Terrace, Springfield"
                          placeholder="Home address or office parking"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-1">
                          Your Name
                        </label>
                        <input
                          required
                          type="text"
                          defaultValue="Alex Morgan"
                          className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-zinc-700 block mb-1">
                          Phone Number
                        </label>
                        <input
                          required
                          type="tel"
                          defaultValue="+1 (555) 392-8921"
                          className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs space-y-1.5">
                      <div className="flex justify-between text-zinc-500">
                        <span>Vehicle:</span>
                        <span className="font-semibold text-zinc-800">{selectedVehicle}</span>
                      </div>
                      <div className="flex justify-between text-zinc-500">
                        <span>Package:</span>
                        <span className="font-semibold text-zinc-800">{selectedPackage}</span>
                      </div>
                      <div className="flex justify-between text-zinc-500">
                        <span>Arrival Slot:</span>
                        <span className="font-semibold text-zinc-800 tabular-nums">{selectedDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="py-3 px-4 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-xs font-semibold text-zinc-700"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
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
                  className="mt-4 px-6 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-black transition-colors"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= REVIEWS MODAL ================= */}
      {isReviewsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative">
            <button
              onClick={() => setIsReviewsOpen(false)}
              aria-label="Close reviews dialog"
              className="absolute top-5 right-5 size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
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
          </div>
        </div>
      )}

    </div>
  )
}
