'use client'
import { motion } from 'framer-motion'
import { Box, PlayCircle, Film, Building2 } from 'lucide-react'

const services = [
  { num: '01', icon: Box, title: 'Design 3D Objet & Produit', desc: 'Modélisation et texturage haute fidélité pour visualisation commerciale, packaging et e-commerce.' },
  { num: '02', icon: PlayCircle, title: 'Animation & Publicité 3D', desc: 'Animation cinématique de produits pour vidéos publicitaires et supports de communication.' },
  { num: '03', icon: Film, title: 'VFX & Intégration 3D', desc: "Intégration photoréaliste d'éléments 3D dans des prises de vue réelles." },
  { num: '04', icon: Building2, title: 'Visualisation Architecturale', desc: 'Rendu 3D de plans architecturaux — intérieurs, extérieurs et perspectives photoréalistes.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 flex flex-col items-center text-center" style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#1A1408 100%)' }} aria-label="Services">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FFB951] uppercase tracking-[.15em] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-2 rounded-full mb-4">✦ Services & Tarifs</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Ce que je peux faire pour vous</h2>
          <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">De la modélisation 3D à l'intégration VFX, je couvre l'ensemble de vos besoins visuels.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="relative bg-white/5 border border-white/8 rounded-2xl p-6 overflow-hidden hover:border-[#FFB951]/40 hover:shadow-lg hover:shadow-[#FFB951]/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFB951] to-[#FFD98A]" />
                <div className="text-[11px] font-bold text-[#FFD98A]/60 tracking-wider mb-3">{s.num}</div>
                <div className="w-9 h-9 rounded-xl bg-[#FFB951]/10 border border-[#FFB951]/20 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-[#FFB951]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-[11px] font-semibold text-[#FFB951] bg-[#FFB951]/10 border border-[#FFB951]/25 px-3 py-1 rounded-full">Sur devis</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
