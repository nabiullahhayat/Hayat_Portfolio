import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/navigation'
import { SITE_CONFIG } from '../../constants/site'
import { ROUTES } from '../../constants/routes'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import Container from '../ui/Container'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

function Navbar() {
  const location = useLocation()
  const { isOpen, toggle, close } = useMobileMenu()

  const isActive = (path) => {
    if (path === ROUTES.HOME) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container className="pt-4 sm:pt-5">
          <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
            <Link
              to={ROUTES.HOME}
              className="group flex items-center gap-2.5"
              onClick={close}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
                {SITE_CONFIG.shortName.charAt(0)}
              </span>
              <span className="hidden text-sm font-semibold text-white sm:block">
                {SITE_CONFIG.shortName}
                <span className="font-normal text-slate-400">.dev</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                      isActive(link.path)
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                to={ROUTES.CONTACT}
                size="sm"
                className="hidden sm:inline-flex"
              >
                Hire Me
              </Button>

              <button
                type="button"
                onClick={toggle}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
              >
                <span className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                      isOpen ? 'top-2 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                      isOpen ? 'top-2 -rotate-45' : 'top-4'
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>{isOpen && <MobileMenu onClose={close} />}</AnimatePresence>
    </>
  )
}

export default Navbar
