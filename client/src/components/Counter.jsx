import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Counter = ({ target, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime
      const startCount = 0

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * target)
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, target, duration])

  return (
    <motion.span ref={ref} className="text-blue-600 font-bold">
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}

export default Counter
