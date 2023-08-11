"use client";

import { HeroText } from "@/components/mantine/hero";
import { CardsCarousel } from "@/components/package/cardsCarousel";
import PopularDestinatipon from "@/components/package/popularDestination";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcumb";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

export default function Page() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", url: "#" },
    { label: "Discover", url: "#" },
    { label: "Popular" },
  ];

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <PopularDestinatipon />
      <CardsCarousel />

      <div className="h-60 border rounded-lg gap-4 flex flex-col justify-center items-center mt-10 border-blue-300">
        <h6 className="max-w-lg text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          aspernatur corporis numquam ipsam odio optio placeat. Sed cum commodi
          provident!
        </h6>
        <Button className="bg-blue-300 text-black">
          <Navigation className="mr-2 w-4" />
          Turn on your location
        </Button>
      </div>
    </div>
  );
}
