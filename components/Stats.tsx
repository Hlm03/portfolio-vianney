'use client'
import { motion } from 'framer-motion'

const tools = ['Blender','Unity','Substance 3D Painter','Substance 3D Stager','SketchUp','Figma','Adobe XD','Illustrator','Photoshop']

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4 sm:px-6 flex flex-col items-center text-center" style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#1A1408 100%)' }} aria-label="Outils">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FFB951] uppercase tracking-[.15em] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-2 rounded-full mb-4">✦ Stack & Outils</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Stack technique & expérience</h2>
          <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">5 ans de pratique, 9 logiciels maîtrisés, des dizaines de projets livrés.</p>
        </motion.div>

        {/* Tools */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/8 rounded-2xl p-6"
        >
          <p className="text-[11px] font-semibold text-white/30 uppercase tracking-[.15em] mb-4">Stack d'outils</p>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="text-[11px] font-medium text-[#FFB951] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-1.5 rounded-full hover:bg-[#FFB951] hover:text-[#0D0D1A] transition-all cursor-default"
              >{t}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
