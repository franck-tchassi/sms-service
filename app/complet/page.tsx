import Image from "next/image";



const completPage = () => {
    return (
        <div className="bg-gray-50">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center"
          >
            <h1 className="text-3xl font-extrabold mb-4" data-aos="fade-up" data-aos-duration="1800">Lavage Complet</h1>
            <p className="text-lg px-6" data-aos="fade-up" data-aos-duration="1800">
                Le lavage complet offre une solution intégrale pour nettoyer et protéger votre véhicule
                à l&apos;intérieur comme à l&apos;extérieur.
            </p>
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
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6" data-aos="fade-up" data-aos-duration="1800">
            <div className="flex flex-col justify-center  p-6">
              <h2 className="text-2xl font-semibold mb-2">Lavage Extérieur</h2>
              <p className="text-gray-600 mb-2">
                Un nettoyage en profondeur de la carrosserie, des jantes et des pneus, combiné à un
                séchage et une finition brillants pour une allure impeccable.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Prélavage et lavage principal</li>
                <li>Nettoyage des jantes</li>
                <li>Application de cire protectrice</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center  p-6" data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Nettoyage Intérieur</h2>
              <p className="text-gray-600 mb-2">
                Aspiration et dépoussiérage méticuleux de l&apos;habitacle, avec une attention particulière
                portée aux surfaces en plastique et aux vitres.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Aspiration des moquettes et tapis</li>
                <li>Dépoussiérage des surfaces</li>
                <li>Nettoyage des vitres intérieures</li>
                <li>Lavage des contours de portes</li>
                <li>Aspiration du coffre</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center  p-6" data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Finitions Professionnelles</h2>
              <p className="text-gray-600 mb-2">
                Des finitions haut de gamme incluant l’application de produits pour protéger et
                embellir votre véhicule.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Brillant sur les pneus</li>
                <li>Conditionneur pour les surfaces plastiques</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center  p-6" data-aos="fade-up" data-aos-duration="1800">
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
              id="complet"
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
                        <h2>Lavage Complet</h2>
                        <ul className="flex items-center gap-4">
                            <div>
                                <li>Lavage Intérieur</li>
                                <li>Lavage Extérieur</li> 
                                <li>Nettoyage de portes</li>
                                <li>Aspiration du coffre</li>  
                            </div>
                            <div>
                                <span>............................................</span>
                            </div>
                            <div>
                                <li>49£</li>
                                <li>59£</li>
                                <li>75£</li>
                            </div>
                        </ul>
                    </div>
               </div>
            </div>

          
        </div>
      );
};

export default completPage;
