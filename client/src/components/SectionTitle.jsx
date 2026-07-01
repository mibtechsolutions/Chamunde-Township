import { motion } from 'framer-motion'

const SectionTitle = ({ subtitle, title, description, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl text-blue-500 md:text-4xl lg:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-gray-400 max-w-2xl ${
      align === 'center' ? 'mx-auto text-center' : ''
    }`}
        >
          {description}
        </motion.p>
      )}
      <div className={`w-20 h-1 gold-gradient mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  )
}

export default SectionTitle
