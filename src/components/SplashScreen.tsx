import { motion } from "framer-motion"
import { useEffect } from "react"

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    
    const timer = setTimeout(() => {
      onComplete()
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">

      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#282C37] pointer-events-auto"
      />

      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#282C37] pointer-events-auto"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          scale: [0.95, 1, 1, 1.05] 
        }}
        transition={{ 
          duration: 1.5, 
          times: [0, 0.3, 0.7, 1], 
          ease: "easeInOut" 
        }}
        className="absolute z-10 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#F9F4F0] tracking-[0.2em] uppercase">
          MAHREEN IN.
        </h1>
      </motion.div>
      
    </div>
  )
}
