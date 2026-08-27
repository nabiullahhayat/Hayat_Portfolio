import { motion } from 'framer-motion'
import { CONTACT_CONTENT } from '../../constants/contact'
import { SITE_CONFIG } from '../../constants/site'
import { ExternalLink, Mail, MapPin, Phone } from '../ui/Icons'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: SITE_CONFIG.phoneDisplay,
    href: SITE_CONFIG.whatsapp,
    color: 'emerald',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE_CONFIG.location,
    href: null,
    color: 'violet',
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: SITE_CONFIG.social.github,
    handle: 'nabiullahhayat',
  },
  {
    name: 'LinkedIn',
    href: SITE_CONFIG.social.linkedin,
    handle: 'Nabiullah Hayat',
  },
  {
    name: 'Facebook',
    href: SITE_CONFIG.social.facebook,
    handle: CONTACT_CONTENT.socialLabels.facebook,
  },
  {
    name: 'Instagram',
    href: SITE_CONFIG.social.instagram,
    handle: CONTACT_CONTENT.socialLabels.instagram,
  },
]

const colorMap = {
  cyan: 'from-cyan-400/20 to-cyan-400/5 text-cyan-300',
  emerald: 'from-emerald-400/20 to-emerald-400/5 text-emerald-300',
  violet: 'from-violet-400/20 to-violet-400/5 text-violet-300',
}

function SocialLinks() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          const content = (
            <div className="flex items-start gap-4">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[method.color]}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {method.label}
                </p>
                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  {method.value}
                </p>
              </div>
            </div>
          )

          return (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.04] sm:p-5"
                >
                  {content}
                </a>
              ) : (
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:p-5">
                  {content}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Social Profiles
        </p>
        <ul className="mt-4 space-y-3">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.04]"
              >
                <div>
                  <p className="text-sm font-medium text-white">{link.name}</p>
                  <p className="text-xs text-slate-500">{link.handle}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-cyan-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SocialLinks
