"use client";

import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative w-full h-screen md:h-[80vh] lg:h-screen">
      {/* Vidéo de fond */}
      <video
        src="/VID-20250119-WA0020.mp4" // Chemin vers la vidéo
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <Typewriter
            words={["Bienvenue chez SMS Services"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1200}
            />
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-sm sm:max-w-md md:max-w-2xl">
          Offrez à votre véhicule un soin d&apos;exception avec nos services
          professionnels.
        </p>
        <Link href="/rdv">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all">
            Prendre Rendez-vous
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;