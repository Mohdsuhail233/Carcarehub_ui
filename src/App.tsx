import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Phone, X, CheckCircle2, ChevronRight, Sparkles, Shield, Droplets } from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [quoteStep, setQuoteStep] = useState(1)
  const [selectedService, setSelectedService] = useState('Ceramic Coating')
  const [quoteSuccess, setQuoteSuccess] = useState(false)

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setQuoteSuccess(true)
  }

  const resetQuote = () => {
    setQuoteSuccess(false)
    setQuoteStep(1)
    setIsQuoteOpen(false)
  }

  return (
    <div className="min-h-dvh w-full bg-[#EAE8E3] text-zinc-950 font-sans antialiased relative overflow-x-hidden selection:bg-black selection:text-white flex flex-col justify-between">
      
      {/* Background: Studio Wall + Floor + Center Porsche Taycan with Laser Wireframe */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none transition-all duration-700"
        style={{
          backgroundImage: "url('/solstice-hero-bg.jpg')",
          backgroundPosition: 'center 40%',
        }}
      />

      {/* Subtle Ambient Vignette Overlay to ensure razor-sharp typography readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#EAE8E3]/60 via-transparent to-[#EAE8E3]/60 pointer-events-none" />

      {/* ================= HEADER / TOP NAVIGATION ================= */}
      <header className="relative z-20 w-full px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <div className="cursor-pointer select-none">
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-950">
            Solstice Detailing
          </span>
        </div>

        {/* Right: Navigation Links & Phone CTA */}
        <div className="flex items-center gap-8 sm:gap-12">
          <nav className="hidden md:flex items-center gap-8 text-[14px] text-zinc-800">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Direct Phone Call CTA */}
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

      {/* ================= HERO SECTION (SPLIT ASYMMETRIC OVER CENTRAL CAR) ================= */}
      <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 flex-1 flex flex-col justify-center py-10 lg:py-16">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Bold Architectural Headline */}
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

          {/* Center Column: Breathing Space for the Centered Porsche Taycan */}
          <div className="hidden lg:block lg:col-span-3 min-h-[300px] pointer-events-none" />

          {/* Right Column: Mission Subtext & Primary "Get a Quote" CTA */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pl-6 max-w-md"
          >
            <p className="text-[15px] sm:text-[16.5px] text-zinc-700 font-normal leading-[1.55] text-pretty mb-8">
              We provide an unrivaled standard of vehicle care, restoring and protecting your automotive investment with scientific precision.
            </p>

            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => setIsQuoteOpen(true)}
              className="bg-black hover:bg-zinc-800 text-white text-xs sm:text-[13px] font-semibold tracking-wide px-9 py-4 shadow-lg shadow-black/10 transition-all cursor-pointer inline-flex items-center gap-3"
            >
              <span>Get a Quote</span>
              <ChevronRight className="size-3.5 text-zinc-400" />
            </motion.button>
          </motion.div>

        </div>

      </main>

      {/* ================= BOTTOM BAR / MINIMAL CONCIERGE SPEC ================= */}
      <footer className="relative z-10 w-full px-6 sm:px-12 lg:px-20 pb-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <Shield className="size-3.5 text-zinc-900" /> Certified Ceramic Pro Installer
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <Droplets className="size-3.5 text-zinc-900" /> Paint Protection Film & Restoration
          </span>
        </div>

        <div className="text-zinc-500 font-mono text-[11px] tabular-nums">
          &copy; 2026 Solstice Detailing. Precision Care.
        </div>
      </footer>

      {/* ================= INTERACTIVE "GET A QUOTE" MODAL WIZARD ================= */}
      <AnimatePresence>
        {isQuoteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-white max-w-lg w-full p-6 sm:p-9 shadow-2xl border border-zinc-200 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={resetQuote}
                aria-label="Close quote modal"
                className="absolute top-5 right-5 size-8 bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>

              {!quoteSuccess ? (
                <div>
                  <div className="mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      Step {quoteStep} of 2 &bull; Instant Estimate
                    </span>
                    <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">
                      Request Precision Quote
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      Custom tailored care plan engineered specifically for your vehicle finish and condition.
                    </p>
                  </div>

                  {quoteStep === 1 && (
                    <div className="space-y-4">
                      <label className="text-xs font-semibold text-zinc-800 block">
                        Select Care Package
                      </label>
                      <div className="space-y-2">
                        {[
                          {
                            title: 'Ceramic Coating',
                            desc: 'Multi-year 9H nano-ceramic hydrophobic shield with paint leveling.',
                            price: 'From $890'
                          },
                          {
                            title: 'Paint Correction & Polish',
                            desc: 'Multi-stage swirl removal and mirror gloss optical restoration.',
                            price: 'From $450'
                          },
                          {
                            title: 'Full Scientific Detail',
                            desc: 'Interior decontamination, leather hydration & wheels-off brake detailing.',
                            price: 'From $320'
                          },
                          {
                            title: 'Paint Protection Film (PPF)',
                            desc: 'Self-healing urethane clear bra coverage for high-impact surfaces.',
                            price: 'From $1,200'
                          }
                        ].map((srv) => (
                          <div
                            key={srv.title}
                            onClick={() => setSelectedService(srv.title)}
                            className={`p-3.5 border cursor-pointer transition-all flex items-center justify-between text-left ${
                              selectedService === srv.title
                                ? 'border-black bg-zinc-50 ring-1 ring-black'
                                : 'border-zinc-200 hover:border-zinc-300'
                            }`}
                          >
                            <div className="pr-3">
                              <h3 className="font-bold text-sm text-zinc-950 leading-tight">
                                {srv.title}
                              </h3>
                              <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                                {srv.desc}
                              </p>
                            </div>
                            <span className="text-xs font-bold text-zinc-950 whitespace-nowrap tabular-nums">
                              {srv.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setQuoteStep(2)}
                        className="w-full mt-3 bg-black hover:bg-zinc-800 text-white text-xs font-semibold py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Continue to Vehicle Details</span>
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  )}

                  {quoteStep === 2 && (
                    <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                      <div>
                        <label className="text-xs font-semibold text-zinc-800 block mb-1">
                          Vehicle Year, Make & Model
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 2024 Porsche Taycan 4S"
                          className="w-full px-3.5 py-2.5 border border-zinc-200 text-xs focus:ring-1 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="text-xs font-semibold text-zinc-800 block mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Julian Hayes"
                            className="w-full px-3.5 py-2.5 border border-zinc-200 text-xs focus:ring-1 focus:ring-black focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-zinc-800 block mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(123) 456-7890"
                            className="w-full px-3.5 py-2.5 border border-zinc-200 text-xs focus:ring-1 focus:ring-black focus:outline-none tabular-nums"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-zinc-800 block mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="julian@example.com"
                          className="w-full px-3.5 py-2.5 border border-zinc-200 text-xs focus:ring-1 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setQuoteStep(1)}
                          className="py-3 px-4 border border-zinc-200 hover:bg-zinc-100 text-xs font-semibold text-zinc-700 cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <Sparkles className="size-3.5" />
                          <span>Submit Quote Request</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="size-12 bg-black text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950">
                    Quote Request Received
                  </h3>
                  <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                    Our lead detailing specialist will review your vehicle specifications and text you a tailored quote within 15 minutes.
                  </p>
                  <div className="p-3.5 bg-zinc-50 border border-zinc-200 text-left text-xs max-w-xs mx-auto space-y-1.5 font-mono">
                    <div>Selected: <span className="font-bold text-zinc-950">{selectedService}</span></div>
                    <div>Status: <span className="text-emerald-700 font-bold">Priority Review</span></div>
                  </div>
                  <button
                    onClick={resetQuote}
                    className="mt-3 px-8 py-2.5 bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
