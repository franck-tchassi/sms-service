"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


const AboutPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Titre et Image */}
      <div className="relative text-white text-center">
        {/* Conteneur de l'image */}
        <div className="relative h-[200px]">
          <Image
            src="/IMG-20250119-WA0012.jpg"
            alt="Voiture écologique"
            fill
            className="object-cover"
            quality={100}
          />
          {/* Texte positionné sur l'image */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8">
            <h1
              className="text-2xl sm:text-3xl mt-0 mb-0 md:text-4xl lg:text-5xl font-extrabold"
              style={{ lineHeight: "200px" }} // Assurez l'alignement
              data-aos="fade-up"
            >
              À PROPOS DE NOUS
            </h1>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12 py-24 px-2">
        {/* Image centrée */}
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <Image
            src="/IMG-20250119-WA0012.jpg"
            alt="À propos de nous"
            className="w-full max-w-md rounded-lg shadow-lg"
            layout="intrinsic"
            height={800}  // Vous spécifiez ici une dimension, l'autre sera calculée
            width={600}   // La largeur que vous souhaitez
            data-aos="fade-up"
          />
        </div>

        </div>

        {/* Texte et sections */}
        <div className="lg:w-2/3 px-4 max-w-3xl">
          {/* Section Notre Histoire */}
          <section className="mb-8" data-aos="fade-up" data-aos-duration="1000">
            <button
              onClick={() => toggleSection("history")}
              className="text-xl font-semibold text-gray-800 mb-4 w-full text-left focus:outline-none"
            >
              {openSection === "history" ? "▼" : "►"} Notre Histoire
            </button>
            {openSection === "history" && (
              <p className="text-gray-700 mt-2" data-aos="fade-up" data-aos-duration="1000">
                SMS Services a été fondée avec une vision simple mais ambitieuse :
                révolutionner le secteur du lavage automobile en offrant des services à la fois efficaces et respectueux de l&apos;environnement.
                Depuis nos débuts, nous avons toujours été animés par le désir de proposer des solutions innovantes pour les propriétaires de
                véhicules soucieux de l&apos;impact écologique de leurs choix. Aujourd&apos;hui, nous sommes fiers d&apos;être un leader dans le domaine du
                lavage automobile écologique.
              </p>
            )}
          </section>

          {/* Section Notre Mission */}
          <section className="mb-8" data-aos="fade-up" data-aos-duration="1200">
            <button
              onClick={() => toggleSection("mission")}
              className="text-xl font-semibold text-gray-800 mb-4 w-full text-left focus:outline-none"
            >
              {openSection === "mission" ? "▼" : "►"} Notre Mission
            </button>
            {openSection === "mission" && (
              <p className="text-gray-700 mt-2" data-aos="fade-up" data-aos-duration="1000">
                Chez SMS Services, notre mission est claire : offrir un service de lavage automobile de haute qualité tout en minimisant notre empreinte écologique.
                Nous croyons fermement qu&apos;il est possible de prendre soin de votre véhicule sans compromettre la santé de notre planète.
                C&apos;est pourquoi nous utilisons des produits biodégradables et des méthodes de lavage sans eau, afin de préserver les ressources naturelles et de réduire
                la pollution liée au lavage traditionnel des véhicules.
              </p>
            )}
          </section>

          {/* Section Nos Valeurs */}
          <section className="mb-8" data-aos="fade-up" data-aos-duration="1400">
            <button
              onClick={() => toggleSection("values")}
              className="text-xl font-semibold text-gray-800 mb-4 w-full text-left focus:outline-none"
            >
              {openSection === "values" ? "▼" : "►"} Nos Valeurs
            </button>
            {openSection === "values" && (
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2" data-aos="fade-up" data-aos-duration="1000">
                <li>
                  <strong>Respect de l&apos;environnement :</strong> Nous mettons un point d&apos;honneur à utiliser des techniques de lavage qui préservent
                  l&apos;eau et les ressources naturelles.
                </li>
                <li>
                  <strong>Innovation :</strong> Nous recherchons constamment des solutions novatrices pour rendre le lavage automobile plus écologique et plus pratique pour nos clients.
                </li>
                <li>
                  <strong>Qualité :</strong> Chaque lavage est réalisé avec un soin particulier pour garantir un résultat impeccable et satisfaire nos clients.
                </li>
                <li>
                  <strong>Engagement :</strong> Nous nous engageons à fournir un service de haute qualité tout en ayant un impact positif sur notre planète.
                </li>
              </ul>
            )}
          </section>

          {/* Section Pourquoi Choisir SMS Services */}
          <section className="mb-8" data-aos="fade-up" data-aos-duration="1600">
            <button
              onClick={() => toggleSection("why-us")}
              className="text-xl font-semibold text-gray-800 mb-4 w-full text-left focus:outline-none"
            >
              {openSection === "why-us" ? "▼" : "►"} Pourquoi Choisir SMS Services ?
            </button>
            {openSection === "why-us" && (
              <div className="text-gray-700 mt-2 space-y-4" data-aos="fade-up" data-aos-duration="1000">
                <p>
                  Choisir SMS Services, c&apos;est opter pour une entreprise qui place l&apos;écologie au cœur de son activité. Nos services sont conçus pour
                  offrir une expérience de lavage rapide, efficace et respectueuse de l&apos;environnement. Que vous soyez un particulier ou une
                  entreprise, nous avons la solution adaptée à vos besoins. Nous offrons des prestations à domicile, en entreprise, et même sur les
                  lieux de travail pour un lavage sans contrainte.
                </p>
                <p>
                  En plus de notre engagement pour l&apos;environnement, nous garantissons une qualité de service irréprochable, avec des équipes
                  professionnelles formées aux dernières techniques de lavage écologique.
                </p>
              </div>
            )}
          </section>

          {/* Section Rejoignez-nous dans notre Mission */}
          <section data-aos="fade-up" data-aos-duration="1800">
            <button
              onClick={() => toggleSection("join-us")}
              className="text-xl font-semibold text-gray-800 mb-4 w-full text-left focus:outline-none"
            >
              {openSection === "join-us" ? "▼" : "►"} Rejoignez-nous dans notre Mission
            </button>
            {openSection === "join-us" && (
              <p className="text-gray-700 mt-2" data-aos="fade-up" data-aos-duration="1000">
                Nous croyons qu&apos;un avenir plus propre et plus vert commence par de petites actions. Rejoignez-nous dans notre mission de rendre le
                lavage automobile plus écologique et contribuez à la préservation de notre planète pour les générations futures.
                Ensemble, nous pouvons faire la différence, un lavage à la fois.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;



