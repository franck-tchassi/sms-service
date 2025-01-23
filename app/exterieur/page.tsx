import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Image from "next/image";

//interface tarif = {}
const tarifaction = [

  {
    sieges: [
      "Nettoyage (carrosserie + jantes)",
      "Application (brillant + pneus)",
      "Nettoyage des vitres extérieures"
    ],
      
    prices:[
       "25",
      "30",
      "40"
    ]
      
      
    
  }
  
]

const ExterieurPage = () => {
  return (
    <div className="bg-gray-50">
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
            LAVAGE EXTÉRIEUR
          </h1>
          <p
            className="md:text-lg text-sm px-4 text-center" // Réduction du padding horizontal et centrage
            style={{ marginTop: "0.1rem" }} // Option pour rapprocher encore plus
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Un lavage extérieur de qualité pour une voiture éclatante et protégée. Faites briller
            votre véhicule avec nos services professionnels.
          </p>
        </div>
        </div>
      </div>

      <div className="flex justify-center p-12" data-aos="fade-up" data-aos-duration="1800">
        <Image
          src="/auto-interieur.svg"
          alt="Lavage Complet de Voiture"
          className="object-cover rounded-full"
          width={944}
          height={844}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:p-32 sm:14">
        <div className="flex flex-col justify-center p-6" data-aos="fade-up" data-aos-duration="1800">
          <h2 className="text-2xl font-semibold mb-2">Prélavage</h2>
          <p className="text-gray-600 mb-2">
            Le prélavage élimine les saletés et les particules avant le lavage principal, réduisant
            ainsi les risques de rayures.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Carrosserie</li>
            <li>Jantes</li>
            <li>Bas de caisse</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center p-6" data-aos="fade-up" data-aos-duration="1800">
          <h2 className="text-2xl font-semibold mb-2">Lavage Principal</h2>
          <p className="text-gray-600 mb-2">
            Utilisation de produits de nettoyage écologiques pour une élimination efficace de la
            saleté et des résidus sans endommager la peinture.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Carrosserie</li>
            <li>Rétroviseurs</li>
            <li>Pare-chocs</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center p-6" data-aos="fade-up" data-aos-duration="1800">
          <h2 className="text-2xl font-semibold mb-2">Séchage et Finition</h2>
          <p className="text-gray-600 mb-2">
            Un séchage minutieux et une finition professionnelle pour un éclat impeccable.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Séchage à la main</li>
            <li>Application de cire protectrice</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center p-6" data-aos="fade-up" data-aos-duration="1800">
          <h2 className="text-2xl font-semibold mb-2">Application de Brillant sur les Pneus</h2>
          <p className="text-gray-600 mb-2">
            Cette étape finale améliore l&apos;apparence des pneus en leur donnant un aspect brillant
            et neuf, tout en offrant une protection contre les fissures et l&apos;usure prématurée.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Protection contre le vieillissement</li>
            <li>Aspect esthétique rehaussé</li>
          </ul>
        </div>
      </div>

      {/* Section des prix avec animation AOS */}
      <div
        className="bg-gray-100 flex justify-center relative mb- h-[300px]"
        id="exterieur"
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
              {tarifaction.map((tarif) =>
               <Card
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="rounded  flex items-center"
                >
                  <CardHeader className="p-4 bg-white/95 ">
                    {tarif.sieges.map((sieg) =>
                      <div className="flex  mt-2 text-sm md:text-base">
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
                          {px}£
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

export default ExterieurPage;

