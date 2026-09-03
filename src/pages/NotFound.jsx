import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import TextReveal from '../components/ui/TextReveal'
import { ArrowRight } from '../components/ui/Icons'

const quickLinks = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Projects', path: ROUTES.PROJECTS },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Contact', path: ROUTES.CONTACT },
]

const floatingVariants = {
  animate: (i) => ({
    y: [0, -12, 0],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.3,
    },
  }),
}

function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100svh-8rem)] items-center overflow-hidden py-16 sm:py-20">
      {/* Background elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl"
        />
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/60"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 22}%`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Glitch-style 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.h1
              className="text-[7rem] font-black leading-none tracking-tighter sm:text-[9rem] md:text-[11rem]"
              animate={{
                textShadow: [
                  '0 0 40px rgba(34,211,238,0.3)',
                  '0 0 80px rgba(167,139,250,0.4)',
                  '0 0 40px rgba(34,211,238,0.3)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="gradient-text">404</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-2 h-px max-w-xs bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent sm:max-w-sm"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400"
          >
            Page not found
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            <TextReveal text="Looks like this page got lost in the codebase" delay={0.5} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-400"
          >
            The URL you entered doesn&apos;t exist or may have been moved. Let&apos;s
            get you back on track.
          </motion.p>

          {/* Terminal-style hint */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mx-auto mt-8 max-w-md rounded-2xl border border-white/8 bg-black/40 p-4 text-left font-mono text-sm sm:p-5"
          >
            <p className="text-emerald-400">
              <span className="text-slate-500">$</span> curl /this-page
            </p>
            <p className="mt-1 text-red-400">
              Error 404: Resource not found
            </p>
            <motion.p
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="mt-2 text-cyan-300"
            >
              <span className="text-slate-500">$</span> redirect --home<span className="ml-0.5">▊</span>
            </motion.p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button to={ROUTES.HOME} size="lg">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to={ROUTES.CONTACT} variant="secondary" size="lg">
              Contact Me
            </Button>
          </motion.div>

          {/* Quick links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            aria-label="Quick navigation"
            className="mt-10"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Or try these pages
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.06 }}
                >
                  <Link
                    to={link.path}
                    className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </Container>
    </div>
  )
}

export default NotFound
