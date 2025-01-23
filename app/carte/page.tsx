"use client"
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'; 

// Import des icônes Chevron

// Définir l'interface pour un service
interface Service {
  name: string;
  description: string;
  price: string;
}

const ALaCarte = () => {
  // Liste des services
  const services: Service[] = [
    {
      name: "Nano-X",
      description: "Traitement avancé pour protéger la carrosserie contre les rayures et les agressions extérieures.",
      price: "Sur devis",
    },
    {
      name: "Rénovation 1 phare",
      description: "Nettoyage et polissage d’un phare pour restaurer sa clarté et améliorer la visibilité nocturne.",
      price: "39€",
    },
    {
      name: "Rénovation 2 phares",
      description: "Traitement des deux phares pour redonner leur transparence et éliminer le jaunissement.",
      price: "60€",
    },
    {
      name: "Pressing sièges",
      description: "Nettoyage approfondi des sièges pour éliminer les tâches, salissures, et mauvaises odeurs.",
      price: "15€ / siège",
    },
    {
      name: "Pressing tapis",
      description: "Nettoyage des tapis de sol pour enlever les résidus et raviver les couleurs.",
      price: "5€ / tapis",
    },
    {
      name: "Pressing moquette",
      description: "Aspiration et nettoyage des moquettes pour un intérieur propre et sans allergènes.",
      price: "10€ / place",
    },
    {
      name: "Pressing ciel de toit",
      description: "Nettoyage spécifique du ciel de toit pour éliminer les tâches et rafraîchir l’intérieur du véhicule.",
      price: "30€",
    },
    {
      name: "Purification de l'air",
      description: "Traitement pour assainir l'air intérieur et éliminer les mauvaises odeurs grâce à un purificateur.",
      price: "20€",
    },
    {
      name: "Polish machine",
      description: "Polissage professionnel pour redonner de l’éclat à la carrosserie et éliminer les micro-rayures.",
      price: "Sur devis",
    },
    {
      name: "Nettoyage moteur",
      description: "Nettoyage sécurisé du compartiment moteur pour éliminer la saleté et préserver son fonctionnement.",
      price: "30€",
    },
    {
      name: "Traitement anti-pluie pare-brise",
      description: "Application d’un produit hydrophobe pour améliorer la visibilité par temps de pluie.",
      price: "20€",
    },
    {
      name: "Lavage motos",
      description: "Nettoyage complet des motos incluant la carrosserie, les jantes, et les éléments chromés.",
      price: "40€",
    },
    {
      name: "Services divers",
      description: "Traitement résine, goudron, poils d'animaux, jantes, destickage, rénovation plastiques, solutions pour la vente.",
      price: "Sur devis",
    },
    {
      name: "Contour portes",
      description: "Service pour maintenir l’éclat de votre véhicule et offrir une expérience propre à chaque ouverture de porte.",
      price: "15€",
    },
  ];

  // State pour gérer quel service est ouvert
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  // Fonction pour ouvrir/fermer un service
  const toggleService = (index: number) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      
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
            {/* Texte positionné sur l'image */}
            <div className="absolute inset-0 flex flex-col items-center  justify-center bg-black/50 px-4 sm:px-6 lg:px-8">
              <h1
                className="text-2xl sm:text-3xl mt-12 md:text-4xl lg:text-5xl font-extrabold " // Ajout d'un margin-bottom réduit
                style={{ lineHeight: "2" }} // Réduction de l'espacement vertical
                data-aos="fade-up"
              >
                À LA CARTE
              </h1>
              <p
                className="md:text-lg text-sm px-4 text-center" // Réduction du padding horizontal et centrage
                style={{ marginTop: "0.1rem" }} // Option pour rapprocher encore plus
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                Nos services à la carte sont conçus pour répondre à vos besoins spécifiques. Choisissez parmi une gamme complète de prestations pour entretenir et améliorer l&apos;apparence de votre véhicule.
              </p>
            </div>
        </div>
      </div>
      

      {/* Image de présentation */}
      <div className="flex justify-center p-12" data-aos="fade-up" data-aos-duration="1800">
        <Image
          src="/auto-complet.svg"
          alt="Lavage Complet de Voiture"
          className="object-cover"
          width={844}
          height={644}
        />
      </div>

      {/* Cartes des services */}
      <div className="space-y-4  p-12 md:p-28">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:scale-105 transform transition duration-200"
          >
            <div
              className="flex items-center justify-between"
              onClick={() => toggleService(index)} // Toggle open/close
            >
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              {/* Afficher le chevron basé sur l'état (ouvert ou fermé) */}
              {openServiceIndex === index ? (
                <ChevronUpIcon className="h-6 w-6 text-gray-600" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 text-gray-600" />
              )}
            </div>

            {/* Si le service est ouvert, afficher les détails */}
            {openServiceIndex === index && (
              <div className="mt-4">
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-2 text-lg font-bold text-gray-800">{service.price}</div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ALaCarte;
