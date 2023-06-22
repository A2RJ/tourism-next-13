"use client";

import { ListPariwisata } from "@/components/ui/home/pariwisata";
import { ChevronRight, Navigation } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Button } from "../button";
import { useEffect, useState } from "react";
import CardPariwisata from "./cardPariwisata";

type Coord = {
  latitude: number;
  longitude: number;
};

export default function BasedLocation() {
  const [coord, setCoord] = useState<Coord>({ latitude: 0, longitude: 0 });
  useEffect(() => {}, [coord]);

  return (
    <div className="mb-4 mt-6">
      <div className="pb-6">
        <h4 className="font-extrabold">Based on your location</h4>
        <small>
          This page is only show 5KM range from your location: 10.5873748,
          11.327842934
        </small>
      </div>
      {coord.latitude == 0 && coord.longitude == 0 ? (
        <div className="h-60 border rounded-lg flex justify-center items-center">
          <Button
            onClick={() => {
              setCoord({
                latitude: Math.round(Math.random() * 1000),
                longitude: Math.round(Math.random() * 1000),
              });
              console.log(coord);
            }}
          >
            <Navigation className="mr-2" />
            Turn on your location
          </Button>
        </div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {ListPariwisata.slice(10, 18).map(({ name, cover }, index) => (
              <CardPariwisata key={index} name={name} cover={cover} />
            ))}
          </div>

          <div className="flex justify-end gap-4 items-center text-xs p-4 select-none">
            <div className="flex gap-1 items-center cursor-pointer">
              <ChevronLeft color="#4b4949" className="w-5" />
              <p>Previous</p>
            </div>
            <div className="flex items-center">
              <p>|</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <p>Next</p>
              <ChevronRight color="#4b4949" className="w-5" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
