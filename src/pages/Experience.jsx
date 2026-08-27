import { motion } from 'framer-motion'
import { EXPERIENCE_CONTENT } from '../constants/experience'
import { ROUTES } from '../constants/routes'
import Container from '../components/ui/Container'
import AnimatedSection from '../components/ui/AnimatedSection'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import TextReveal from '../components/ui/TextReveal'
import Button from '../components/ui/Button'
import ExperienceTimeline from '../components/shared/ExperienceTimeline'
import { GrowthAreaChart } from '../components/charts'
import { ArrowRight } from '../components/ui/Icons'

function Experience() {
  const totalRoles = EXPERIENCE_CONTENT.experiences.length
  const currentRole = EXPERIENCE_CONTENT.experiences.find((job) => job.current)

  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        {/* Header */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Career journey
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              <TextReveal text={EXPERIENCE_CONTENT.intro} />
            </p>
          </div>
        </AnimatedSection>

        {/* Summary stats */}
        <AnimatedSection className="mb-10 sm:mb-14">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter value={totalRoles} duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Professional Roles
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter value="1+" duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Year Professional Experience
              </p>
            </div>
            <div className="col-span-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 sm:col-span-1 sm:p-5">
              <p className="text-sm font-semibold text-cyan-300">Currently at</p>
              <p className="mt-1 text-sm text-white sm:text-base">
                {currentRole?.company}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Career Growth Chart */}
        <AnimatedSection className="mb-10 sm:mb-14">
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
              Growth Timeline
            </p>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              <TextReveal text="Career skill progression" delay={0.05} />
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              How my expertise evolved from 2023 to 2026 across web, backend,
              mobile, and IoT.
            </p>
            <div className="mt-6">
              <GrowthAreaChart />
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <ExperienceTimeline />

        {/* CTA */}
        <AnimatedSection className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/5 p-8 text-center sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Want to see what I&apos;ve built?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
                Explore my projects — from restaurant management systems to IoT
                solutions and business software.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to={ROUTES.PROJECTS} size="md">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to={ROUTES.CONTACT} variant="secondary" size="md">
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Experience
