import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Image from "next/image";

//interface tarif = {}
const tarifaction = [

  {
    sieges: [
      "Lavage Intérieur",
      "Lavage Extérieur",
      "Nettoyage de portes",
      "Aspiration du coffre"
    ],
      
    prices:[
       "49",
      "59",
      "75"
    ]
      
      
    
  }
  
]


const completPage = () => {
    return (
        <div className="bg-gray-50">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8">
                <h1
                  className="text-2xl sm:text-3xl mt-8 md:text-4xl lg:text-5xl font-extrabold " // Ajout d'un margin-bottom réduit
                  style={{ lineHeight: "2" }} // Réduction de l'espacement vertical
                  data-aos="fade-up"
                >
                  LAVAGE COMPLET
                </h1>
                <p
                  className="md:text-lg text-sm px-4 text-center" // Réduction du padding horizontal et centrage
                  style={{ marginTop: "0.1rem" }} // Option pour rapprocher encore plus
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  Le lavage complet offre une solution intégrale pour nettoyer et protéger votre véhicule
                  à l&apos;intérieur comme à l&apos;extérieur.
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
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-32 sm:14" data-aos="fade-up" data-aos-duration="1800">
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

              <div className=" flex flex-col items-center p-11 absolute inset-0 bg-black/50 justify-center text-white gap-4">
                  <h2 className="text-3xl font-bold ">Notre Tarification</h2>
                  {tarifaction.map((tarif, index) =>
                    <Card
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          className="rounded  flex items-center"
                          key={index}
                    >
                        <CardHeader className="p-4 bg-white/95 ">
                            {tarif.sieges.map((sieg, index) =>
                            <div className="flex  mt-2 text-sm md:text-base" key={index}>
                              {sieg}
                            </div>
                            )}
                        </CardHeader>

                        <CardContent className="p-4 bg-white">
                            <MoveRight />
                        </CardContent>

                        <CardFooter className="bg-white p-4 text-center flex flex-col">
                            {tarif.prices.map((px, index) => (
                              <div key={index} className="mb-2"> 
                                {px}€
                              </div>
                            ))}
                        </CardFooter>
                    </Card>
                  )}
              </div>
                
            </div>

          
        </div>
      );
};

export default completPage;
