import { motion } from 'framer-motion'
import { SITE_CONFIG } from '../../constants/site'

function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-11 w-11',
  }

  return (
    <motion.img
      src={SITE_CONFIG.icon}
      alt={`${SITE_CONFIG.name} logo`}
      className={`rounded-xl object-cover ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.08, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
    />
  )
}

export default Logo
