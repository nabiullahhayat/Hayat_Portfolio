import { motion } from 'framer-motion'
import { ABOUT_CONTENT } from '../constants/about'
import { SITE_CONFIG } from '../constants/site'
import { CHART_DATA } from '../constants/charts'
import { ROUTES } from '../constants/routes'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionHeading from '../components/ui/SectionHeading'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import TextReveal from '../components/ui/TextReveal'
import { TechPieChart, SkillsBarChart } from '../components/charts'
import { ArrowRight, Download } from '../components/ui/Icons'

const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'cyan' },
  { key: 'backend', label: 'Backend', color: 'violet' },
  { key: 'database', label: 'Database', color: 'emerald' },
  { key: 'devops', label: 'DevOps & Tools', color: 'cyan' },
  { key: 'mobile', label: 'Mobile Apps', color: 'violet' },
  { key: 'iot', label: 'IoT & Hardware', color: 'emerald' },
]

const colorMap = {
  cyan: 'border-cyan-400/20 bg-cyan-400/5 text-cyan-300',
  violet: 'border-violet-400/20 bg-violet-400/5 text-violet-300',
  emerald: 'border-emerald-400/20 bg-emerald-400/5 text-emerald-300',
}

function About() {
  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        {/* Page Header */}
        <AnimatedSection className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Get to know me
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              <TextReveal
                text={`${SITE_CONFIG.title} · ${SITE_CONFIG.location}`}
                className="justify-center"
              />
            </p>
          </div>
        </AnimatedSection>

        {/* Bio + Photo */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-14 xl:grid-cols-[1fr_420px]">
            <div>
              <SectionHeading
                label="Introduction"
                title="Who I am"
                description={ABOUT_CONTENT.bio}
              />

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 lg:max-w-md">
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
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={SITE_CONFIG.resume} size="md">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button to={ROUTES.CONTACT} variant="secondary" size="md">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-card image-glow">
                <img
                  src={SITE_CONFIG.image}
                  alt={SITE_CONFIG.name}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="glass mt-4 rounded-2xl p-4 text-center sm:p-5">
                <p className="text-sm font-semibold text-white">
                  {ABOUT_CONTENT.currentRole.title}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {ABOUT_CONTENT.currentRole.company}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
            <SectionHeading
              label="My Journey"
              title="Background & Story"
              description={ABOUT_CONTENT.story}
            />
          </div>
        </AnimatedSection>

        {/* Education + Current Role */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                Education
              </p>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                {ABOUT_CONTENT.education.degree}
              </h3>
              <p className="mt-2 text-slate-300">
                {ABOUT_CONTENT.education.university}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Graduating {ABOUT_CONTENT.education.year}
              </p>
            </div>

            <div className="rounded-3xl border border-white/8 bg-gradient-to-br from-violet-500/10 to-transparent p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
                Current Role
              </p>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                {ABOUT_CONTENT.currentRole.title}
              </h3>
              <p className="mt-2 text-slate-300">
                {ABOUT_CONTENT.currentRole.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {ABOUT_CONTENT.currentRole.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Charts */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <SectionHeading
            label="Analytics"
            title="Skills at a glance"
            description="Visual breakdown of my technical expertise and tool distribution."
            className="mb-8 sm:mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">
                <TextReveal text="Tech stack distribution" delay={0.05} />
              </h3>
              <TechPieChart />
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                {CHART_DATA.techDistribution.map((item) => (
                  <span key={item.name} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">
                <TextReveal text="Top skill proficiency" delay={0.05} />
              </h3>
              <SkillsBarChart />
            </div>
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <SectionHeading
            label="Expertise"
            title="Skills & Technologies"
            description="A diverse toolkit spanning web, mobile, backend, and IoT development."
            className="mb-8 sm:mb-10"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-6"
              >
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colorMap[category.color]}`}
                >
                  {category.label}
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ABOUT_CONTENT.skills[category.key].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <SectionHeading
            label="Highlights"
            title="Key Achievements"
            className="mb-8 sm:mb-10"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {ABOUT_CONTENT.achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-sm font-bold text-cyan-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Goals, Hobbies, Languages */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:p-7 lg:col-span-1">
              <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
                Looking For
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {ABOUT_CONTENT.lookingFor}
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-7">
              <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
                Hobbies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ABOUT_CONTENT.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-7">
              <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                Languages
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ABOUT_CONTENT.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/5 p-8 text-center sm:p-10 lg:p-12">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s work together
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-slate-400 sm:text-lg">
                Interested in collaborating or have a project in mind? I&apos;d
                love to hear from you.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to={ROUTES.CONTACT} size="md">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to={ROUTES.PROJECTS} variant="secondary" size="md">
                  View My Projects
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default About
