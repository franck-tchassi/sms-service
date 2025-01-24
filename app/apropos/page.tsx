"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const apropos = [
    {
      id: "history",
      title: "Notre Histoire",
      description: [
        "SMS Services a été fondée avec une vision simple mais ambitieuse : révolutionner le secteur du lavage automobile en offrant des services à la fois efficaces et respectueux de l'environnement.",
        "Depuis nos débuts, nous avons toujours été animés par le désir de proposer des solutions innovantes pour les propriétaires de véhicules soucieux de l'impact écologique de leurs choix. Aujourd'hui, nous sommes fiers d'être un leader dans le domaine du lavage automobile écologique.",
      ],
    },
    {
      id: "mission",
      title: "Notre Mission",
      description: [
        "Chez SMS Services, notre mission est claire : offrir un service de lavage automobile de haute qualité tout en minimisant notre empreinte écologique.",
        "Nous croyons fermement qu'il est possible de prendre soin de votre véhicule sans compromettre la santé de notre planète. C'est pourquoi nous utilisons des produits biodégradables et des méthodes de lavage sans eau.",
      ],
    },
    {
      id: "values",
      title: "Nos Valeurs",
      description: [
        "Respect de l'environnement : Nous mettons un point d'honneur à utiliser des techniques de lavage qui préservent l'eau et les ressources naturelles.",
        "Innovation : Nous recherchons constamment des solutions novatrices pour rendre le lavage automobile plus écologique.",
        "Qualité : Chaque lavage est réalisé avec un soin particulier pour garantir un résultat impeccable.",
        "Engagement : Nous nous engageons à fournir un service de haute qualité tout en ayant un impact positif sur notre planète.",
      ],
    },
    {
      id: "why-us",
      title: "Pourquoi Choisir SMS Services ?",
      description: [
        "Choisir SMS Services, c'est opter pour une entreprise qui place l'écologie au cœur de son activité. Nos services sont conçus pour offrir une expérience de lavage rapide, efficace et respectueuse de l'environnement.",
        "En plus de notre engagement pour l'environnement, nous garantissons une qualité de service irréprochable, avec des équipes professionnelles formées aux dernières techniques de lavage écologique.",
      ],
    },
    {
      id: "join-us",
      title: "Rejoignez-nous dans notre Mission",
      description: [
        "Nous croyons qu'un avenir plus propre et plus vert commence par de petites actions.",
        "Rejoignez-nous dans notre mission de rendre le lavage automobile plus écologique et contribuez à la préservation de notre planète pour les générations futures. Ensemble, nous pouvons faire la différence, un lavage à la fois.",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* En-tête */}
      <div className="relative text-white text-center">
        <div className="relative h-[200px]">
          <Image
            src="/IMG-20250119-WA0012.jpg"
            alt="Voiture écologique"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
              style={{ lineHeight: "200px" }}
              data-aos="fade-up"
            >
              À PROPOS DE NOUS
            </h1>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="py-16 px-4 max-w-3xl mx-auto">
        {apropos.map((section) => (
          <section
            key={section.id}
            className="mb-8 bg-white shadow-lg rounded-lg p-6"
            data-aos="fade-up"
          >
            {/* Titre de la section */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full text-left focus:outline-none"
              aria-expanded={openSection === section.id}
            >
              <h2 className="text-xl font-bold text-gray-800">
                {section.title}
              </h2>
              <div className="text-gray-600">
                {openSection === section.id ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </div>
            </button>

            {/* Description */}
            {openSection === section.id && (
              <div className="mt-4 text-gray-700">
                {section.description.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;




