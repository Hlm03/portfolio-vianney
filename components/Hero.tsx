'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const tags = ['Conception 3D', 'Animation', 'VFX', 'Archi Viz', 'Game Design']
const stats = [
  { value: 5, suffix: '+', label: 'Ans XP' },
  { value: 50, suffix: '+', label: 'Projets' },
  { value: 9, suffix: '', label: 'Logiciels' },
  { value: 4.9, suffix: '★', label: 'Note Comeup', decimals: 1 },
]

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#1A1408 100%)' }}
      aria-label="Introduction"
    >
      {/* Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(255,185,81,.18) 0%,transparent 65%)', filter: 'blur(0px)' }} />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(255,185,81,.07) 0%,transparent 65%)' }} />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FFB951] uppercase tracking-[.15em] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-2 rounded-full mb-6"
        >
          <span className="text-[9px]">✦</span>
          Designer 3D & Animateur · Cotonou, Bénin
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.04] tracking-tight text-white mb-4"
        >
          Je crée des visuels 3D<br />qui donnent{' '}
          <span className="text-[#FFB951]">vie</span> à vos projets.
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="text-sm sm:text-base text-white/40 leading-relaxed max-w-md mx-auto mb-7"
        >
          Conception 3D · Animation · VFX · Archi Viz<br />
          <span className="text-white/20">Freelance depuis 2021, basé au Bénin.</span>
        </motion.p>

        {/* Tags */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="flex flex-wrap justify-center gap-2 mb-9"
        >
          {tags.map((t, i) => (
            <motion.span key={t} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
            >{t}</motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
        >
          <button onClick={() => scrollTo('#projets')}
            className="text-sm font-bold bg-[#FFB951] text-[#0D0D1A] px-7 py-3.5 rounded-xl hover:bg-[#FFC96E] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#FFB951]/30"
          >Voir mes projets →</button>
          <button onClick={() => scrollTo('#contact')}
            className="text-sm font-medium text-white/70 bg-white/5 border border-white/12 px-7 py-3.5 rounded-xl hover:bg-white/10 hover:text-white transition-all"
          >Me contacter</button>
        </motion.div>

        {/* Stats card */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/4 border border-[#FFB951]/15 rounded-2xl p-5"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-[#FFB951] leading-none mb-1">
                {inView ? <CountUp end={s.value} duration={1.5} suffix={s.suffix} decimals={s.decimals ?? 0} /> : `0${s.suffix}`}
              </div>
              <div className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button onClick={() => scrollTo('#stats')} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#FFB951] transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
