import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/20',
  secondary:
    'border border-white/10 bg-white/5 text-white',
  ghost: 'text-slate-300',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

const motionProps = {
  whileHover: { scale: 1.04, y: -1 },
  whileTap: { scale: 0.96 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
}

function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} onClick={onClick} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
