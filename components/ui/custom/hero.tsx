import React from "react";
import { ListPariwisata } from "@/components/package/pariwisata";
import SearchBar from "@/components/mantine/searchBar";

export default function Hero() {
  return (
    <div className="my-4">
      <div className="w-full rounded-sm pt-7 h-72 border bg-blue-50 flex flex-col justify-center items-center">
        <h4 className="font-semibold">Travel with us</h4>
        <h1 className="text-3xl font-bold">Uncovering beautiful places</h1>
        <div className="flex items-center justify-center p-1 w-[80%] rounded-full mx-auto mt-3">
          <SearchBar className="w-full" />
        </div>
        <div className="flex gap-2 justify-center my-4 overflow-x-scroll scrollbar-none">
          {ListPariwisata.slice(0, 10).map((pariwisata) => (
            <p
              key={pariwisata.name}
              className="border py-1 px-4 cursor-pointer rounded-full hover:border-blue-300 bg-white"
            >
              {pariwisata.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
