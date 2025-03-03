"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const RdvPage = () => {
  const [state, setState] = useState<{ message: string; status: "success" | "error" | null }>({
    message: "",
    status: null,
  });

  const formRef = useRef<HTMLFormElement | null>(null); // Création d'une référence pour le formulaire

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      prenom: formData.get("prenom") as string,
      tel: formData.get("tel") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      service: formData.get("service") as string,
      formule: formData.get("formule") as string,
      date_heure: formData.get("date_heure") as string,
    };

    try {
      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        "service_0a7u4sr", // Remplacez par votre Service ID
        "template_2wdms9a", // Remplacez par votre Template ID
        data,
        "eQaugTNKEjziBK81r" // Remplacez par votre Public Key
      );

      if (response.status === 200) {
        setState({ message: "Message envoyé avec succès", status: "success" });
        formRef.current?.reset(); // Réinitialiser le formulaire après un envoi réussi
      } else {
        setState({ message: "Erreur lors de l'envoi du message", status: "error" });
      }
    } catch (error) {
      console.error("Erreur :", error);
      setState({ message: "Erreur lors de l'envoi du message", status: "error" });
    }
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
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8">
            <h1
              className="text-2xl sm:text-3xl mt-0 mb-0 md:text-4xl lg:text-5xl font-extrabold"
              style={{ lineHeight: "200px" }}
              data-aos="fade-up"
            >
              PRISE DE RENDEZ-VOUS
            </h1>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} ref={formRef} className="p-12 text-black space-y-4 text-start max-w-md mx-auto">
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
            className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
          <p className={`text-sm ${state.status === "success" ? "text-green-500" : "text-red-500"}`}>
            {state.message}
          </p>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default RdvPage;
