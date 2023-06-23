"use client";

import PopularDestinatipon from "@/components/package/popularDestination";
import { CardsCarousel } from "@/components/package/cardsCarousel";
import { HeroText } from "@/components/mantine/hero";

export default function LandingPage() {
  return (
    <>
      <HeroText />
      <PopularDestinatipon />
      <CardsCarousel />
    </>
  );
}
