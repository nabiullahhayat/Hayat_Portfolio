import { useMemo, useState } from 'react'
import { CERTIFICATES_CONTENT } from '../constants/certificates'
import { ROUTES } from '../constants/routes'
import Container from '../components/ui/Container'
import AnimatedSection from '../components/ui/AnimatedSection'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import TextReveal from '../components/ui/TextReveal'
import Button from '../components/ui/Button'
import CertificateCard from '../components/shared/CertificateCard'
import { ArrowRight } from '../components/ui/Icons'

const categories = ['All', 'Academic', 'Training', 'AI & ML']

function Certificates() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCertificates = useMemo(() => {
    if (activeCategory === 'All') return CERTIFICATES_CONTENT.certificates
    return CERTIFICATES_CONTENT.certificates.filter(
      (cert) => cert.category === activeCategory,
    )
  }, [activeCategory])

  const aiCount = CERTIFICATES_CONTENT.certificates.filter(
    (c) => c.category === 'AI & ML',
  ).length

  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <Container>
        {/* Header */}
        <AnimatedSection className="mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Credentials
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              My <span className="gradient-text">Certificates</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              <TextReveal text={CERTIFICATES_CONTENT.intro} />
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mb-10 sm:mb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter
                  value={CERTIFICATES_CONTENT.certificates.length}
                  duration={1.2}
                />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Total Certificates
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
            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-4 sm:p-5">
              <p className="text-2xl font-bold text-violet-300 sm:text-3xl">
                <AnimatedCounter value={1} duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Practical Training
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 sm:p-5">
              <p className="text-2xl font-bold text-emerald-300 sm:text-3xl">
                <AnimatedCounter value={aiCount} duration={1.2} />
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                AI & ML Certs
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

        {/* Certificates Grid */}
        <AnimatedSection className="mb-8 sm:mb-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <p className="py-12 text-center text-slate-500">
              No certificates in this category.
            </p>
          )}
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/5 p-8 text-center sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              <TextReveal text="See my awards and honors" delay={0.05} />
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
              Explore competition wins, academic honors, and recognitions.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to={ROUTES.AWARDS} size="md">
                View Awards
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to={ROUTES.PROJECTS} variant="secondary" size="md">
                View Projects
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

export default Certificates
