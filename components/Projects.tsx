'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const DRIVE = 'https://drive.google.com/drive/folders/1SFFPdT8VH3UQbU-RNWvsy4e5OjJIQ-AT?usp=sharing'

const projects = [
  { id: 1, badge: 'Design 3D Produit', title: 'Design 3D Objet & Produit', desc: "Modélisation et texturage photoréaliste d'objets et produits pour usage commercial.", tools: ['Blender', 'Substance 3D Painter'], bg: 'from-[#FFF8E6] to-[#FFEECC]', color: '#CC8F00' },
  { id: 2, badge: 'Archi Viz', title: 'Visualisation architecturale', desc: 'Rendu 3D photoréaliste de plans architecturaux, intérieurs et extérieurs.', tools: ['Blender', 'SketchUp'], bg: 'from-[#FFF3D6] to-[#FFE8B0]', color: '#B07800' },
  { id: 3, badge: 'Animation', title: 'Animation publicitaire', desc: 'Animation cinématique de produits pour vidéos publicitaires et réseaux sociaux.', tools: ['Blender', 'After Effects'], bg: 'from-[#FFFAEC] to-[#FFF0CC]', color: '#CC8F00' },
  { id: 4, badge: 'VFX', title: 'VFX & Intégration 3D', desc: "Intégration d'éléments 3D dans des prises de vue réelles pour un rendu bluffant.", tools: ['Blender', 'After Effects', 'Photoshop'], bg: 'from-[#FFF6E0] to-[#FFEDB8]', color: '#B07800' },
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <section id="projets" className="py-20 px-4 sm:px-6 flex flex-col items-center text-center bg-white" aria-label="Projets">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#CC8F00] uppercase tracking-[.15em] bg-[#FFF8E6] px-4 py-2 rounded-full mb-4">✦ Projets mis en avant</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0D1A] tracking-tight mb-2">Mes réalisations récentes</h2>
          <p className="text-sm text-[#666] max-w-md mx-auto leading-relaxed">Cliquez sur un projet pour voir les réalisations complètes sur Google Drive.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-6">
          {projects.map((p, i) => (
            <motion.article key={p.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHovered(p.id)} onHoverEnd={() => setHovered(null)}
              onClick={() => window.open(DRIVE, '_blank')}
              className="bg-white border-[1.5px] border-[#EFEFEF] rounded-2xl overflow-hidden cursor-pointer hover:border-[#FFE4A0] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFB951]/12 transition-all duration-300"
              aria-label={p.title}
            >
              <div className={`relative h-[105px] bg-gradient-to-br ${p.bg} flex items-center justify-center`}>
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full relative z-10"
                  style={{ color: p.color, background: 'rgba(255,255,255,0.7)', border: `1px solid ${p.color}40` }}>
                  {p.badge}
                </span>
                <AnimatePresence>
                  {hovered === p.id && (
                    <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
                      className="absolute top-2.5 right-2.5 w-7 h-7 bg-[#FFB951] rounded-lg flex items-center justify-center">
                      <ArrowUpRight size={13} className="text-[#0D0D1A]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-4 border-t border-[#F5F5F5]">
                <h3 className="text-sm font-bold text-[#0D0D1A] mb-1 group-hover:text-[#CC8F00]">{p.title}</h3>
                <p className="text-xs text-[#666] leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span key={t} className="text-[10px] text-[#666] bg-[#F8F8FC] border border-[#EEE] px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <a href={DRIVE} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#CC8F00] border-[1.5px] border-[#FFE4A0] bg-[#FFF8E6] px-6 py-2.5 rounded-xl hover:bg-[#FFB951] hover:text-[#0D0D1A] hover:border-[#FFB951] transition-all duration-200"
          >
            Voir toutes mes réalisations sur Drive <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
