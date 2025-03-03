import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(landing)/_components/Navbar";
import Footer from "./(landing)/_components/Footer";
import QueryProvider from "@/utils/QueryClient";
import NextAuthSessionProvider from "@/provider/NextAuthSessionProvider";
import TotastProvider from "@/provider/TotastProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SMS Services - Lavage Écologique à la Main",
    template: "%s | SMS Services",
  },
  description: "SMS Services propose un lavage écologique et professionnel pour vos véhicules, à la main et sans eau. Découvrez nos prestations : lavage extérieur, intérieur, complet, et services à la carte.",
  openGraph: {
    title: "SMS Services - Lavage Écologique",
    description: "Découvrez nos services de lavage écologique sans eau pour voitures et motos.",
    url: "https://smsservices.fr", 
    siteName: "SMS Services",
    locale: "fr_FR",
    type: "website",
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          <TotastProvider />
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
          </NextAuthSessionProvider>
          
      </body>
    </html>
  );
}
