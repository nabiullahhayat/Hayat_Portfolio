import { useMemo, useState } from 'react'
import { AWARDS_CONTENT } from '../constants/awards'
import { ROUTES } from '../constants/routes'
import Container from '../components/ui/Container'
import AnimatedSection from '../components/ui/AnimatedSection'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import TextReveal from '../components/ui/TextReveal'
import Button from '../components/ui/Button'
import AwardCard from '../components/shared/AwardCard'
import { ArrowRight } from '../components/ui/Icons'

const categories = ['All', 'Academic', 'Innovation', 'Competition']

function Awards() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredAwards = useMemo(() => {
    if (activeCategory === 'All') return AWARDS_CONTENT.awards
    return AWARDS_CONTENT.awards.filter(
      (award) => award.category === activeCategory,
    )
  }, [activeCategory])

  const firstPlaceCount = AWARDS_CONTENT.awards.filter(
    (a) => a.badge === '1st Place',
  ).length

  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        {/* Header */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Recognition
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Awards & <span className="gradient-text">Honors</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              <TextReveal text={AWARDS_CONTENT.intro} />
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mb-10 sm:mb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter
                  value={AWARDS_CONTENT.awards.length}
                  duration={1.2}
                />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Total Awards
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 sm:p-5">
              <p className="text-2xl font-bold text-emerald-300 sm:text-3xl">
                <AnimatedCounter value={firstPlaceCount} duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                First Place Wins
              </p>
            </div>
            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-4 sm:p-5">
              <p className="text-2xl font-bold text-violet-300 sm:text-3xl">
                <AnimatedCounter value={1} duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Innovation Award
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 sm:p-5">
              <p className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                <AnimatedCounter value={1} duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                University Degree
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="mb-8 sm:mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300'
                    : 'border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Awards Grid */}
        <AnimatedSection className="mb-8 sm:mb-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAwards.map((award, index) => (
              <AwardCard key={award.id} award={award} index={index} />
            ))}
          </div>

          {filteredAwards.length === 0 && (
            <p className="py-12 text-center text-slate-500">
              No awards in this category.
            </p>
          )}
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/5 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              <TextReveal text="View my professional certificates" delay={0.05} />
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
              Explore my training certificates and professional credentials.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to={ROUTES.CERTIFICATES} size="md">
                View Certificates
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to={ROUTES.CONTACT} variant="secondary" size="md">
                Get in Touch
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Awards
