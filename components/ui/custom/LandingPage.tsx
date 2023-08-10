"use client";

import PopularDestinatipon from "@/components/package/popularDestination";
import { CardsCarousel } from "@/components/package/cardsCarousel";
import { HeroText } from "@/components/mantine/hero";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroText />
      <PopularDestinatipon />
      <CardsCarousel />
      <Footer />
    </>
  );
}
