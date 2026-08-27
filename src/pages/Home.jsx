import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from '../components/ui/Icons'
import { SITE_CONFIG } from '../constants/site'
import { CHART_DATA } from '../constants/charts'
import { ROUTES } from '../constants/routes'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import AnimatedSection from '../components/ui/AnimatedSection'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import TypewriterText from '../components/ui/TypewriterText'
import TextReveal from '../components/ui/TextReveal'
import { SkillsRadarChart, SkillsBarChart } from '../components/charts'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function Home() {
  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <section className="relative min-h-[calc(100svh-8rem)] lg:min-h-[calc(100svh-10rem)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20"
          >
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <motion.div
                variants={itemVariants}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-300"
              >
                <Sparkles className="h-4 w-4" />
                Available for new opportunities
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-base"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
              >
                {SITE_CONFIG.name.split(' ')[0]}{' '}
                <span className="gradient-text">
                  {SITE_CONFIG.name.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl md:text-3xl"
              >
                <TypewriterText words={CHART_DATA.typewriterRoles} />
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
              >
                <TextReveal text={SITE_CONFIG.tagline} />
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Button to={ROUTES.PROJECTS} size="lg">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={SITE_CONFIG.resume} variant="secondary" size="lg">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 lg:max-w-lg"
              >
                {SITE_CONFIG.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-4 sm:px-4"
                  >
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-emerald-400/20 blur-sm sm:-inset-5"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-card image-glow">
                  <motion.img
                    src={SITE_CONFIG.image}
                    alt={SITE_CONFIG.name}
                    className="aspect-[4/5] w-full max-w-[280px] object-cover object-top sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[420px]"
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="glass absolute -bottom-4 -left-2 rounded-2xl px-4 py-3 sm:-left-6"
                >
                  <p className="text-xs text-slate-400">Currently</p>
                  <p className="text-sm font-semibold text-white">
                    {SITE_CONFIG.title}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  className="glass absolute -right-2 top-8 rounded-2xl px-4 py-3 sm:-right-6"
                >
                  <p className="text-xs text-slate-400">Focus</p>
                  <p className="text-sm font-semibold text-cyan-300">
                    Full-Stack Dev
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <AnimatedSection className="mt-8 sm:mt-12">
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                  Tech Stack
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Tools I work with
                </h3>
              </div>
              <Button to={ROUTES.ABOUT} variant="ghost" size="sm">
                Learn more about me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              {SITE_CONFIG.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-white"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Charts Section */}
        <AnimatedSection className="mt-8 sm:mt-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                Skill Overview
              </p>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                <TextReveal text="Proficiency radar" delay={0.1} />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                My expertise across development domains
              </p>
              <div className="mt-4">
                <SkillsRadarChart />
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
                Top Skills
              </p>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                <TextReveal text="Technology proficiency" delay={0.1} />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Core technologies I use most
              </p>
              <div className="mt-4">
                <SkillsBarChart />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/5 p-8 sm:p-10 lg:p-12">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                <TextReveal text="Let's build something exceptional together" />
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg">
                Open to opportunities in software engineering, AI, ML, and
                robotics — let&apos;s build something impactful together.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button to={ROUTES.CONTACT} size="md">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to={ROUTES.PROJECTS} variant="secondary" size="md">
                  Explore Projects
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Home
