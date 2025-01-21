"use client"

import { useEffect, useState } from "react";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { FaInfoCircle, FaDollarSign } from 'react-icons/fa';


const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isServices, setIsServices] = useState(false)
  
  

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  
 

  const toggleReturn = () =>{
    setIsServices(!isServices);
  }

  const toggleCloseAll = () =>{
    setIsServices(!isServices);
    setIsClick(!isClick);
  }

  useEffect(()=>{
    AOS.init({  
      duration: 500
    });
  }, []);

  

  

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"  >
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-blue-700">
                  SMS <span className="text-green-700">SERVICES</span>
                </Link>
              </div>
            </div>

            <NavigationMenu className="hidden md:block ">
                <NavigationMenuList className="ml-4 flex  items-center  space-x-4 ">
                    {/* Accueil */}
                    <NavigationMenuItem >
                        <NavigationMenuLink
                            href="/"
                            className=" text-white text-sm text-center flex"
                        >
                        Accueil
                        </NavigationMenuLink>
                     </NavigationMenuItem>

                    {/* Services avec menu déroulant */}
                    <NavigationMenuItem className=""  >
                    <DropdownMenu  >
                        <DropdownMenuTrigger asChild className="cursor-pointer ">
                           <p className="text-white flex items-center  text-sm">Services</p>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="flex flex-col gap-12 p-10 rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 border-none" >
                        <div className="flex gap-8" data-aos="fade-up" data-aos-duration="1000">
                            <div>
                              <DropdownMenuLabel className="text-white text-lg">Lavage Extérieur</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none ">
                                  <Link href="/exterieur" className="cursor-pointer text-sm">Notre Prestation en Détail</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/exterieur/#exterieur" className="cursor-pointer text-sm">Notre Tarification</Link>
                              </DropdownMenuItem>
                            </div>
                            <div>
                              <DropdownMenuLabel className="text-white text-lg">Lavage Intérieur</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/interieur" className="cursor-pointer text-sm">Notre Prestation en Détail</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/interieur/#interieur" className="cursor-pointer text-sm">Notre Tarification</Link>
                              </DropdownMenuItem>
                            </div>
                            <div>
                              <DropdownMenuLabel className="text-white text-lg">Lavage Complet</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/complet" className="cursor-pointer text-sm">Notre Prestation en Détail</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/complet/#complet" className="cursor-pointer text-sm">Notre Tarification</Link>
                              </DropdownMenuItem>
                            </div>
                        </div>
                        <div className="flex gap-8" data-aos="fade-up" data-aos-duration="1000">
                            <div>
                              <DropdownMenuLabel className="text-white text-lg">Formule Sièges</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/sieges" className="cursor-pointer text-sm">Notre Prestation en Détail</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/sieges/#sieges" className="cursor-pointer text-sm">Notre Tarification</Link>
                              </DropdownMenuItem>
                            </div>
                            <div>
                              <DropdownMenuLabel className="text-white text-lg">Formule Intégrale</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/integrale" className="cursor-pointer text-sm">Notre Prestation en Détail</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/integrale/#integrale" className="cursor-pointer text-sm">Notre Tarification</Link>
                              </DropdownMenuItem>
                            </div>
                            <div>
                              <DropdownMenuLabel className="text-white text-lg">Services à la carte</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/carte" className="cursor-pointer text-sm">Notre Prestation en Détail</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-green-100 focus:outline-none">
                                  <Link href="/carte/#carte" className="cursor-pointer text-sm">Notre Tarification</Link>
                              </DropdownMenuItem>
                            </div>
                        </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </NavigationMenuItem>

                    {/* Apropos */}
                    <NavigationMenuItem >
                      <NavigationMenuLink
                        href="/apropos"
                        className=" text-white  text-sm flex items-center"
                      >
                       Apropos
                      </NavigationMenuLink>
                   </NavigationMenuItem>

                    {/* Téléphone */}
                    <span className="text-white text-sm flex items-center" >07.71.52.69.27</span>

                    {/* Rendez-vous */}
                    <Button variant={"outline"} className="snake-border-clockwise flex items-center " data-aos="fade-right" data-aos-duration="4000">
                        <Link href={"/rdv"}>Rendez-vous</Link>
                    </Button>
                </NavigationMenuList>
            </NavigationMenu>


            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {isClick && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white  z-50 md:hidden">
            <div className="flex justify-between p-4 z-50 items-center">
              <Link href="/" className="text-blue-700" onClick={toggleNavbar}>
                SMS <span className="text-green-700">SERVICES</span>
              </Link>
              <button className="text-black text-3xl" onClick={toggleNavbar}>
                &times;
              </button>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div className="px-4 pt-2 pb-3 space-y-8 sm:px-3 text-black">
                <Link href="/" className=" block hover:text-gray-300 text-sm" onClick={toggleNavbar}>
                  Accueil
                </Link>
                <p className=" block hover:text-gray-300 text-sm flex items-center justify-between cursor-pointer" onClick={toggleReturn}>
                  Services
                  <ChevronRight />
                </p>
                <Link href="/apropos" className=" block hover:text-gray-300 text-sm" onClick={toggleNavbar}>
                  À propos
                </Link>
                <span className=" block text-sm">
                  07.71.52.69.27
                </span>
              </div>

              {/* Fixer le bouton "Rendez-vous" en bas de l'écran */}
              <div className="px-4 py-4 fixed bottom-0 left-0 w-full bg-white bg-opacity-90 z-50 flex justify-center items-center">
                <button className=" w-36 py-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105 focus:outline-none flex justify-center items-center">
                  <Link href="/rdv" onClick={toggleNavbar} className="text-white text-sm font-semibold">
                    Rendez-vous
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}

        {isServices?
          (
          <div className="absolute top-0 left-0 w-full h-screen bg-white  z-50 md:hidden">
            <div className="flex justify-between p-4 z-50">
              <p className="text-blue-700 text-3xl flex items-center  cursor-pointer" onClick={toggleReturn}>
                <ChevronLeft />
              </p>
              <button className="text-black text-3xl" onClick={toggleCloseAll}>
                &times;
              </button>
            </div>

            <div className="p-8 flex flex-col gap- max-h-[80vh] overflow-y-auto">
              {/* Services details */}
              <div className=" border-t-4 border-b-4 border- py-8">
                <div className=" flex flex-col gap-4 max-w-[60%] ">
                  <p className=" text-lg">Lavage Extérieur</p>
                  <Link href="/exterieur" className="flex flex-row items-center gap-2 text-sm">
                   <FaInfoCircle className="" />
                    Notre Prestation en Détail
                  </Link>
                  <Link href="/exterieur/#exterieur" className="flex flex-row items-center gap-2 text-sm">
                    <FaDollarSign />
                    Notre Tarification
                  </Link>
                </div>
              </div>
              <div className="  border-b-8 border-transparent/5 py-8">
                <div className="flex flex-col gap-4 max-w-[60%]">
                  <p className="text-lg ">Lavage Intérieur</p>
                  <Link href="/interieur" className="flex flex-row items-center gap-2 text-sm">
                    <FaInfoCircle className="" />
                    Notre Prestation en Détail
                  </Link>
                  <Link href="/interieur/#interieur" className="flex flex-row items-center gap-2 text-sm">
                   <FaDollarSign />
                    Notre Tarification
                  </Link>
                </div>
              </div>
              <div className="  border-b-8 border-transparent/5 py-8">
                <div className="flex flex-col gap-4 max-w-[60%]">
                  <p className="text-lg ">Lavage Complet</p>
                  <Link href="/complet" className="flex flex-row items-center gap-2 text-sm">
                    <FaInfoCircle className="" />
                    Notre Prestation en Détail
                  </Link>
                  <Link href="/complet/#complet" className="flex flex-row items-center gap-2 text-sm">
                    <FaDollarSign />
                    Notre Tarification
                  </Link>
                </div>
              </div>
              <div className="  border-b-8 border-transparent/5 py-8">
                <div className="flex flex-col gap-4 max-w-[60%]">
                  <p className="text-lg">Formule Sièges</p>
                  <Link href="/sieges" className="flex flex-row items-center gap-2 text-sm">
                    <FaInfoCircle className="" />
                    Notre Prestation en Détail
                  </Link>
                  <Link href="/sieges/#sieges" className="flex flex-row items-center gap-2 text-sm">
                    <FaDollarSign />
                    Notre Tarification
                  </Link>
                </div>
              </div>
              <div className="  border-b-8 border-transparent/5 py-8">
                <div className="flex flex-col gap-4 max-w-[60%]">
                  <p className="text-lg">Formule Intégrale</p>
                  <Link href="/integrale" className="flex flex-row items-center gap-2 text-sm">
                    <FaInfoCircle className="" />
                    Notre Prestation en Détail
                  </Link>
                  <Link href="/integrale/#integrale" className="flex flex-row items-center gap-2 text-sm">
                    <FaDollarSign />
                    Notre Tarification
                  </Link>
                </div>
              </div>
              <div className="  border-b-8 border-transparent/5 py-8">
                <div className="flex flex-col gap-4 max-w-[60%]">
                  <p className="text-lg ">Services à la carte</p>
                  <Link href="/carte" className=" text-sm flex flex-row items-center gap-2">
                    <FaInfoCircle className="" />
                    Notre Prestation en Détail
                  </Link>
                  <Link href="/carte/#carte" className="text-sm flex flex-row items-center gap-2">
                    <FaDollarSign />
                    Notre Tarification
                  </Link>
                </div>
              </div>
            </div>

            {/* Fixer le bouton "Rendez-vous" en bas de l'écran */}
            <div className="px-4 py-4 fixed bottom-0 left-0 w-full  bg-opacity-90 z-50 flex justify-center items-center">
                <button className=" w-36 py-3 bg-blue-700  rounded-full shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105 focus:outline-none flex justify-center items-center">
                  <Link href="/rdv" onClick={toggleCloseAll} className="text-white text-sm font-semibold">
                    Rendez-vous
                  </Link>
                </button>
              </div>
          </div>)
          :
          null
        }
      </nav>
    </>
  );
};

export default Navbar;

































       