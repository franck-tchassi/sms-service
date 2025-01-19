

import Hero from "./_sections/Hero";
import Apropos from "./_sections/Apropos";
import Services from "./_sections/Services";
import Satisfaction from "./_sections/Satisfaction";
import Avis from "./_sections/Avis";
import Maps from "./_sections/Maps";


const  LandingPage = () => {
  return (
    <div className="justify-center items-center w-full">
       <Hero />
       <Apropos />
       <Services />
       <Satisfaction />
       <Avis />
       <Maps />
    </div>
  );
}

export default LandingPage