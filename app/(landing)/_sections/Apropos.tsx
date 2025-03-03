"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ImageUploadModal from "@/components/ImageUpdatePost";


const About = () => {
  const [imageSrc, setImageSrc] = useState("/IMG-20250119-WA0002.jpg");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {  status } = useSession();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImageUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
  };

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Section Image avec bouton Modifier */}
        <div className="w-full md:w-1/2 relative group">
          <Image src={imageSrc} alt="Voiture de SMS Services" width={600} height={400} className="rounded-full shadow-lg object-cover" />
          {status === "authenticated" && (
            <button
              onClick={openModal}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
            >
              Modifier image
            </button>
          )}
        </div>

        {/* Section Texte */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">À propos de SMS Services</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-base">
            Chez <span className="font-semibold">SMS SERVICES</span>, nous sommes fiers d&apos;offrir des services de nettoyage automobile de qualité supérieure.
            Notre équipe passionnée s&apos;engage à redonner à votre véhicule son éclat d&apos;origine, en utilisant des techniques modernes et des produits respectueux de l&apos;environnement.
            Basés à <span className="font-semibold">Le Thor</span>, nous vous accueillons dans un cadre convivial et professionnel.
            Faites confiance à notre expertise pour prendre soin de votre voiture, à l&apos;intérieur comme à l&apos;extérieur.
          </p>
        </div>
      </div>

      {/* Affichage du modal d'upload */}
      <ImageUploadModal isOpen={isModalOpen} onClose={closeModal} onUpload={handleImageUpload} />
    </section>
  );
};

export default About;



