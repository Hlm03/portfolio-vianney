'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Design 3D', pct: 95 },
  { name: 'Animation 3D', pct: 90 },
  { name: 'Archi Viz', pct: 88 },
  { name: 'Design Graphique', pct: 85 },
  { name: 'VFX', pct: 80 },
  { name: 'Design UI', pct: 70 },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="competences" ref={ref} className="py-20 px-4 sm:px-6 flex flex-col items-center text-center bg-[#F8F8FC]" aria-label="Compétences">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#CC8F00] uppercase tracking-[.15em] bg-[#FFF8E6] px-4 py-2 rounded-full mb-4">✦ Compétences</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0D1A] tracking-tight mb-2">Maîtrise technique</h2>
          <p className="text-sm text-[#666] max-w-md mx-auto leading-relaxed">Des années de pratique sur les outils les plus exigeants de l'industrie 3D.</p>
        </motion.div>

        <div className="bg-white border-[1.5px] border-[#EFEFEF] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-12 text-left">
            {skills.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-[#333]">{s.name}</span>
                  <span className="text-xs font-bold text-[#CC8F00]">{s.pct}%</span>
                </div>
                <div className="h-[5px] bg-[#FFF3D6] rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg,#FFB951,#FFD98A)' }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.3, delay: i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
