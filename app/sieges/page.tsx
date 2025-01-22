import Image from "next/image";


const siegePage = () => {
    return (
        <div className="bg-gray-50">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center"
          >
            <h1 className="text-3xl font-extrabold mb-4 " data-aos="fade-up" data-aos-duration="1800">Formule Siège</h1>
            <p className="text-lg px-6" data-aos="fade-up" data-aos-duration="1800">
                Notre formule Siège offre un nettoyage approfondi et professionnel pour redonner à vos sièges leur éclat d&apos;origine tout en éliminant les tâches et les mauvaises odeurs.
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
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="flex flex-col justify-center  p-6 " data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Pressing des Sièges</h2>
              <p className="text-gray-600 mb-2">
                Un nettoyage minutieux des sièges de votre voiture à l&apos;aide de techniques de pressing, pour éliminer les tâches incrustées et restaurer leur éclat.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Élimination des saletés profondes</li>
                <li>Adapté aux tissus et cuir</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center   p-6 " data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Pressing des Contre-Portes</h2>
              <p className="text-gray-600 mb-2">
                Nettoyage approfondi des contre-portes pour éliminer les traces de doigts, la poussière et les résidus accumulés, laissant un intérieur impeccable.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Nettoyage des matériaux plastiques et textiles</li>
                <li>Suppression des taches et salissures</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center   p-6 " data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Protection Longue Durée</h2>
              <p className="text-gray-600 mb-2">
                Application d&apos;un produit protecteur pour prévenir les tâches futures et préserver l&apos;apparence de vos sièges.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Revêtement imperméabilisant</li>
                <li>Protection contre l&apos;usure</li>
              </ul>
            </div>

            {/* Nouvelle section: Résumé du lavage complet */}
            <div className="flex flex-col justify-center   p-6 " data-aos="fade-up" data-aos-duration="1800">
              <h2 className="text-2xl font-semibold mb-2">Lavage Complet</h2>
              <p className="text-gray-600 mb-2">
                Notre service de nettoyage complet comprend toutes les étapes nécessaires pour redonner à vos sièges leur apparence d&apos;origine et maintenir leur état impeccable. Nous utilisons des techniques de nettoyage professionnelles adaptées à tous types de matériaux, y compris les tissus et le cuir.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Pressing des sièges et des contre-portes</li>
                <li>Application d&apos;un produit protecteur pour la longévité</li>
                <li>Élimination des mauvaises odeurs</li>
                <li>Éclat retrouvé et intérieur soigné</li>
              </ul>
            </div>
          </div>

          {/* Section des prix */}
           <div 
              className="bg-gray-100 flex justify-center relative mb- h-[300px]" 
              id="sieges"
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
                        <h2>Formule Sièges</h2>
                        <ul className="flex items-center gap-4">
                            <div>
                                <li>Lavage Complet</li> 
                                <li>Pressing des sièges</li>
                                <li>Pressing contre-portes</li>  
                            </div>
                            <div>
                                <span>............................................</span>
                            </div>
                            <div>
                                <li>99£</li>
                                <li>109£</li>
                                <li>119£</li>
                            </div>
                        </ul>
                    </div>
               </div>
            </div>
          
        </div>
    );
};

export default siegePage;
