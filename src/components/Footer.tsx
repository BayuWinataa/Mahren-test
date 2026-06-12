
export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#282C37] text-[#F9F4F0] py-12 overflow-hidden ">
      <div className="container mx-auto flex flex-col px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 ">
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display font-black text-3xl md:text-4xl tracking-tight uppercase">Mahreen In.</h3>
            <p className="font-body text-base md:text-lg opacity-80 max-w-sm leading-[1.6]">
              Berkarya untuk Indonesia. Memberdayakan kreativitas, teknologi, dan dampak sosial yang nyata.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-3 hidden md:block">

          </div>

          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-body font-bold text-xs tracking-[0.2em] uppercase opacity-50">Jelajahi</h4>
            <ul className="flex flex-col items-start gap-4 font-body font-medium text-sm md:text-base">
              <li><a href="#hero" className="hover:text-[#F88B69] transition-colors duration-300">Beranda</a></li>
              <li><a href="#about" className="hover:text-[#F88B69] transition-colors duration-300">Tentang Program</a></li>
              <li><a href="#cta" className="hover:text-[#F88B69] transition-colors duration-300">Mari Mulai Berkarya</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-body font-bold text-xs tracking-[0.2em] uppercase opacity-50">Sosial</h4>
            <ul className="flex flex-col gap-4 font-body font-medium text-sm md:text-base">
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-[#6ccfa1] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-[#6ccfa1] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-[#6ccfa1] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
