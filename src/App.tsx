import { useState } from 'react'
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
  ChevronRight
} from 'lucide-react'

export default function App() {
  const [activeNav, setActiveNav] = useState('Home')
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isReviewsOpen, setIsReviewsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Booking Flow State
  const [bookingStep, setBookingStep] = useState(1)
  const [selectedVehicle, setSelectedVehicle] = useState('SUV / Crossover')
  const [selectedPackage, setSelectedPackage] = useState('Signature Atelier')
  const [selectedDate, setSelectedDate] = useState('Today (Within 2 hrs)')
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const navItems = ['Home', 'Services', 'About Us', 'Reviews', 'Contact']

  const handleNavClick = (item: string) => {
    setActiveNav(item)
    if (item === 'Services') setIsServicesOpen(true)
    if (item === 'Reviews') setIsReviewsOpen(true)
    if (item === 'About Us' || item === 'Contact') setIsBookingOpen(true)
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

  return (
    <div className="min-h-screen w-full bg-[#EAE8E5] text-zinc-900 flex items-center justify-center p-3 sm:p-5 lg:p-7 select-none font-sans antialiased">
      
      {/* ================= TABLET SHOWCASE CONTAINER (EXACT 1:1 WITH REFERENCE) ================= */}
      <div className="w-full max-w-[1240px] bg-[#FAF8F5] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.16)] border-[6px] sm:border-[8px] border-white relative overflow-hidden flex flex-col justify-between h-[92vh] max-h-[750px] min-h-[580px]">
        
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5] to-[#f4ebe3] z-0 pointer-events-none" />

        {/* 100% Clean Feathered Tesla Model Y on the Right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[58%] lg:w-[60%] bg-contain bg-right-bottom sm:bg-right bg-no-repeat z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/tesla-pure.png')",
          }}
        />

        {/* ================= 1. HEADER / NAVBAR ================= */}
        <header className="relative z-10 w-full px-6 sm:px-10 lg:px-12 pt-5 sm:pt-6 pb-2 flex items-center justify-between">
          
          {/* Logo */}
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setActiveNav('Home')}
          >
            <span className="font-extrabold text-[14px] sm:text-[15px] tracking-[0.25em] text-zinc-950 uppercase leading-none font-sans">
              ATELIER
            </span>
            <span className="text-[7.5px] sm:text-[8px] font-semibold tracking-[0.28em] text-zinc-400 uppercase mt-0.5">
              MOBILE DETAIL
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[12.5px] lg:text-[13px] font-medium text-zinc-600">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative py-1 transition-colors hover:text-zinc-950 ${
                  activeNav === item ? 'text-zinc-950 font-semibold' : 'text-zinc-600'
                }`}
              >
                {item}
                {activeNav === item && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-zinc-950 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="group inline-flex items-center gap-2 bg-[#121214] hover:bg-black text-white text-[11px] sm:text-[12px] font-medium pl-3.5 pr-3 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-3 h-3 text-zinc-300" />
              <span>Book Now</span>
              <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform text-[11px]">
                &rarr;
              </span>
            </button>
          </div>
        </header>

        {/* ================= 2. HERO CONTENT ================= */}
        <main className="relative z-10 w-full px-6 sm:px-10 lg:px-12 py-2 sm:py-4 flex-1 flex flex-col justify-center">
          <div className="max-w-md lg:max-w-lg">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/70 shadow-xs mb-3.5 sm:mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10.5px] sm:text-[11px] font-semibold text-zinc-700 tracking-tight">
                Available Today
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-bold text-zinc-950 tracking-[-0.035em] leading-[1.05]">
              Premium care
              <br />
              at your door.
            </h1>

            {/* Subtitle */}
            <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14.5px] text-zinc-500 font-normal max-w-xs sm:max-w-sm leading-relaxed">
              Professional mobile detailing that fits your life.
            </p>

            {/* Action Area: Button & Reviews Pill */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5">
              
              {/* Book Mobile Service Button */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex items-center gap-2.5 sm:gap-3 bg-[#121214] hover:bg-black text-white pl-4 pr-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-[12.5px] font-semibold shadow-md hover:shadow-lg shadow-zinc-950/15 transition-all active:scale-[0.98]"
              >
                <div className="w-4 h-4 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span>Book Mobile Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Social Proof Reviews Pill */}
              <div
                onClick={() => setIsReviewsOpen(true)}
                className="cursor-pointer inline-flex items-center gap-2 bg-white/90 hover:bg-white backdrop-blur-md border border-zinc-200/80 rounded-full px-3 py-1.5 sm:py-2 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img
                    className="inline-block h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full ring-2 ring-white object-cover"
                    src="/avatars/avatar1.jpg"
                    alt="Customer 1"
                  />
                  <img
                    className="inline-block h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full ring-2 ring-white object-cover"
                    src="/avatars/avatar2.jpg"
                    alt="Customer 2"
                  />
                  <img
                    className="inline-block h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full ring-2 ring-white object-cover"
                    src="/avatars/avatar3.jpg"
                    alt="Customer 3"
                  />
                </div>

                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-zinc-950">4.9</span>
                  <span className="text-zinc-500 font-normal">1,250+ reviews</span>
                </div>
              </div>

            </div>

          </div>
        </main>

        {/* ================= 3. BOTTOM FLOATING BAR / DOCK ================= */}
        <footer className="relative z-10 w-full px-6 sm:px-10 lg:px-12 pb-5 sm:pb-6 pt-1">
          <div className="w-full bg-white/85 hover:bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.08)] rounded-xl sm:rounded-[22px] p-3 sm:p-4 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200/60">
              
              {/* Feature 1: Protected */}
              <div className="flex items-center gap-3 py-2 md:py-0.5 px-3 sm:px-5 first:pl-1">
                <div className="w-8 h-8 rounded-full bg-zinc-100/90 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
                  <ShieldCheck className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-bold text-[12.5px] sm:text-[13px] text-zinc-900 leading-tight">
                    Protected
                  </h3>
                  <p className="text-[10.5px] sm:text-[11px] text-zinc-500 mt-0.5">
                    Licensed & insured
                  </p>
                </div>
              </div>

              {/* Feature 2: Safe Products */}
              <div className="flex items-center gap-3 py-2 md:py-0.5 px-3 sm:px-5">
                <div className="w-8 h-8 rounded-full bg-zinc-100/90 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
                  <Leaf className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-bold text-[12.5px] sm:text-[13px] text-zinc-900 leading-tight">
                    Safe Products
                  </h3>
                  <p className="text-[10.5px] sm:text-[11px] text-zinc-500 mt-0.5">
                    Paint-safe detailing
                  </p>
                </div>
              </div>

              {/* Feature 3: Expert Care */}
              <div className="flex items-center gap-3 py-2 md:py-0.5 px-3 sm:px-5 last:pr-1">
                <div className="w-8 h-8 rounded-full bg-zinc-100/90 flex items-center justify-center text-zinc-800 shrink-0 border border-zinc-200/60">
                  <Award className="w-3.5 h-3.5 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-bold text-[12.5px] sm:text-[13px] text-zinc-900 leading-tight">
                    Expert Care
                  </h3>
                  <p className="text-[10.5px] sm:text-[11px] text-zinc-500 mt-0.5">
                    Handled by pros
                  </p>
                </div>
              </div>

            </div>
          </div>
        </footer>

      </div>

      {/* ================= BOOKING MODAL WIZARD ================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-hidden">
            
            <button
              onClick={resetBooking}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!bookingSuccess ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-semibold uppercase tracking-wider mb-2">
                    Step {bookingStep} of 3
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-950">
                    Book Doorstep Detailing
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
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
                            className={`p-3 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                              selectedVehicle === v
                                ? 'border-zinc-950 bg-zinc-950 text-white shadow-xs'
                                : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50/50 text-zinc-800'
                            }`}
                          >
                            <span>{v}</span>
                            {selectedVehicle === v && <CheckCircle2 className="w-3.5 h-3.5" />}
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
                          { name: 'Express Care', price: '$89', desc: 'Hand wash, interior vacuum, tire dressing & glass shine' },
                          { name: 'Signature Atelier', price: '$179', desc: 'Full clay bar, interior steam extraction, leather balm & paint sealant' },
                          { name: 'Ceramic Defense Pro', price: '$349', desc: 'Multi-stage paint correction & 1-year ceramic gloss coating' }
                        ].map((pkg) => (
                          <div
                            key={pkg.name}
                            onClick={() => setSelectedPackage(pkg.name)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              selectedPackage === pkg.name
                                ? 'border-zinc-950 bg-zinc-50 ring-1 ring-zinc-950'
                                : 'border-zinc-200 hover:border-zinc-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm text-zinc-950">{pkg.name}</span>
                              <span className="font-extrabold text-sm text-zinc-900">{pkg.price}</span>
                            </div>
                            <p className="text-xs text-zinc-500 mt-1">{pkg.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      className="w-full mt-2 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <span>Continue to Schedule</span>
                      <ChevronRight className="w-4 h-4" />
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
                            className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                              selectedDate === slot.time
                                ? 'border-zinc-950 bg-zinc-50 ring-1 ring-zinc-950 font-semibold'
                                : 'border-zinc-200 hover:border-zinc-300'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-zinc-400" />
                              <span>{slot.time}</span>
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
                        <ChevronRight className="w-4 h-4" />
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
                        <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
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
                        <span className="font-semibold text-zinc-800">{selectedDate}</span>
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
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Confirm Mobile Service</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950">
                  Appointment Confirmed!
                </h3>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                  Our mobile detailing van is scheduled. A confirmation SMS with GPS live tracking has been sent to your number.
                </p>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-left text-xs max-w-xs mx-auto space-y-2">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <CarIcon className="w-4 h-4 text-zinc-400" />
                    <span>{selectedVehicle} &bull; {selectedPackage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <span>{selectedDate}</span>
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
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500">
                <Star className="w-6 h-6 fill-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950">4.9 / 5.0 Rating</h3>
                <p className="text-xs text-zinc-500">Based on 1,250+ verified luxury vehicle reviews</p>
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
                    <span className="text-zinc-400 text-[11px]">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-amber-500" />
                    ))}
                    <span className="ml-2 text-[11px] font-medium text-zinc-500">{rev.car}</span>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= SERVICES MODAL ================= */}
      {isServicesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative">
            <button
              onClick={() => setIsServicesOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold text-zinc-950 mb-2">
              Atelier Detailing Services
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Precision automotive care designed specifically for exotic, luxury, and daily driven vehicles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <span className="font-bold text-sm text-zinc-900 block mb-1">Exterior Decontamination</span>
                <p className="text-zinc-600 leading-relaxed">
                  pH-neutral foam bath, iron fallout dissolution, clay bar treatment, rim iron cleansing & streak-free glass sealant.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <span className="font-bold text-sm text-zinc-900 block mb-1">Interior Rejuvenation</span>
                <p className="text-zinc-600 leading-relaxed">
                  Deep antibacterial steam extraction, premium matte leather conditioning, UV dashboard defense & air sanitization.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <span className="font-bold text-sm text-zinc-900 block mb-1">Single-Stage Paint Polish</span>
                <p className="text-zinc-600 leading-relaxed">
                  Removes 70%+ of swirl marks, towel scratches, and haze to restore deep mirror gloss and optical clarity.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <span className="font-bold text-sm text-zinc-900 block mb-1">Ceramic Shielding</span>
                <p className="text-zinc-600 leading-relaxed">
                  Ultra-hydrophobic 9H nano-ceramic coatings providing resilient defense against UV fading, bug etching, and bird droppings.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setIsServicesOpen(false)
                  setIsBookingOpen(true)
                }}
                className="px-6 py-2.5 rounded-full bg-zinc-950 text-white font-semibold text-xs hover:bg-black transition-colors"
              >
                Proceed to Book Service &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
