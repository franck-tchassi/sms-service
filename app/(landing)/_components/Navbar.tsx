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

  useEffect(()=>{
  
  },[])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"  >
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  SMS SERVICES
                </Link>
              </div>
            </div>

            <NavigationMenu className="hidden md:block">
                <NavigationMenuList className="ml-4 flex items-center space-x-4 ">
                    {/* Accueil */}
                    <NavigationMenuItem >
                        <NavigationMenuLink
                            href="/"
                            className=" text-white text-sm"
                        >
                        Accueil
                        </NavigationMenuLink>
                     </NavigationMenuItem>

                    {/* Services avec menu déroulant */}
                    <NavigationMenuItem className=""  >
                    <DropdownMenu  >
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                           <p className="text-white  text-sm">Services</p>
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
                        className=" text-white  text-sm"
                      >
                       Apropos
                      </NavigationMenuLink>
                   </NavigationMenuItem>

                    {/* Téléphone */}
                    <span className="text-white   text-sm" >07.71.52.69.27</span>

                    {/* Rendez-vous */}
                    <Button variant={"outline"} className="snake-border-clockwise " data-aos="fade-right" data-aos-duration="4000">
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
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="absolute top-0 left-0 w-full h-screen bg-black  z-50  md:hidden">
            <div className="flex justify-between p-4 z-50">
              <Link href="/" className="text-white ">
                SMS SERVICES
              </Link>
              <button className="text-white text-3xl" onClick={toggleNavbar}>
                &times;
              </button>
            </div>
            <div className="px-4 pt-2 pb-3 space-y-8 sm:px-3 ">
              <Link href="/" className="text-white block h hover:text-gray-300 text-sm">
                Accueil
                
              </Link>

              <p className="text-white block hover:text-gray-300 text-sm flex items-center justify-between" onClick={toggleReturn}>
                Services
                <ChevronRight />
              </p>

              <Link href="/apropos" className="text-white block  hover:text-gray-300 text-sm">
                Apropos
              </Link>

              <span className="text-white block text-sm">
                  07.71.52.69.27
              </span>
               
              <Link href="/rdv" className="text-white block  hover:text-gray-300 text-sm">
                Rendez-vous
              </Link>
            </div>
          </div>
        )}

        {isServices?
          (
          <div className="absolute top-0 left-0 w-full h-screen bg-black  z-50 md:hidden">
            <div className="flex justify-between p-4 z-50">
              <p className="text-white text-lg flex items-center " onClick={toggleReturn}>
                <ChevronLeft />
                Retour
              </p>
              <button className="text-white text-3xl" onClick={toggleCloseAll}>
                &times;
              </button>
            </div>

            <div className="p-2 flex flex-col gap-9">
              {/* Services details */}
              <div className="p-4  flex flex-col gap-4">
                <p className="text-white text-lg">Lavage Extérieur</p>
                <a href="/exterieur" className="block  text-white text-sm">Notre Prestation en Détail</a>
                <a href="/exterieur/#exterieur" className="block text-white text-sm">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-lg text-white">Lavage Intérieur</p>
                <a href="/interieur" className="block text-white text-sm">Notre Prestation en Détail</a>
                <a href="/interieur/#interieur" className="block text-white text-sm">Notre Tarification</a>
              </div>

              <div className="p-4 flex flex-col gap-4">
                <p className="text-lg text-white">Lavage Complet</p>
                <a href="/complet" className="block text-white text-sm">Notre Prestation en Détail</a>
                <a href="/complet/#complet" className="block text-white text-sm">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-lg text-white">Formule Sièges</p>
                <a href="/sieges" className="block text-white text-sm">Notre Prestation en Détail</a>
                <a href="/sieges/#sieges" className="block text-white text-sm">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-lg text-white">Formule Intégrale</p>
                <a href="/integrale" className="block text-white text-sm">Notre Prestation en Détail</a>
                <a href="/integrale/#integrale" className="block text-white text-sm">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-lg text-white">Services à la carte</p>
                <a href="/carte" className="block text-white text-sm">Notre Prestation en Détail</a>
                <a href="/carte/#carte" className="block text-white text-sm">Notre Tarification</a>
              </div>
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

































       