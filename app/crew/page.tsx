"use client";

import Link from 'next/link';

const crewMember = {
  role: 'FLIGHT ENGINEER',
  name: 'ANOUSHEH ANSARI',
  description:
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  image: '/home/image-anousheh-ansari.webp',
};

export default function Crew() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: "url('/home/image2.png')",
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
          <Link href="/" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">00</span> HOME
          </Link>
          <Link href="/destination?planet=mars" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">01</span> DESTINATION
          </Link>
          <Link href="/crew" className="text-white flex items-center gap-1 sm:gap-2 border-b-2 border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/60 text-[8px] sm:text-xs">02</span> CREW
          </Link>
          <Link href="/technology" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">03</span> TECHNOLOGY
          </Link>
        </nav>
      </header>

      <div className="flex-1 flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 lg:px-24 py-8 lg:py-12 gap-8 lg:gap-0">
        <section className="max-w-lg w-full text-center lg:text-left">
          <h2 className="text-blue-200 uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-sm sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
            <span className="font-bold text-white/40">02</span> MEET YOUR CREW
          </h2>
          <p className="text-blue-200 uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-sm sm:text-base md:text-lg mb-2">
            {crewMember.role}
          </p>
          <h1 className="text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none font-serif mb-4">
            {crewMember.name}
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
            {crewMember.description}
          </p>
        </section>

        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src={crewMember.image}
            alt={crewMember.name}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain"
            onError={(e) => {
              e.currentTarget.src = '/home/placeholder-crew.png';
            }}
          />
        </div>
      </div>
    </main>
  );
}