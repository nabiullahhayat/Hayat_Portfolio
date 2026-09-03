import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/navigation'
import { SITE_CONFIG } from '../../constants/site'
import { ROUTES } from '../../constants/routes'
import Container from '../ui/Container'
import Logo from '../ui/Logo'

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={footerVariants}
      className="relative border-t border-white/8 bg-surface-elevated/50"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to={ROUTES.HOME} className="inline-flex items-center gap-2.5">
              <Logo />
              <span className="text-sm font-semibold text-white">
                {SITE_CONFIG.shortName}
                <span className="font-normal text-slate-400">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-3 text-sm text-slate-500">{SITE_CONFIG.location}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((link) => link.path !== ROUTES.HOME).map(
                (link) => (
                  <li key={link.path}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                      <Link
                        to={link.path}
                        className="inline-block text-sm text-slate-400 transition-colors hover:text-cyan-400"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'GitHub', href: SITE_CONFIG.social.github },
                { label: 'LinkedIn', href: SITE_CONFIG.social.linkedin },
                { label: 'Instagram', href: SITE_CONFIG.social.instagram },
                { label: 'WhatsApp', href: SITE_CONFIG.whatsapp },
                { label: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              ].map((item) => (
                <li key={item.label}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="inline-block text-sm text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row"
        >
          <p className="text-sm text-slate-500">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Designed & built with React + Tailwind
          </p>
        </motion.div>
      </Container>
    </motion.footer>
  )
}

export default Footer
