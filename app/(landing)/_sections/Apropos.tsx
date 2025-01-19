
"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
  return (
    <section className=" py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Section Image */}
        <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-duration="1000" >
          <Image
            src="/IMG-20250119-WA0002.jpg" // Chemin vers l'image
            alt="Voiture de SMS Services"
            width={800}
            height={600}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Section Texte */}
        <div className="w-full md:w-1/2  md:text-left" data-aos="fade-left"  data-aos-duration="1000" >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            À propos de SMS Services
          </h2>
          <p className="text-gray-600  leading-relaxed mb-6 text-base">
            Chez <span className="font-semibold text-blue-600">SMS SERVICES</span>, nous sommes fiers d'offrir des services de nettoyage automobile de qualité supérieure. 
            Notre équipe passionnée s'engage à redonner à votre véhicule son éclat d'origine, en utilisant des techniques modernes et des produits respectueux de l'environnement.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Basés à <span className="font-semibold text-blue-600">Le Thor</span>, nous vous accueillons dans un cadre convivial et professionnel. 
            Faites confiance à notre expertise pour prendre soin de votre voiture, à l'intérieur comme à l'extérieur.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all">
             <Link href={"/apropos"}>En savoir plus</Link> 
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
