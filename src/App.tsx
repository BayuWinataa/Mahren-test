import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import SplashScreen from "./components/SplashScreen"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

function App() {
  useSmoothScroll()
  const [showSplash, setShowSplash] = useState(true)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [showSplash])

  return (
    <div className="min-h-screen bg-[#F9F4F0] text-[#282C37] selection:bg-[#F88B69] selection:text-[#282C37]">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 md:h-2 bg-[#F88B69] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="relative w-full">
          
          <div className="sticky top-0 z-0">
            <CallToAction />
          </div>

          <div className="relative z-20 shadow-[0_-2px_20px_rgba(0,0,0,0.1)]">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
