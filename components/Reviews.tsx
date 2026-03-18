'use client'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

const reviews = [
  { name: 'FrancoisGamet', initials: 'FG', date: '18 janv. 2026', text: "Un travail d'une qualité exceptionnelle et au dessus de mes attentes. Professionnel à l'écoute et très réactif. Merci beaucoup Vianney" },
  { name: 'zebul', initials: 'Z', date: '8 avr. 2024', text: "Merci infiniment pour votre professionnalisme, votre patience et votre écoute ! Superbes propositions qui ont rendu mon projet meilleur encore ! La vidéo est superbe, un travail de pro à tarif réduit." },
  { name: 'Tinydev', initials: 'TD', date: '17 nov. 2023', text: "Très satisfaits, commande livrée très rapidement. Vendeur réactif, créatif et travail soigné. Vianney a réalisé de très jolies représentations 3D. Je recommande !" },
  { name: 'alex83210', initials: 'AL', date: '7 déc. 2024', text: "Le rendu 3D est de très haute qualité, avec une attention parfaite aux détails. Le résultat final dépasse mes attentes. Je recommande vivement ce service." },
  { name: 'Tinydev', initials: 'TD', date: '17 nov. 2023', text: "Je recommande à 100% Vianney — personne très sérieuse, à l'écoute, respectueuse, gentille et très soucieuse du détail." },
  { name: 'Kf_Diffusion', initials: 'KF', date: '31 janv. 2025', text: "Vianney a réalisé un rendu top ! Top rendu 3D !! Impeccable !! Je suis pleinement satisfait." },
]

export default function Reviews() {
  return (
    <section id="avis" className="py-20 px-4 sm:px-6 flex flex-col items-center text-center" style={{ background: 'linear-gradient(135deg,#0D0D1A 0%,#1A1408 100%)' }} aria-label="Avis clients">
      <div className="w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FFB951] uppercase tracking-[.15em] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-2 rounded-full mb-4">✦ Avis Clients</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">Ce que disent mes clients</h2>
          <p className="text-sm text-white/40 max-w-md mx-auto">Des retours vérifiés sur la plateforme Comeup.com</p>
        </motion.div>

        {/* Summary bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="relative flex flex-wrap justify-center items-center gap-5 sm:gap-8 rounded-2xl px-6 py-5 mb-6 overflow-hidden border border-[#FFB951]/20 bg-white/5"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse,rgba(255,185,81,.1) 0%,transparent 70%)' }} />
          <div className="text-center relative z-10">
            <div className="text-3xl font-black text-[#FFB951]">4,9</div>
            <div className="flex justify-center gap-1 my-1">{[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#FFB951] fill-[#FFB951]" />)}</div>
            <div className="text-[11px] text-white/40">37 avis vérifiés</div>
          </div>
          <div className="w-px h-10 bg-[#FFB951]/20 hidden sm:block" />
          <div className="text-center relative z-10">
            <div className="text-3xl font-black text-[#FFB951]">42</div>
            <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Avis positifs</div>
          </div>
          <div className="w-px h-10 bg-[#FFB951]/20 hidden sm:block" />
          <div className="text-center relative z-10">
            <div className="text-2xl font-black text-white/20">0</div>
            <div className="text-[11px] text-white/40 uppercase tracking-wider mt-1">Avis négatif</div>
          </div>
          <div className="w-px h-10 bg-[#FFB951]/20 hidden sm:block" />
          <div className="text-center relative z-10">
            <a href="https://comeup.com/fr/@vianney-hlm" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-medium text-[#FFB951] hover:underline">
              @Vianney_Hlm sur Comeup <ExternalLink size={11} />
            </a>
            <div className="text-[10px] text-white/25 mt-1">Plateforme certifiée</div>
          </div>
        </motion.div>

        {/* Reviews grid — 6 avis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3, borderColor: 'rgba(255,185,81,.3)' }}
              className="bg-white/5 border border-white/8 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB951]/8"
            >
              <div className="flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} size={11} className="text-[#FFB951] fill-[#FFB951]" />)}</div>
              <p className="text-xs text-white/55 leading-relaxed flex-1">
                <span className="text-[#FFB951] text-lg leading-none align-middle mr-1">&ldquo;</span>{r.text}
              </p>
              <div className="flex items-center gap-2.5 pt-2.5 border-t border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#FFB951]/10 border border-[#FFB951]/25 flex items-center justify-center text-xs font-bold text-[#FFB951] flex-shrink-0">{r.initials}</div>
                <div>
                  <p className="text-xs font-semibold text-white">{r.name}</p>
                  <p className="text-[10px] text-white/30">{r.date}</p>
                </div>
                <span className="ml-auto text-[9px] font-semibold text-[#FFB951] bg-[#FFB951]/10 border border-[#FFB951]/25 px-2 py-0.5 rounded-full">Comeup</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
