import Image from "next/image";


const FormuleIntegrale = () => {
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
              className="text-2xl sm:text-3xl mt-8 md:text-4xl lg:text-5xl font-extrabold " // Ajout d'un margin-bottom réduit
              style={{ lineHeight: "2" }} // Réduction de l'espacement vertical
              data-aos="fade-up"
            >
              FORMULE INTEGRALE
            </h1>
            <p
              className="md:text-lg text-sm px-4 text-center" // Réduction du padding horizontal et centrage
              style={{ marginTop: "0.1rem" }} // Option pour rapprocher encore plus
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              La Formule Intégrale inclut un nettoyage approfondi pour un intérieur et un extérieur impeccables. 
              Offrez à votre véhicule un soin complet avec des résultats professionnels.
            </p>
          </div>
          </div>
        </div>

  
        <div className="flex justify-center p-12 " data-aos="fade-up" data-aos-duration="1800">
            <Image
              src="/auto-complet.svg"
              alt="Lavage Complet de Voiture"
              className="  object-cover"
              width={844}
              height={644}
             
            />
        </div>
  
        {/* Sections détaillées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-32 sm:14" >
          <div className="flex flex-col justify-center   p-6 " data-aos="fade-up" data-aos-duration="1800">
            <h2 className="text-2xl font-semibold mb-2">Pressing des sièges</h2>
            <p className="text-gray-600 mb-2">
              Nettoyage minutieux des sièges pour éliminer les tâches, la saleté et restaurer leur éclat d&apos;origine.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Élimination des tâches incrustées</li>
              <li>Adapté aux tissus et cuir</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center p-6" data-aos="fade-up" data-aos-duration="1800">
            <h2 className="text-2xl font-semibold mb-2">Pressing des tapis</h2>
            <p className="text-gray-600 mb-2">
              Nettoyage approfondi des tapis pour enlever les salissures et raviver les couleurs d&apos;origine.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Élimination des poussières et saletés</li>
              <li>Rafraîchissement des matières textiles</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center p-6" data-aos="fade-up" data-aos-duration="1800">
            <h2 className="text-2xl font-semibold mb-2">Nettoyage complet</h2>
            <p className="text-gray-600 mb-2">
              Une prestation complète incluant toutes les étapes nécessaires pour redonner à votre véhicule un aspect neuf :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Lavage intérieur et extérieur</li>
              <li>Nettoyage des vitres, des plastiques, et des contours de portes</li>
              <li>Pressing des sièges et des tapis</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center  p-6" data-aos="fade-up" data-aos-duration="1800">
            <h2 className="text-2xl font-semibold mb-2">Nettoyage des contours de portes</h2>
            <p className="text-gray-600 mb-2">
              Elle se concentre sur les zones difficiles à atteindre autour des cadres, des joints, et des rebords de vos portes pour leur redonner un aspect propre et soigné :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Nettoyage minutieux des rebords : Chaque coin et contour est soigneusement essuyé et débarrassé des résidus.</li>
              <li>Traitement des joints : Les joints en caoutchouc sont nettoyés et entretenus pour conserver leur souplesse et prévenir les fissures.</li>
              <li>Utilisation de produits adaptés : Des produits doux mais efficaces éliminent les taches sans endommager les surfaces.</li>
            </ul>
          </div>
        </div>

  
        {/* Section des prix */}
        <div 
          className="bg-gray-100 flex justify-center relative mb- h-[300px]" 
          id="integrale"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
            {/* Image d'Arrière-Plan */}
              
               
            <Image
                    src="/IMG-20250119-WA0012.jpg"
                    alt="Voiture écologique"
                    fill
                    className="object-cover"
                    quality={100}
            />
                
            <div className=" flex flex-col items-center p-11 absolute inset-0 bg-black/50 justify-center text-white">
                <h2 className="text-3xl font-bold ">Notre Tarification</h2>
                <div className=" flex flex-col ">
                    <h2>Formule Intégrale</h2>
                    <ul className="flex items-center gap-4">
                        <div>
                                <li>Formule Sièges</li> 
                                <li>Pressing des sièges</li>
                                <li>Pressing des tapis</li>  
                        </div>
                        <div>
                                <span>............................................</span>
                        </div>
                        <div>
                                <li>129£</li>
                                <li>139£</li>
                                <li>149£</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
  
      </div>
    );
  };
  
  export default FormuleIntegrale;
  