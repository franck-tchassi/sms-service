import React from 'react';

const Maps = () => {
  return (
    <div className=" py-10 ">
      <div className="max-w-7xl mx-auto px-5">
        {/* Titre de la section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Nous Trouver</h2>

        {/* Container pour la carte et les informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Section de la carte */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              {/* Utilisation de l'API Google Maps Embed pour afficher la carte */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.5502759628416!2d4.983661975672444!3d43.927284134661534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5f40d911ecc09%3A0x2aa4c419a59651d3!2s240%20Rte%20d&#39;Avignon%2C%2084250%20Le%20Thor!5e0!3m2!1sfr!2sfr!4v1734484015071!5m2!1sfr!2sfr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Section des informations */}
          <div className="flex flex-col items-start  justify-center space-y-2 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Informations de Contact</h3>
            <div className="text-base text-gray-700 flex flex-col">
              <p>
                <strong>Adresse :</strong> 240 Rte d&apos;Avignon, 84250 Le Thor
              </p>
              <p>
                <strong>Téléphone :</strong> +33 07 71 52 69 27
              </p>
              <p>
                <strong>Email :</strong> smsservices84thor@gmail.com
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Maps;


