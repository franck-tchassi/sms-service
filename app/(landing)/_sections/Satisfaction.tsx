"use client";

import Image from "next/image";

const Satisfaction = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              La satisfaction de nos clients, notre priorité
            </h2>
            <p className="text-gray-600 text-base  leading-relaxed mb-6">
              Chez <span className="font-semibold text-blue-600">SMS Services</span>, nous mettons tout en œuvre pour garantir la qualité de nos services. Votre satisfaction est au cœur de notre engagement.
              Grâce à notre engagement pour des services de qualité et respectueux de l&apos;environnement, nous avons gagné la confiance de milliers de clients.
            </p>
            
        </div>
        
        <div className="w-full md:w-1/2">
          <Image
            src="/IMG-20250119-WA0012.jpg" // Chemin vers l'image téléchargée
            alt="Satisfaction client chez SMS Services"
            width={600}
            height={400}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Satisfaction;
