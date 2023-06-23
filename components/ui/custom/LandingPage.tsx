"use client";

import { CardsCarousel } from "../cardsCarousel";
import Hero from "./hero";
import PopularDestinatipon from "./popularDestination";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <PopularDestinatipon />
      <CardsCarousel />
    </>
  );
}
