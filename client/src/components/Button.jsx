import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ children, href, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = 'px-8 py-4 font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    outline: 'border border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600',
  }

  const Component = href ? Link : 'button'
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Component
        to={href}
        onClick={onClick}
        type={type}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  )
}

export default Button
