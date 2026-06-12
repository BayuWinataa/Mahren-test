import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] flex flex-col justify-center items-center overflow-hidden w-full px-6 py-20"
      style={{ backgroundColor: "#050506ff" }}
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-12 container mx-auto ">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display uppercase tracking-tight w-full flex flex-col items-center justify-center"
          style={{
            fontSize: "clamp(2.5rem, 11vw, 12rem)",
            fontWeight: 400,
            color: "var(--color-primary)",
            lineHeight: 0.85,
          }}
        >
          <span className="block text-[#F88B69] font-semibold">BERKARYA UNTUK</span>
          <span className="block relative inline-block text-[#F88B69] font-semibold">
            INDONESIA
            <motion.img
              initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 5, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              src="/pohon.png"
              alt="Pohon"
              className="absolute -right-[15%] md:-right-[12%] bottom-[10%] w-[25%] md:w-[28%] max-w-[120px] md:max-w-[200px] object-contain drop-shadow-2xl pointer-events-none"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-body uppercase mt-10 md:mt-16 text-[10px] sm:text-xs md:text-sm lg:text-base max-w-[90%] md:max-w-3xl leading-[1.8] tracking-[0.1em] font-medium px-4"
          style={{ color: "var(--color-white)" }}
        >
          MENGAJAK GENERASI MUDA INDONESIA MEMANFAATKAN KREATIVITAS<br className="hidden md:block" />
          DAN TEKNOLOGI UNTUK MEMBERIKAN DAMPAK<br className="hidden md:block" />
          POSITIF BAGI MASYARAKAT.
        </motion.p>
      </div>
    </section>
  )
}
