import { motion } from 'framer-motion'
import { EXPERIENCE_CONTENT } from '../../constants/experience'

const typeColors = {
  'Full-time': 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  'Internship / Practical Training':
    'border-violet-400/30 bg-violet-400/10 text-violet-300',
}

function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line — desktop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/30 to-transparent sm:block"
      />

      <div className="space-y-8 sm:space-y-10">
        {EXPERIENCE_CONTENT.experiences.map((job, index) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative sm:pl-14"
          >
            {/* Timeline dot */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border sm:flex ${
                job.current
                  ? 'border-cyan-400/50 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                  : 'border-white/15 bg-white/[0.04]'
              }`}
            >
              <span
                className={`h-3 w-3 rounded-full ${
                  job.current
                    ? 'bg-cyan-400 animate-pulse'
                    : 'bg-violet-400/70'
                }`}
              />
            </span>

            <div
              className={`rounded-3xl border bg-white/[0.02] p-6 transition-colors sm:p-8 ${
                job.current
                  ? 'border-cyan-400/20 hover:border-cyan-400/30'
                  : 'border-white/8 hover:border-white/15'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                        typeColors[job.type] ??
                        'border-white/15 bg-white/[0.04] text-slate-300'
                      }`}
                    >
                      {job.type}
                    </span>
                    {job.current && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-cyan-300">
                    {job.company}
                  </p>
                </div>

                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-sm font-semibold text-white">
                    {job.start} — {job.end}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                {job.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Responsibilities
                </h4>
                <ul className="mt-3 space-y-2">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-violet-300">
                  Key Achievements
                </h4>
                <ul className="mt-3 space-y-2">
                  {job.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-0.5 shrink-0 text-emerald-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
