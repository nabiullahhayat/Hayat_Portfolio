import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const badgeStyles = {
  Graduation: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  Recognition: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
  '1st Place': 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  '2nd Place': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
}

function AwardCard({ award, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
        transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="group overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] transition-colors hover:border-white/15 hover:bg-white/[0.04]"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="block w-full text-left"
          aria-label={`View ${award.title} certificate`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-card">
            <img
              src={award.image}
              alt={award.title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
            <span
              className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                badgeStyles[award.badge] ?? badgeStyles.Recognition
              }`}
            >
              {award.badge}
            </span>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {award.category}
            </p>
            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
              {award.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-cyan-300">
              {award.organization}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              {award.date} · {award.location}
            </p>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
              {award.description}
            </p>
            <p className="mt-4 text-xs font-medium text-violet-300 opacity-0 transition-opacity group-hover:opacity-100">
              Click to view certificate →
            </p>
          </div>
        </button>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed inset-4 z-[101] m-auto flex max-h-[90svh] max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated shadow-2xl sm:inset-8"
              role="dialog"
              aria-modal="true"
              aria-label={award.title}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <h3 className="font-bold text-white">{award.title}</h3>
                  <p className="text-sm text-slate-400">{award.organization}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full rounded-2xl border border-white/10 object-contain"
                />
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {award.description}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {award.date} · {award.location}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default AwardCard
