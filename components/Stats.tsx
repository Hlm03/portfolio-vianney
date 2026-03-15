'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 5, suffix: '+', label: "Ans d'expérience" },
  { value: 50, suffix: '+', label: 'Projets finalisés' },
  { value: 9, suffix: '', label: 'Logiciels maîtrisés' },
  { value: 2, suffix: '', label: 'Expériences pro' },
]
const tools = ['Blender','Unity','Substance 3D Painter','Substance 3D Stager','SketchUp','Figma','Adobe XD','Illustrator','Photoshop']

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="stats" ref={ref} className="py-20 px-4 sm:px-6 flex flex-col items-center text-center bg-[#F8F8FC]" aria-label="Statistiques et outils">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#CC8F00] uppercase tracking-[.15em] bg-[#FFF8E6] px-4 py-2 rounded-full mb-4">✦ Stats & Outils</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0D1A] tracking-tight mb-2">Stack technique & expérience</h2>
          <p className="text-sm text-[#666] max-w-md mx-auto leading-relaxed">5 ans de pratique, 9 logiciels maîtrisés, des dizaines de projets livrés.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white border-[1.5px] border-[#EFEFEF] rounded-2xl p-5 hover:border-[#FFB951] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB951]/10"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#FFB951] leading-none mb-1">
                {inView ? <CountUp end={s.value} duration={1.5} suffix={s.suffix} /> : `0${s.suffix}`}
              </div>
              <div className="text-[10px] text-[#666] uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="bg-white border-[1.5px] border-[#EFEFEF] rounded-2xl p-5"
        >
          <p className="text-[11px] font-semibold text-[#666] uppercase tracking-[.15em] mb-3">Stack d'outils</p>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="text-[11px] font-medium text-[#CC8F00] bg-[#FFF8E6] border border-[#FFE4A0] px-4 py-1.5 rounded-full hover:bg-[#FFB951] hover:text-[#0D0D1A] transition-all cursor-default"
              >{t}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
