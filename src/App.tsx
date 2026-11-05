import { motion, useReducedMotion } from 'motion/react'
import { Phone, Shield, Droplets, Check, ArrowUpRight } from 'lucide-react'

export default function App() {
  const shouldReduceMotion = useReducedMotion()

  const services = [
    {
      id: 'ceramic',
      category: '01 / SURFACE PROTECTION',
      title: 'Ceramic Supremacy',
      tagline: 'The ultimate in nano-ceramic paint defense.',
      desc: 'We apply professional-grade ceramic coatings that provide unparalleled gloss, extreme hydrophobicity, and permanent resistance to environmental etching.',
      image: '/services/solstice/ceramic.jpg',
      price: 'From $890',
      specs: [
        '9H Diamond hardness rating',
        'Self-cleaning hydrophobic beading',
        '3 to 5 year durability warranty',
        'Full UV & chemical fallout defense'
      ]
    },
    {
      id: 'exterior',
      category: '02 / PAINT CORRECTION',
      title: 'Exterior Revival',
      tagline: 'Multi-stage optical paint leveling.',
      desc: 'A meticulous process involving decontamination, multi-stage machine paint correction, and application of premium sealants for a pure mirror-like reflection.',
      image: '/services/solstice/exterior.jpg',
      price: 'From $450',
      specs: [
        'Multi-stage rotary & DA machine polish',
        'Up to 90% swirl & micro-scratch removal',
        'Iron & clay bar decontamination',
        'Deep optical clarity & gloss enhancement'
      ]
    },
    {
      id: 'interior',
      category: '03 / CABIN REJUVENATION',
      title: 'Interior Restoration',
      tagline: 'Showroom-grade cabin decontamination.',
      desc: 'A comprehensive deep clean of all interior surfaces, from pH-balanced leather nourishment to hot-water fabric extraction, returning your cabin to factory freshness.',
      image: '/services/solstice/interior.jpg',
      price: 'From $320',
      specs: [
        'Leather hydration & matte UV sealant',
        'Medical-grade interior steam extraction',
        'Deep carpet & mat shampooing',
        'Ozone odor & allergen neutralization'
      ]
    },
    {
      id: 'protection',
      category: '04 / HIGH-IMPACT SHIELD',
      title: 'Paint Protection Film (PPF)',
      tagline: 'Self-healing urethane armor.',
      desc: 'Elevate your defense with computer-cut self-healing clear bra film protecting high-impact zones from highway rock chips, gravel spray, and road debris.',
      image: '/services/solstice/protection.jpg',
      price: 'From $1,200',
      specs: [
        'Instant heat-activated self-healing',
        'Computer cut patterns for seamless edges',
        'Optically clear high-gloss finish',
        '10-year manufacturer backing'
      ]
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
              <a href="#philosophy" className="hover:text-black transition-colors">
                Philosophy
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
              <Shield className="size-3.5 text-zinc-900" /> Certified Ceramic Pro Installer
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
              <Droplets className="size-3.5 text-zinc-900" /> Paint Protection Film & Restoration
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

      {/* ================= 2. SERVICES SECTION (A SPECTRUM OF DETAILING EXCELLENCE) ================= */}
      <section
        id="services"
        className="relative z-10 w-full bg-[#111215] text-white py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-zinc-800"
      >
        <div className="max-w-[1360px] mx-auto">
          
          {/* Section Header */}
          <div className="max-w-2xl mb-16 sm:mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-3">
              Services & Treatments
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white text-balance leading-[1.08]">
              A spectrum of
              <br />
              <span className="font-semibold text-white">detailing excellence</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl text-pretty">
              From intensive restoration to protective ceramic coatings, our services are tailored to the unique needs of your vehicle.
            </p>
          </div>

          {/* 4 Architectural Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {services.map((srv) => (
              <motion.article
                key={srv.id}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-[#17181c] border border-zinc-800/80 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all"
              >
                {/* Card Image with Subtle Zoom */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17181c] via-[#17181c]/20 to-transparent pointer-events-none" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 text-[10.5px] font-mono tracking-wider text-zinc-300 border border-white/10 uppercase">
                    {srv.category}
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 z-10 bg-black/85 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/15 tabular-nums">
                    {srv.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-zinc-400 leading-relaxed text-pretty mb-6">
                      {srv.desc}
                    </p>

                    {/* Technical Specifications Checklist */}
                    <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                      {srv.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <Check className="size-3.5 text-zinc-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="mt-8 pt-5 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors">
                    <span className="font-medium tracking-wide">Inquire Specification</span>
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. PHILOSOPHY / WHERE ARTISTRY MEETS ENGINEERING ================= */}
      <section
        id="philosophy"
        className="w-full bg-[#EAE8E3] text-zinc-950 py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-zinc-300"
      >
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 block mb-3">
              Craft & Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.12] text-balance">
              Where artistry meets
              <br />
              <span className="font-semibold text-black">engineering</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-zinc-700 font-normal leading-relaxed max-w-lg text-pretty">
              Our multi-stage process combines cutting-edge technology with time-honored techniques, ensuring a flawless finish that endures. We treat every vehicle as a masterpiece in the making.
            </p>

            <div className="mt-8 pt-6 border-t border-zinc-300 grid grid-cols-2 gap-6 text-xs text-zinc-700">
              <div>
                <span className="font-bold text-zinc-950 block text-sm mb-1">Optical Precision</span>
                Paint depth meters & high-CRI lighting rigs ensure zero clear coat compromise.
              </div>
              <div>
                <span className="font-bold text-zinc-950 block text-sm mb-1">Clean Room Studio</span>
                Climate-controlled, dust-extracted curing bay for bubble-free coatings.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-300 shadow-xl border border-zinc-300">
              <img
                src="/services/solstice/exterior.jpg"
                alt="Artistry meets engineering"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. MINIMAL FOOTER ================= */}
      <footer
        id="contact"
        className="w-full bg-[#111215] text-zinc-400 py-16 px-6 sm:px-12 lg:px-20 border-t border-zinc-800 text-xs"
      >
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div>
            <span className="font-bold text-white text-base tracking-tight block">
              Solstice Detailing
            </span>
            <p className="text-zinc-500 mt-1">
              500 Terry Francine St, San Francisco, CA 94158
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="tel:1234567890" className="hover:text-white transition-colors tabular-nums">
              123-456-7890
            </a>
          </div>

          <div className="text-zinc-500 font-mono text-[11px] tabular-nums">
            &copy; 2026 Solstice Detailing. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  )
}
