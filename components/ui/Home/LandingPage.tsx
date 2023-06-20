"use client";
import PopularDestinatipon from "@/components/ui/home/popularDestination";
import BasedLocation from "@/components/ui/home/basedLocation";
import Hero from "@/components/ui/home/hero";
import Footer from "./footer";
import { signOut } from "next-auth/react";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <PopularDestinatipon />
      <button onClick={async () => await signOut()}>Test</button>
      <BasedLocation />
      <Footer />
    </>
  );
}
