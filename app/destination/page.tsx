"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const planetData = {
  MOON: {
    name: 'MOON',
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 KM',
    travelTime: '3 DAYS',
  },
  MARS: {
    name: 'MARS',
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: '225 MIL. KM',
    travelTime: '9 MONTHS',
  },
  EUROPA: {
    name: 'EUROPA',
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: '628 MIL. KM',
    travelTime: '3 YEARS',
  },
  TITAN: {
    name: 'TITAN',
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: '1.6 BIL. KM',
    travelTime: '7 YEARS',
  },
};

export default function Destination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const planetParam = searchParams.get('planet');
  const initialPlanet = planetParam && planetData[planetParam.toUpperCase() as keyof typeof planetData]
    ? planetParam.toUpperCase()
    : 'MARS';

  const [selected, setSelected] = useState(initialPlanet);
  const planet = planetData[selected as keyof typeof planetData];

  useEffect(() => {
    const current = searchParams.get('planet');
    if (selected.toLowerCase() !== current) {
      router.push(`/destination?planet=${selected.toLowerCase()}`, { scroll: false });
    }
  }, [selected, router, searchParams]);

  const getImagePath = (planetName: string) => {
    const lower = planetName.toLowerCase();
    if (planetName === 'MOON' || planetName === 'EUROPA' || planetName === 'TITAN') {
      return `/home/image-${lower}.webp`;
    }
    return `/home/image-${lower}.png`;
  };

  const imagePath = getImagePath(planet.name);

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
          <Link href="/destination?planet=mars" className="text-white flex items-center gap-1 sm:gap-2 border-b-2 border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/60 text-[8px] sm:text-xs">01</span> DESTINATION
          </Link>
          <Link href="/crew" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">02</span> CREW
          </Link>
          <Link href="/technology" className="text-white/70 flex items-center gap-1 sm:gap-2 hover:text-white hover:border-b-2 hover:border-white pb-1 -mb-1 transition-all whitespace-nowrap">
            <span className="font-bold text-white/40 text-[8px] sm:text-xs">03</span> TECHNOLOGY
          </Link>
        </nav>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-24 py-8 lg:py-12 gap-8 lg:gap-0">
        <div className="flex-1 flex flex-col h-full w-full items-center lg:items-start">
          <h2 className="text-blue-200 uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-sm sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className="font-bold text-white/40">01</span> PICK YOUR DESTINATION
          </h2>
          <div className="flex-1 flex items-center justify-center w-full">
            <img
              src={imagePath}
              alt={planet.name}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              onError={(e) => {
                e.currentTarget.src = '/home/placeholder-planet.png';
              }}
            />
          </div>
        </div>

        <section className="max-w-lg w-full lg:ml-12 text-center lg:text-left">
          <div className="flex gap-4 sm:gap-6 md:gap-8 uppercase tracking-widest text-white/80 text-xs sm:text-sm mb-6 sm:mb-8 justify-center lg:justify-start">
            {Object.keys(planetData).map((key) => {
              const isActive = key === selected;
              return (
                <Link
                  key={key}
                  href={`/destination?planet=${key.toLowerCase()}`}
                  className={`pb-1 sm:pb-2 border-b-2 transition-all ${
                    isActive
                      ? 'border-white text-white'
                      : 'border-transparent hover:border-white/50 text-white/50 hover:text-white/80'
                  }`}
                >
                  {key}
                </Link>
              );
            })}
          </div>

          <h1 className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-none font-serif mb-4">
            {planet.name}
          </h1>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 border-b border-white/20 pb-6 sm:pb-8 mb-6 sm:mb-8">
            {planet.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 uppercase tracking-widest justify-center lg:justify-start">
            <div>
              <p className="text-blue-200 text-xs sm:text-sm mb-1">AVG. DISTANCE</p>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-serif">{planet.distance}</p>
            </div>
            <div>
              <p className="text-blue-200 text-xs sm:text-sm mb-1">EST. TRAVEL TIME</p>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-serif">{planet.travelTime}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}