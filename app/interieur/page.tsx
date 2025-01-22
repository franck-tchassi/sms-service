import Image from "next/image";


const interieurPage = () => {
    return (
        <div className="bg-gray-50">
          
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center"
           
          >
            <h1 className="text-3xl font-extrabold mb-4 " data-aos="fade-up" data-aos-duration="1800">Nettoyage Intérieur Voiture</h1>
            <p className="text-lg px-6" data-aos="fade-up" data-aos-duration="1800">
                Un intérieur impeccable pour votre voiture grâce à nos services de
                nettoyage écologique. Découvrez nos formules adaptées à vos besoins.
            </p>
          </div>
          
          <div className="flex justify-center p-12 " data-aos="fade-up" data-aos-duration="1800">
                <Image
                src="/auto-interieur.svg"
                alt="Lavage Complet de Voiture"
                className="object-cover"
                width={844}
                height={644}
                />
          </div>
          
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="flex flex-col justify-center   p-6" data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Aspiration</h2>
              <p className="text-gray-600 mb-2">
                L&apos;aspiration de l&apos;intérieur de votre véhicule permet d&apos;éliminer efficacement les
                particules de poussière, les miettes et autres saletés présentes sur les surfaces
                textiles et les recoins difficiles d&apos;accès.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Des moquettes</li>
                <li>Des contre-portes</li>
                <li>Des tapis</li>
                <li>Des sièges</li>
                <li>Du coffre</li>
              </ul>
            </div>
    
            <div className="flex flex-col justify-center   p-6" data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Dépoussiérage et Dégraissage</h2>
              <p className="text-gray-600 mb-2">
                Ce service cible les surfaces dures et les zones en plastique, éliminant la poussière
                et les traces de graisse pour un intérieur parfaitement propre et hygiénique.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Des plastiques</li>
                <li>De l’habitacle</li>
              </ul>
            </div>
    
            <div className="flex flex-col justify-center   p-6" data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Nettoyage</h2>
              <p className="text-gray-600 mb-2">
                Le nettoyage des vitres intérieures garantit une visibilité optimale tout en supprimant
                les traces, les empreintes digitales et la saleté accumulée.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Des vitres intérieures</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center   p-6" data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Décontamination Totale</h2>
              <p className="text-gray-600 mb-2">
              La décontamination totale est essentielle pour éliminer les allergènes, bactéries et impuretés incrustées dans l&apos;habitacle. 
              Elle garantit un environnement intérieur sain, purifié et sans odeurs, 
              offrant ainsi une meilleure qualité de l&apos;air et un confort optimal pour tous les passagers.
              </p>
            </div>
          </div>

          {/* Section des prix */}
            <div 
              className="bg-gray-100 flex justify-center relative mb- h-[300px]" 
              id="#interieur"
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
                        <h2 >Nettoyage Intérieur</h2>
                        <ul className="flex items-center gap-4">
                            <div>
                                <li>Aspiration (moquettes + contre-portes + tapis + sièges + coffre)</li> 
                                <li>Dégraissage (plastiques + habitacle du coffre)</li>
                                <li>Nettoyage des vitres intérieures</li>  
                            </div>
                            <div>
                                <span>............................................</span>
                            </div>
                            <div>
                                <li>30£</li>
                                <li>35£</li>
                                <li>44£</li>
                            </div>
                        </ul>
                    </div>
               </div>
            </div>
    
          
        </div>
      );
};
  
export default interieurPage;
