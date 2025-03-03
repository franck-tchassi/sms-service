"use client"; // ✅ Ajoute cette ligne en haut du fichier

import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast"; // ✅ Assure-toi que Toaster est importé

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault(); // ✅ Empêche la soumission par défaut du formulaire

    setLoading(true);

    const loginResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(loginResponse);
    if (loginResponse?.ok) {
      toast.success("Connexion réussie 🎉");
      window.location.assign("/")
    } else if (loginResponse?.error) {
      toast.error("Email ou mot de passe incorrect ❌"); // Affiche l'erreur si elle existe
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      

      <form
        onSubmit={login} // ✅ Utilise onSubmit pour soumettre le formulaire
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mot de passe</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <button
          type="submit" // ✅ Change "onClick" en "type='submit'"
          disabled={loading} // Désactive le bouton pendant le chargement
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 disabled:bg-gray-400"
        >
          {loading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

