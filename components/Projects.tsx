'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

const DRIVE = 'https://drive.google.com/drive/folders/1SFFPdT8VH3UQbU-RNWvsy4e5OjJIQ-AT?usp=sharing'

type Project = {
  id: string
  badge: 'Design 3D Produit' | 'Archi Viz' | 'Animation' | 'VFX'
  title: string
  desc: string
  tools: string[]
  driveLink: string
  previewId: string
}

const projects: Project[] = [
  // ── Design 3D Produit
  { id:'001', badge:'Design 3D Produit', title:'Saphir Solaire', desc:"Conception et visualisation 3D d'une solution liée à l'énergie solaire nommée « Saphir Solaire », fabriquée en France.", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/open?id=1KanFf1zeJj1CVHCWLx22ltFGUQCf9ap', previewId:'15zjqMV4m_Sopy1vW3zewARvbb7nrJCPW' },
  { id:'002', badge:'Design 3D Produit', title:'Générateur de Fréquence', desc:"Modélisation technique et animation d'un boîtier électronique industriel destiné à la gestion ou à l'émission de fréquences.", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/open?id=1G7JznlN5IbwVFpwYmsRQpJj7saA2z0hT', previewId:'1WeCLcflgVmng-Kc_MrmPVccFh86jw7zU' },
  { id:'003', badge:'Design 3D Produit', title:'Anatomie — Cœur Réaliste', desc:"Étude et création de textures 3D réalistes d'organes internes humains pour des visualisations médicales ou scientifiques.", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/drive/folders/1a4cXrYIR9YyY3Pc_TUzjg92_phVoEdb3?usp=drive_link', previewId:'180ofeK272DdDLeKkvnlZ56LLz4gk_WpZ' },
  { id:'004', badge:'Design 3D Produit', title:'Épice', desc:"Design axé sur le packaging et l'animation d'une vidéo publicitaire pour une gamme d'épices locales.", tools:['Blender','After Effects'], driveLink:'https://drive.google.com/open?id=1MPIx3DNXsv46UmMVrjOXIAOjLSLZKHmN', previewId:'1OP0_fW-32NoS6XaQ_ipB1VMw8_sE7niz' },
  { id:'005', badge:'Design 3D Produit', title:'Eau Naturelle', desc:"Conception et animation d'une vidéo publicitaire autour de produits ou de contenants pour de l'eau naturelle.", tools:['Blender','After Effects'], driveLink:'https://drive.google.com/open?id=19jyD14M0sRZzLGqnMXLmeKvVB7R6qDeQ', previewId:'1YJt--SU2T7lgV-oi0lmEC6r2_iXkq8qH' },
  { id:'006', badge:'Design 3D Produit', title:'Globe', desc:"Création et animation d'un globe exprimant les échanges internationaux.", tools:['Blender','After Effects'], driveLink:'https://drive.google.com/open?id=1-NNed7scEzEiD8IZGoRnZKQYx1pdJ6hu', previewId:'1C5s4cdy0gwOytJzOS_Eua2ZW-l-k1wq5' },
  { id:'007', badge:'Design 3D Produit', title:'Redbull', desc:"Exercice de rendu publicitaire et de modélisation 3D en lien avec la marque Redbull (canettes).", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/open?id=1q2ZfC38oMVqJMhu3_zV8CIz88OfvWbgw', previewId:'1bEbQoo0TCpHQ6ripPckMHPCEPObdKNxy' },
  { id:'008', badge:'Design 3D Produit', title:'COZIYA', desc:"Projet de design et d'animation pour la marque ou le concept « COZIYA ».", tools:['Blender','After Effects'], driveLink:'https://drive.google.com/open?id=1px0JTmcU7yDfvkSt3al79kdicT31AdX3', previewId:'1oau1eNbNAtPm0vGOn_i-f6RLVgWZpCOh' },
  { id:'009', badge:'Design 3D Produit', title:'Diagral — Matériels de Sécurité', desc:"Conception et présentation de dispositifs de sécurité pour la marque Diagral.", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/open?id=1m2lj9ssThOMnS9rHLOetX5_JiyWHI0u', previewId:'1AHr1AoJAqT5Q5fuBpwD_EyEW2NKzj_Qf' },
  { id:'011', badge:'Design 3D Produit', title:'Spray & Dermaplaner', desc:"Design produit pour des outils de soin de la peau : spray et dermaplaner.", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/open?id=1s926dGFXKKkZHAyKtwbnz6qM4mXL_nF', previewId:'1Fhk1o6pHBXp7diE2JRDdu2Nez1tcdV-r' },
  { id:'013', badge:'Design 3D Produit', title:'Bitcoin', desc:"Modélisation 3D de jetons physiques et d'objets dérivés autour de l'imagerie de la cryptomonnaie Bitcoin.", tools:['Blender','Substance 3D Painter'], driveLink:'https://drive.google.com/open?id=1Ejl2CeA2zG6YBc5S9NLK0nGxjlfXhE_F', previewId:'1RbnynjSdYfwuVGmECXHQyEgkqCRusga9' },
  // ── Archi Viz
  { id:'archi-001', badge:'Archi Viz', title:'Immeuble Location', desc:"Projet architectural d'un bâtiment collectif R+3 destiné à la location.", tools:['Blender','SketchUp'], driveLink:'https://drive.google.com/open?id=1dFBEOpP8gMceddkdlqKk77lwFC7latu1', previewId:'1j4k52p8Vr_A0-DFYda4lMCa0D-ZwXR4m' },
  { id:'archi-002', badge:'Archi Viz', title:'Home_1', desc:"Villa individuelle de style contemporain, mettant l'accent sur les larges ouvertures et la circulation intérieure.", tools:['Blender','SketchUp'], driveLink:'https://drive.google.com/open?id=1yOsmkvLAp5U3vchrgekQ9cqDosWzPPJ', previewId:'11iQE5YKA3E2P9IUy0lQY1TgAIABMEXC5' },
  { id:'archi-003', badge:'Archi Viz', title:'Canal Olympia', desc:"Étude et rendus spatiaux sur le complexe Canal Olympia pour un événement — acoustique visuelle, flux de spectateurs et parvis.", tools:['Blender','SketchUp'], driveLink:'https://drive.google.com/open?id=1Yz7_HH2SdB2t7vzcJ6LVCbUqyzcgLiUj', previewId:'1jM8iqMJRnZY4uGktQkbB-YVEVwWtdQvr' },
  { id:'archi-004', badge:'Archi Viz', title:'Home_2', desc:"Variante de projet résidentiel explorant d'autres matériaux (bois/pierre) et une volumétrie différente.", tools:['Blender','SketchUp'], driveLink:'https://drive.google.com/open?id=1Jaj9xfpdO4MuBMrAa8tv83Cpi4iQYHFF', previewId:'1FnJgL4Io0AdDT6_EGhro93SORq3VkyFk' },
  { id:'archi-006', badge:'Archi Viz', title:'Environnement 1', desc:"Création d'un environnement extérieur incluant végétation, chemins de circulation et éclairage public.", tools:['Blender','SketchUp'], driveLink:'https://drive.google.com/open?id=1OdF1IIWrxeZBLoNy6IIPMozpNul93Mom', previewId:'1CoyfzBZBlFdUfZGz0SUpoOUTrW8vhbIY' },
  { id:'archi-sejour', badge:'Archi Viz', title:'Design Entrée Séjour', desc:"Projet d'aménagement intérieur focalisé sur l'espace d'accueil et la salle de séjour.", tools:['Blender','SketchUp'], driveLink:'https://drive.google.com/open?id=1dZSC3pUIVmugNVYJZDarKJxzUTJtSUHh', previewId:'1jt0TIXBCESBA3G-zepbK-AE4aMK0mieh' },
]

const CATEGORIES = ['Tous', 'Design 3D Produit', 'Archi Viz'] as const

function previewUrl(id: string) {
  return `https://lh3.googleusercontent.com/d/${id}`
}

export default function Projects() {
  const [cat, setCat] = useState<string>('Tous')
  const [selected, setSelected] = useState<Project | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = cat === 'Tous' ? projects : projects.filter(p => p.badge === cat)

  return (
    <section id="projets" className="py-20 px-4 sm:px-6 flex flex-col items-center text-center" style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#1A1408 100%)' }} aria-label="Projets">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FFB951] uppercase tracking-[.15em] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-2 rounded-full mb-4">✦ Projets mis en avant</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Mes réalisations récentes</h2>
          <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">Cliquez sur un projet pour voir les réalisations complètes sur Google Drive.</p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                cat === c ? 'bg-[#FFB951] border-[#FFB951] text-[#0D0D1A]' : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >{c}</button>
          ))}
        </div>

        {/* Grille */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.article key={p.id} layout
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                onHoverStart={() => setHovered(p.id)} onHoverEnd={() => setHovered(null)}
                onClick={() => setSelected(p)}
                className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-[#FFB951]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFB951]/12 transition-all duration-300"
              >
                {/* Preview */}
                <div className="relative h-[130px] bg-white/5 overflow-hidden">
                  <img src={previewUrl(p.previewId)} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { (e.target as HTMLImageElement).style.opacity = '0' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FFB951]/20 border border-[#FFB951]/40 text-[#FFB951]">
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

                {/* Info */}
                <div className="p-4 border-t border-white/5">
                  <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tools.map(t => (
                      <span key={t} className="text-[10px] text-white/40 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <a href={DRIVE} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FFB951] border border-[#FFB951]/30 bg-[#FFB951]/10 px-6 py-2.5 rounded-xl hover:bg-[#FFB951] hover:text-[#0D0D1A] hover:border-[#FFB951] transition-all duration-200"
          >
            Voir toutes mes réalisations sur Drive <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0D0D1A] border border-white/10 rounded-3xl overflow-hidden max-w-md w-full"
            >
              <div className="relative h-52">
                <img src={previewUrl(selected.previewId)} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A] to-transparent" />
                <button onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                ><X size={14} /></button>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-[#FFB951] uppercase tracking-wider">{selected.badge}</span>
                <h3 className="text-xl font-black text-white mt-1 mb-2">{selected.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{selected.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selected.tools.map(t => (
                    <span key={t} className="text-[10px] text-white/40 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <a href={selected.driveLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold bg-[#FFB951] text-[#0D0D1A] px-5 py-2.5 rounded-xl hover:bg-[#FFC96E] transition-colors"
                >
                  Voir sur Google Drive <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
