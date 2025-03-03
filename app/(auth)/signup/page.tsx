"use client"; // ✅ Ajoute cette ligne en haut du fichier

import Input from "@/components/Input";
import React, { useState } from "react";
import toast from "react-hot-toast"; // ✅ Assure-toi que Toaster est bien importé
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const register = async (e: React.FormEvent) => { 
    e.preventDefault(); // ✅ Empêche la soumission par défaut du formulaire

    setLoading(true);

    try {
      await axios.post("/api/register", {
        email,
        password,
      });

      toast.success("Compte créé avec succès ! ✅");

      // ✅ Ajoute un délai pour voir le toast avant la redirection
      setTimeout(() => {
        router.push("/login");
      }, 1500);
      
    } catch (err) {
      console.error(err);
      toast.error(err || "Une erreur s'est produite ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      

      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={register}>
        <h2 className="text-2xl font-bold mb-4">Inscription</h2>
        
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
          {loading ? "Inscription en cours..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
