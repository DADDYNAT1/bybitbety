import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FlyingBety = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    '/images/flying bety.png',
    '/images/flying bety2.png'
  ]

  useEffect(() => {
    // First animation starts after 6 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true)
      setCurrentImage(0)

      // Hide after animation completes (5 seconds for animation)
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }, 6000)

    // Set up alternating animations every 60 seconds after the first one
    const interval = setInterval(() => {
      setIsVisible(true)
      setCurrentImage(prev => (prev + 1) % 2) // Toggle between 0 and 1
      
      // Hide after animation completes
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }, 60000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            x: currentImage === 0 ? '-200px' : 'calc(100vw + 200px)',
            y: '50vh'
          }}
          animate={{
            x: currentImage === 0 ? 'calc(100vw + 200px)' : '-200px',
            y: ['50vh', '30vh', '40vh', '25vh', '50vh']
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 5,
            ease: 'linear',
            y: {
              duration: 5,
              ease: 'easeInOut'
            }
          }}
          className="fixed pointer-events-none z-50"
          style={{
            width: '200px',
            height: 'auto'
          }}
        >
          <img
            src={images[currentImage]}
            alt="Flying Bety"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FlyingBety
