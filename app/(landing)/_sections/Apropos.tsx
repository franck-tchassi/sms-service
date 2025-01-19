"use client";

import Image from "next/image";
import Link from "next/link";



const About = () => {
 

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Section Image */}
        <div
          className="w-full md:w-1/2"
          
        >
          <Image
            src="/IMG-20250119-WA0002.jpg" // Chemin vers l'image
            alt="Voiture de SMS Services"
            width={600}
            height={400}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Section Texte */}
        <div
          className="w-full md:w-1/2 text-left"
          
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            À propos de SMS Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-base">
            Chez <span className="font-semibold text-blue-600">SMS SERVICES</span>, nous sommes fiers d&apos;offrir des services de nettoyage automobile de qualité supérieure.
            Notre équipe passionnée s&apos;engage à redonner à votre véhicule son éclat d&apos;origine, en utilisant des techniques modernes et des produits respectueux de l&apos;environnement.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Basés à <span className="font-semibold text-blue-600">Le Thor</span>, nous vous accueillons dans un cadre convivial et professionnel.
            Faites confiance à notre expertise pour prendre soin de votre voiture, à l&apos;intérieur comme à l&apos;extérieur.
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

