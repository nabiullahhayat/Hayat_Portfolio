import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function parseStatValue(value) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: parseFloat(match[1]), suffix: match[2] || '' }
}

function AnimatedCounter({ value, duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const { number: target, suffix } = parseStatValue(value)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - (1 - progress) ** 3
      const current = Math.round(eased * target)
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {count}
      {suffix}
    </motion.span>
  )
}

export default AnimatedCounter
