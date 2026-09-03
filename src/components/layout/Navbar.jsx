import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/navigation'
import { SITE_CONFIG } from '../../constants/site'
import { ROUTES } from '../../constants/routes'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import Container from '../ui/Container'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'
import Logo from '../ui/Logo'

function Navbar() {
  const location = useLocation()
  const { isOpen, toggle, close } = useMobileMenu()
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 24

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
          <motion.nav
            animate={{
              boxShadow: isScrolled
                ? '0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)'
                : '0 0 0 0 rgba(0,0,0,0)',
            }}
            transition={{ duration: 0.3 }}
            className={`glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6 ${
              isScrolled ? 'border-white/12 bg-surface-elevated/85' : ''
            }`}
          >
            <Link
              to={ROUTES.HOME}
              className="group flex items-center gap-2.5"
              onClick={close}
            >
              <Logo />
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden text-sm font-semibold text-white sm:block"
              >
                {SITE_CONFIG.shortName}
                <span className="font-normal text-slate-400">.dev</span>
              </motion.span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.04 }}
                >
                  <Link
                    to={link.path}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-4 ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
                className="hidden sm:block"
              >
                <Button to={ROUTES.CONTACT} size="sm">
                  Hire Me
                </Button>
              </motion.div>

              <motion.button
                type="button"
                onClick={toggle}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
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
              </motion.button>
            </div>
          </motion.nav>
        </Container>
      </motion.header>

      <AnimatePresence>{isOpen && <MobileMenu onClose={close} />}</AnimatePresence>
    </>
  )
}

export default Navbar
