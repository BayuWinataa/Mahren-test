import { motion } from "framer-motion"
import { Player } from "@lottiefiles/react-lottie-player"

const values = [
  {
    num: "01",
    title: "KREATIVITAS",
    subtitle: "MENDORONG INOVASI LOKAL",
    desc: "Kami percaya bahwa setiap ide memiliki kekuatan untuk mengubah dunia. Melalui pendekatan kreatif, kami membantu memfasilitasi inovasi yang berakar dari kearifan lokal untuk menciptakan solusi yang relevan dan berdaya guna.",
    tags: ["INOVASI", "IDE", "SOLUSI"],
    lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json",
    bgColor: "#6ccfa1"
  },
  {
    num: "02",
    title: "TEKNOLOGI",
    subtitle: "MENCIPTAKAN SOLUSI SCALABLE",
    desc: "Teknologi adalah kunci untuk memperluas jangkauan dan memperbesar skala dampak. Kami memanfaatkan teknologi mutakhir untuk merancang ekosistem digital yang efisien, aman, dan dapat terus berkembang di masa depan.",
    tags: ["DIGITAL", "CODE", "IMPACT"],
    lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json",
    bgColor: "#F88B69"
  },
  {
    num: "03",
    title: "DAMPAK SOSIAL",
    subtitle: "MEMBERDAYAKAN MASYARAKAT",
    desc: "Lebih dari sekadar bisnis, tujuan utama kami adalah menciptakan perubahan positif yang nyata bagi masyarakat. Kami berkomitmen untuk mendukung inisiatif yang memberdayakan komunitas dan meningkatkan kualitas hidup.",
    tags: ["KOMUNITAS", "AKSI", "NYATA"],
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json",
    bgColor: "#e61c5d"
  },
  {
    num: "04",
    title: "KOLABORASI",
    subtitle: "MEMBANGUN KONEKSI GLOBAL",
    desc: "Tidak ada perubahan besar yang bisa dicapai sendirian. Kami secara aktif membuka ruang diskusi dan kemitraan antar berbagai pihak untuk bersinergi, berbagi visi, dan melangkah bersama menuju kesuksesan.",
    tags: ["JEJARING", "SINERGI", "TUMBUH"],
    lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json",
    bgColor: "#3b82f6"
  }
]

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full py-24 md:py-32" style={{ backgroundColor: "#F9F4F0" }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col gap-12 md:gap-24">

        <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-8 pb-10 md:pb-16 border-b-[1.5px] border-[#282C37]/10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-display font-black leading-[0.9] uppercase tracking-tighter text-[#282C37]"
          >
            TENTANG <span className="text-[#F88B69] stroke-text">PROGRAM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl font-body leading-[1.6] text-[#282C37]/80"
          >
            Membangun generasi kreatif dan inovatif untuk masa depan Indonesia yang lebih baik. Kami berdedikasi untuk menciptakan ekosistem yang mendukung pertumbuhan talenta lokal.
          </motion.p>
        </div>
      </div>

      <div className="w-full flex flex-col relative  mt-16 md:mt-24">
        {values.map((item, index) => (
          <div
            key={item.num}
            className="w-full relative border-[1.5px] border-[#282C37] sticky shadow-xl"
            style={{
              backgroundColor: item.bgColor,
              top: `calc(5rem + ${index * 48}px)`,
              zIndex: 10 + index
            }}
          >

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8  py-12 md:py-16 min-h-[auto] md:min-h-[500px]">

              <div className="md:col-span-2 lg:col-span-3">
                <div
                  className="text-6xl md:text-7xl lg:text-[7rem] font-display font-bold leading-none"
                  style={{
                    color: "white",
                    WebkitTextStroke: "1.5px #282C37",
                  }}
                >
                  {item.num}
                </div>
              </div>

              <div className="md:col-span-5 lg:col-span-4 flex items-start justify-center md:justify-start relative -mt-8 md:-mt-16">
                <div className="w-[80%] md:w-full max-w-[320px] md:max-w-none aspect-square relative z-10 ml-auto md:ml-0 bg-[#F9F4F0] border-[1.5px] border-[#282C37] overflow-hidden group">

                  <div className="absolute top-4 left-4 md:top-auto md:bottom-12 md:left-auto md:right-full md:mr-3 flex flex-row md:flex-col gap-1.5 md:gap-2 items-start md:items-end z-20 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="font-body font-bold text-[10px] md:text-xs tracking-widest px-3 py-1 bg-[#282C37] text-white rounded-full whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <Player
                      autoplay
                      loop
                      src={item.lottieUrl}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 lg:col-span-5 text-left md:text-right flex flex-col pt-6 md:pt-0">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl  xl:text-[6rem] font-display font-bold leading-[0.9] uppercase break-words w-full"
                  style={{
                    color: "white",
                    WebkitTextStroke: "1.5px #282C37",
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-4 md:mt-8 text-[#282C37] font-body font-bold text-xs md:text-sm lg:text-base uppercase tracking-widest"
                >
                  {item.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-4 md:mt-8 text-[#282C37]/90 font-body text-sm md:text-base lg:text-lg max-w-2xl leading-[1.7] md:leading-[1.8] self-start md:self-end"
                >
                  {item.desc}
                </motion.p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

