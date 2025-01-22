"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Clock9 } from "lucide-react";
import Link from "next/link";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const serviceData = [
    {
      title: "Lavage Intérieur",
      duration: "1h",
      features: [
        "Aspiration des moquettes",
        "Aspiration des contre-portes",
        "Aspiration des tapis",
        "Nettoyage des vitres intérieures",
      ],
      link: "/interieur",
      popular: false,
    },
    {
      title: "Lavage Extérieur",
      duration: "1h",
      features: [
        "Nettoyage de la carrosserie",
        "Nettoyage des jantes",
        "Application de brillant sur les pneus",
        "Nettoyage des vitres extérieures",
      ],
      link: "/exterieur",
      popular: false,
    },
    {
      title: "Lavage Complet",
      duration: "2h",
      features: [
        "Lavage Intérieur",
        "Lavage Extérieur",
        "Nettoyage des portes",
        "Aspiration du coffre",
      ],
      link: "/complet",
      popular: true, // Marqué comme populaire
    },
  ];

  return (
    <section className="p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center">
      {/* Grille pour les cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {serviceData.map((service, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="rounded"
          >
            <CardHeader className="p-4 bg-white/95 text-center">
              <h2 className="text-black text-xl md:text-2xl font-semibold">{service.title}</h2>
              <div className="flex items-center justify-center mt-2 text-sm md:text-base">
                <Clock9 />
                <span className="ml-1">{service.duration}</span>
              </div>
            </CardHeader>

            <CardContent className="p-4 bg-white">
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="bg-white p-4 text-center">
              <Button className="snake-border-clockwise w-full" variant="outline">
                <Link href={service.link}>Nos Prestations</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
