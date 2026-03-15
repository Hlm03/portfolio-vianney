'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Stats', href: '#stats' },
  { label: 'Services', href: '#services' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Avis', href: '#avis' },
]

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D1A]/60 backdrop-blur-md border-b border-white/[0.08]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between">
          <button onClick={() => scrollTo('#hero')} className="text-sm font-bold tracking-widest text-white">
            V.<span className="text-[#FFB951]">H</span>
          </button>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  active === l.href ? 'bg-[#FFB951]/12 text-[#FFB951]' : 'text-white/50 hover:text-white hover:bg-white/6'
                }`}
              >{l.label}</button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo('#contact')}
              className="hidden md:block text-xs font-bold bg-[#FFB951] text-[#0D0D1A] px-5 py-2.5 rounded-lg hover:bg-[#FFC96E] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#FFB951]/30"
            >Contact</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-1" aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0D0D1A]/95 backdrop-blur-md border-b border-white/[0.08] px-5 py-4 flex flex-col gap-2 md:hidden"
          >
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-left px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/6 transition-all"
              >{l.label}</button>
            ))}
            <button onClick={() => scrollTo('#contact')}
              className="mt-2 text-sm font-bold bg-[#FFB951] text-[#0D0D1A] px-5 py-3 rounded-xl text-center"
            >Me contacter</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
