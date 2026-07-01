"use client";

import { useState } from 'react';
import Link from 'next/link';

const techData = [
  {
    id: 1,
    title: 'LAUNCH VEHICLE',
    subtitle: 'THE TERMINOLOGY…',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: '/home/image-launch-vehicle-portrait.jpg',
  },
  {
    id: 2,
    title: 'SPACEPORT',
    subtitle: 'THE TERMINOLOGY…',
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: '/home/image-spaceport-portrait.jpg',
  },
  {
    id: 3,
    title: 'CAPSULE',
    subtitle: 'THE TERMINOLOGY…',
    description:
      "A capsule is a small, pressurized spacecraft designed for human spaceflight. Our advanced capsule features cutting-edge life support systems, comfortable crew quarters, and a robust heat shield for safe re-entry.",
    image: '/home/image-capsule-portrait.jpg',
  },
];

export default function Technology() {
  const [selected, setSelected] = useState(0);
  const tech = techData[selected];

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: "url('/home/background-technology-desktop.jpg')",
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
          <Link href="/crew" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">02</span> CREW
          </Link>
          <Link href="/technology" className="text-white flex items-center gap-1 sm:gap-2 border-b-2 border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/60 text-[8px] sm:text-xs">03</span> TECHNOLOGY
          </Link>
        </nav>
      </header>

      <div className="flex-1 flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 lg:px-24 py-8 lg:py-12 gap-8 lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 w-full">
          <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-6">
            {techData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleSelect(index)}
                className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 text-xl sm:text-2xl md:text-3xl font-serif transition-all flex items-center justify-center ${
                  selected === index
                    ? 'bg-white text-black border-white'
                    : 'border-white/40 text-white/60 hover:border-white hover:text-white'
                }`}
              >
                {item.id}
              </button>
            ))}
          </div>

          <section className="max-w-lg w-full text-center lg:text-left">
            <h2 className="text-blue-200 uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-sm sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
              <span className="font-bold text-white/40">03</span> SPACE LAUNCH 101
            </h2>
            <p className="text-blue-200 uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-sm sm:text-base md:text-lg mb-2">
              {tech.subtitle}
            </p>
            <h1 className="text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none font-serif mb-4">
              {tech.title}
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
              {tech.description}
            </p>
          </section>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src={tech.image}
            alt={tech.title}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain"
            onError={(e) => {
              e.currentTarget.src = '/home/placeholder-rocket.png';
            }}
          />
        </div>
      </div>
    </main>
  );
}