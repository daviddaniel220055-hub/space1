export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: "url('/home/image.png')",
      }}
    >
      <header className="flex items-center pt-4 sm:pt-8 relative z-20 px-4 sm:px-8 lg:px-12">
        <img
          src="/home/image1.png"
          alt="Logo"
          className="w-8 sm:w-10 md:w-12 object-contain flex-shrink-0 mr-4 sm:mr-6 md:mr-8"
        />
        <div className="flex-1 h-px bg-white/30 hidden sm:block"></div>
        <nav className="bg-white/5 backdrop-blur-md px-3 py-3 sm:px-6 sm:py-4 md:px-12 md:py-5 flex gap-3 sm:gap-6 md:gap-10 lg:gap-12 uppercase tracking-widest text-[10px] sm:text-xs md:text-sm overflow-x-auto">
          <a href="/" className="text-white flex items-center gap-1 sm:gap-2 border-b-2 border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/60 text-[8px] sm:text-xs">00</span> HOME
          </a>
          <a href="/destination?planet=mars" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">01</span> DESTINATION
          </a>
          <a href="/crew" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">02</span> CREW
          </a>
          <a href="/technology" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">03</span> TECHNOLOGY
          </a>
        </nav>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-24 py-8 lg:py-12 text-center lg:text-left gap-8 lg:gap-0">
        <section className="max-w-lg">
          <h2 className="text-blue-200 uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-sm sm:text-xl md:text-2xl mb-4 sm:mb-6">
            So, you want to travel to
          </h2>
          <h1 className="text-white text-[60px] sm:text-[100px] md:text-[130px] lg:text-[150px] leading-none font-serif">
            SPACE
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 mt-4 sm:mt-6 md:mt-8 max-w-md mx-auto lg:mx-0">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge
            of it. Well sit back, relax, and we'll give you a truly out of
            this world experience!
          </p>
        </section>

        <section className="flex items-center justify-center">
          <div className="group w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full flex items-center justify-center transition duration-500 hover:scale-110">
            <button className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-white text-black text-base sm:text-2xl md:text-3xl uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] font-serif shadow-2xl hover:shadow-white/50 transition-all">
              Explore
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}