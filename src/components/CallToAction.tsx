import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section id="cta" className="relative z-20 w-full min-h-screen flex items-center border-t-[1.5px] border-[#282C37]" style={{ backgroundColor: "#F9F4F0" }}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center py-20 px-4">
        <div className="flex flex-col gap-8 md:gap-12 pr-0 lg:pr-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-black leading-[0.95] uppercase text-[#282C37] tracking-tight"
          >
            MARI MULAI<br />BERKARYA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg lg:text-xl text-[#282C37] max-w-sm md:max-w-md font-body leading-[1.6]"
          >
            Punya ide brilian tapi bingung harus mulai dari mana? Itulah mengapa kami di sini. Ayo hubungi kami!
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 md:gap-14 lg:pt-8 pl-0 lg:pl-12 border-l-0 lg:border-l-[1.5px] border-[#282C37]/10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl lg:text-3xl font-body font-medium text-[#282C37] leading-[1.5] tracking-tight"
          >
            Selamat datang di sudut kreatif kami, kami yakin kamu akan menikmati perjalananmu di sini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="group relative overflow-hidden flex items-center gap-4 md:gap-6 border-[1.5px] border-[#282C37] rounded-[3rem] p-2 pr-8 md:pr-10 transition-all duration-500 ease-out  hover:border-[#F88B69]">
              <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F88B69] flex items-center justify-center text-[#282C37] group-hover:scale-95 transition-transform duration-300 shrink-0 relative z-10">
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
              </span>
              <span className="font-body font-bold tracking-[0.15em] text-sm md:text-base text-[#282C37] uppercase transition-colors duration-500 relative z-10 ">
                GABUNG SEKARANG
              </span>
              <div className="absolute inset-0 bg-[#F88B69] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-0 rounded-[3rem]" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
