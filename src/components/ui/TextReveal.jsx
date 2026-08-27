import { motion } from 'framer-motion'

function TextReveal({
  text,
  className = '',
  as: Tag = 'span',
  delay = 0,
  stagger = 0.04,
  once = true,
}) {
  const words = text.split(' ')

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once, margin: '-20px' }}
          transition={{
            duration: 0.45,
            delay: delay + index * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

export default TextReveal
