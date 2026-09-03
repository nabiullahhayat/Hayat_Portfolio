import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ToastProvider from '../ui/ToastProvider'
import ScrollProgress from '../ui/ScrollProgress'
import ScrollToTop from '../ui/ScrollToTop'
import ContentProtection from '../security/ContentProtection'

const pageVariants = {
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

function Layout() {
  const location = useLocation()

  return (
    <div className="mesh-bg grid-bg relative flex min-h-svh flex-col overflow-x-hidden">
      <ScrollProgress />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl"
        />
      </div>

      <ToastProvider />
      <ContentProtection />
      <Navbar />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 flex-1 pt-24 sm:pt-28"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default Layout
