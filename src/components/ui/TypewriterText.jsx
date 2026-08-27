import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function TypewriterText({ words, className = '', speed = 70, pause = 2200 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting && displayed === currentWord) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return undefined
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(currentWord.slice(0, displayed.length + 1))
        } else {
          setDisplayed(currentWord.slice(0, displayed.length - 1))
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, speed, pause])

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="gradient-text">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block h-[1em] w-0.5 bg-cyan-400"
        aria-hidden="true"
      />
    </span>
  )
}

export default TypewriterText
