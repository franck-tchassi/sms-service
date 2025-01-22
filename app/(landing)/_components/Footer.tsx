"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation des styles pour AOS

const Footer = () => {
  useEffect(() => {
    AOS.init(); // Initialisation de AOS pour les animations
  }, []);

  return (
    <footer className="bg-black/90 text-gray-500 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* Section 1 : Informations */}
        <div
          className="flex flex-col items-start justify-center md:text-left"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h4 className="text-white text-sm font-semibold mb-4">SMS SERVICES</h4>
          <div className=" text-sm">
            <p>240 Rte d&apos;Avignon, 84250 Le Thor</p>
            <p>+33 07 71 52 69 27</p>
            <p>Lundi à Samedi: 9h30 à 19h30</p>
            <p>Le Dimanche sur rendez-vous</p>
          </div>
        </div>

        {/* Section 2 : Liens rapides */}
        <div
          className="md:text-left"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h4 className="text-sm font-semibold mb-4 text-white">Entreprise</h4>
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="/apropos" className="hover:underline">
                Notre histoire
              </Link>
            </li>
          </ul>
          <h4 className="text-sm font-semibold mt-6 mb-4 text-white">
            Commencer
          </h4>
          <ul className="text-sm">
            <li>
              <Link href="/rdv" className="hover:underline">
                Prendre Rendez-vous
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3 : Réseaux sociaux */}
        <div
          className=" md:text-left"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h4 className="text-sm font-semibold mb-4 text-white">Suivez-nous</h4>
          <div className="flex md:justify-start space-x-4 text-white">
            <Link href="https://facebook.com">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </Link>
            <Link href="https://www.tiktok.com/@sms.services84">
              <FaTiktok className="text-xl hover:text-black" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </Link>
          </div>
        </div>
      </div>


      <div className="mt-10 border-t border-gray-700 pt-5 px-5">
        <p className="text-sm text-white">
          © 2024 Sms Services. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


