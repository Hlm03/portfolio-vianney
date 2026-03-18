'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, ExternalLink, MessageCircle } from 'lucide-react'

const contacts = [
  { href: 'mailto:hadonou03vianney@gmail.com', icon: Mail, label: 'Email', value: 'hadonou03vianney@gmail.com' },
  { href: 'tel:+22901 52534617', icon: Phone, label: 'Téléphone', value: '+229 01 52534617' },
  { href: 'https://wa.me/22901 99695755', icon: MessageCircle, label: 'WhatsApp', value: '+229 01 99695755' },
  { href: 'https://comeup.com/fr/@vianney-hlm', icon: ExternalLink, label: 'Comeup', value: '@Vianney_Hlm · 42 avis' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden"
      aria-label="Contact"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(255,185,81,.2) 0%,transparent 65%)' }} />

      <div className="relative z-10 w-full max-w-xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#FFB951] uppercase tracking-[.15em] bg-[#FFB951]/10 border border-[#FFB951]/25 px-4 py-2 rounded-full mb-5">✦ Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Travaillons<br /><span className="text-[#FFB951]">ensemble.</span>
          </h2>
          <p className="text-sm text-white/40 max-w-sm mx-auto leading-relaxed">
            Un projet 3D, une animation ou une visualisation ? Parlons-en et donnons vie à vos idées.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {contacts.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, borderColor: 'rgba(255,185,81,.4)' }}
                className="flex flex-col items-start gap-2 bg-white/5 border border-white/8 rounded-xl p-4 text-left transition-all duration-300 hover:bg-[#FFB951]/12 no-underline"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FFB951]/10 border border-[#FFB951]/20 flex items-center justify-center">
                  <Icon size={16} className="text-[#FFB951]" />
                </div>
                <div className="min-w-0 w-full">
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">{c.label}</p>
                  <p className="text-xs font-medium text-white/80 break-all leading-snug">{c.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>

      <footer className="relative z-10 mt-16 pt-6 border-t border-white/5 w-full max-w-xl flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[10px] text-white/20">© 2025 H. Vianney HADONOU — Tous droits réservés</p>
        <p className="text-[10px] text-white/20">Cotonou, Bénin · Designer 3D Freelance</p>
      </footer>
    </section>
  )
}
