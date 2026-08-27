import { motion } from 'framer-motion'
import { CONTACT_CONTENT } from '../constants/contact'
import { SITE_CONFIG } from '../constants/site'
import Container from '../components/ui/Container'
import AnimatedSection from '../components/ui/AnimatedSection'
import ContactForm from '../components/shared/ContactForm'
import SocialLinks from '../components/shared/SocialLinks'

function Contact() {
  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        {/* Header */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Get in touch
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact <span className="gradient-text">Me</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Have a project in mind or want to discuss an opportunity? I&apos;d
              love to hear from you. {CONTACT_CONTENT.responseTime}
            </p>
          </div>
        </AnimatedSection>

        {/* Open To */}
        <AnimatedSection className="mb-10 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {CONTACT_CONTENT.openTo.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 xl:gap-16">
          <AnimatedSection>
            <div className="lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Let&apos;s connect
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                Reach out directly via email, phone, or WhatsApp — or use the
                form to send me a message.
              </p>
              <div className="mt-6">
                <SocialLinks />
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <p className="text-sm font-medium text-emerald-300">
                  {CONTACT_CONTENT.responseTime}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Based in {SITE_CONFIG.location} · Open to remote work worldwide
                </p>
              </div>
            </div>
          </AnimatedSection>

          <ContactForm />
        </div>
      </Container>
    </div>
  )
}

export default Contact
