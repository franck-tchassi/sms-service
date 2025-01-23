"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage } from "./_actions/actions"; // Import de l'action côté serveur
import { ButtonSubmit } from "./ButtonSubmit";
import { responseMessages } from "./_actions/response-message";
import Image from "next/image";

// Déclaration du composant SubmitButton
const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();
  return <ButtonSubmit disabled={pending}>Envoyer</ButtonSubmit>;
};


const RdvPage = () => {
  const [state, formAction] = useActionState(sendMessage, { message: "" });

  return (
    <div className="bg-gray-50">
      {/* En-tête */}
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
              PRISE DE RENDEZ-VOUS
            </h1>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <form action={formAction} className="p-12 text-black space-y-4 text-start max-w-md mx-auto">
        {/* Nom */}
        <div className="space-y-1">
          <label htmlFor="name" className="font-bold text-sm">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Entrez votre nom"
            className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Prénom */}
        <div className="space-y-1">
          <label htmlFor="prenom" className="font-bold text-sm">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            placeholder="Entrez votre prénom"
            className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Téléphone */}
        <div className="space-y-1">
          <label htmlFor="tel" className="font-bold text-sm">Téléphone</label>
          <input
            id="tel"
            name="tel"
            type="text"
            required
            placeholder="Ex. : 0612345678"
            className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="font-bold text-sm">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Entrez votre email"
            className="w-full p-2 text-sm  rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="font-bold text-sm">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Ajoutez un message"
            className="w-full p-2 text-sm rounded-lg border h-24 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Choix du service */}
        <div className="space-y-1">
          <p className="font-bold text-sm">Choisissez votre service</p>
          <div className="flex flex-wrap gap-4">
            {["exterieur", "interieur", "complet"].map((service) => (
              <label key={service} className="flex items-center space-x-2 text-sm">
                <input
                  type="radio"
                  name="service"
                  value={service}
                  className="w-4 h-4 text-blue-500"
                />
                <span>{`Lavage ${service.charAt(0).toUpperCase() + service.slice(1)}`}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Formule */}
        <div className="space-y-1">
          <label htmlFor="formule" className="font-bold text-sm">Formule souhaitée</label>
          <select
            id="formule"
            name="formule"
            required
            className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Sélectionner une formule</option>
            <option value="sieges">Formule Sièges</option>
            <option value="integrale">Formule Intégrale</option>
            <option value="carte">Services à la carte</option>
          </select>
        </div>

        {/* Date et Heure */}
        <div className="space-y-1">
          <label htmlFor="date_heure" className="font-bold text-sm">Date et Heure souhaitée</label>
          <input
            id="date_heure"
            type="datetime-local"
            name="date_heure"
            required
            className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Message de soumission */}
        {state.message && (
          <p className={`text-sm ${state.message === responseMessages.success ? "text-green-500" : "text-red-500"}`}>
            {state.message}
          </p>
        )}

        {/* Bouton de soumission */}
        <SubmitButton />
      </form>
    </div>
  );
};

export default RdvPage;





