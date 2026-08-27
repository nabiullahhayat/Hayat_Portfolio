import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/navigation'
import { SITE_CONFIG } from '../../constants/site'
import { ROUTES } from '../../constants/routes'
import Container from '../ui/Container'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8 bg-surface-elevated/50">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to={ROUTES.HOME} className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
                {SITE_CONFIG.shortName.charAt(0)}
              </span>
              <span className="text-sm font-semibold text-white">
                {SITE_CONFIG.shortName}
                <span className="font-normal text-slate-400">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-3 text-sm text-slate-500">{SITE_CONFIG.location}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((link) => link.path !== ROUTES.HOME).map(
                (link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Designed & built with React + Tailwind
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
