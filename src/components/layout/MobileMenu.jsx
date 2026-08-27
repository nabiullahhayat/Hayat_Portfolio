import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/navigation'
import { ROUTES } from '../../constants/routes'
import Button from '../ui/Button'

function MobileMenu({ onClose }) {
  const location = useLocation()

  const isActive = (path) => {
    if (path === ROUTES.HOME) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />

      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="glass fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col border-l border-white/10 lg:hidden"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <p className="text-sm font-semibold text-white">Navigation</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-5">
          <Button to={ROUTES.CONTACT} className="w-full" onClick={onClose}>
            Hire Me
          </Button>
        </div>
      </motion.aside>
    </>
  )
}

export default MobileMenu
