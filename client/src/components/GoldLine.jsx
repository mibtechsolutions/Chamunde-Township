import { motion } from 'framer-motion'

const GoldLine = ({ width = 'w-full', className = '' }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`h-0.5 bg-blue-600 ${width} ${className}`}
    ></motion.div>
  )
}

export default GoldLine
