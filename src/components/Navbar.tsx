
import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Program", href: "#about" },
  { label: "Mari Mulai Berkarya", href: "#cta" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.onChange((v) => setScrolled(v > 40))
    return unsub
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(249,244,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(40,44,55,0.08)" : "1px solid transparent",
      }}
    >
      <div className="w-full border-b-[1.5px] border-[#282C37]/10">
        <nav className="relative z-50 container mx-auto  h-24 flex items-center justify-between">

          <a href="#hero" className="flex flex-col items-center justify-center group">
            <span className="font-display text-xl md:text-2xl font-bold tracking-widest text-center" style={{ color: scrolled ? "#282C37" : "#F9F4F0" }}>
              MAHREEN
            </span>
            <span className="text-[0.55rem] md:text-[0.65rem] font-body tracking-[0.4em] block -mt-1 md:-mt-1 text-center" style={{ color: "#F88B69" }}>
              INDONESIA
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm relative group transition-colors"
                  style={{ color: "#7C8290" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#F88B69" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full flex flex-col justify-center items-center gap-1 cursor-pointer z-20 flex-shrink-0 shadow-md"
            style={{ backgroundColor: "#F88B69" }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} color="#FFF" />
            ) : (
              <>
                <span className="w-4 h-[2px] bg-white block rounded-full"></span>
                <span className="w-4 h-[2px] bg-white block rounded-full"></span>
                <span className="w-4 h-[2px] bg-white block rounded-full"></span>
              </>
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 z-30"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed top-0 right-0 h-screen w-64 sm:w-72 shadow-2xl z-40 flex flex-col items-center justify-center"
        style={{ backgroundColor: "#F9F4F0" }}
      >
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              transition={{ duration: 0.4, delay: isOpen ? 0.1 + (i * 0.1) : 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-[10px] font-body tracking-[0.2em] text-[#7C8290] mb-2 uppercase opacity-70">
                0{i + 1}
              </span>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative overflow-hidden px-8 py-3 font-display text-3xl font-medium tracking-wide block text-center transition-colors duration-300 group text-[#282C37] hover:text-[#F9F4F0] rounded-full"
              >

                <div className="absolute inset-0 bg-[#F88B69] origin-right scale-x-0 transition-transform duration-500 ease-in-out group-hover:origin-left group-hover:scale-x-100 -z-10" />
                <span className="relative z-10">{link.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
