function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-xl border border-white/10 bg-surface-elevated/95 px-4 py-3 shadow-xl backdrop-blur-md">
      {label && (
        <p className="mb-1 text-xs font-medium text-slate-400">{label}</p>
      )}
      {payload.map((entry) => (
        <p
          key={entry.name}
          className="text-sm font-semibold"
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}
          {entry.unit ?? ''}
        </p>
      ))}
    </div>
  )
}

export default ChartTooltip
