function SectionHeading({ label, title, description, className = '', align = 'left' }) {
  const alignment =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`${alignment} ${className}`}>
      {label && (
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
          {label}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {description && (
        <p className={`mt-3 max-w-2xl text-base leading-relaxed text-slate-400 ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
