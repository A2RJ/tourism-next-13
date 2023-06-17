import { Search } from "lucide-react";
import { ListPariwisata } from "./pariwisata";
import SearchForm from "./searchForm";
import React from "react";

export default function Hero() {
    return (
        <div className="my-4">
            <div className="w-full rounded-sm h-72 border bg-blue-50 flex flex-col justify-center items-center">
                <h4 className="font-semibold">Travel with us</h4>
                <h1 className="text-3xl font-bold">Uncovering beautiful places</h1>
            </div>
            <div className="flex items-center justify-center p-5 w-[80%] rounded-md bg-white drop-shadow-sm mx-auto -mt-12">
                <SearchForm />
            </div>
            <div className="flex gap-2 justify-center my-4 overflow-x-scroll scrollbar-none">
                {ListPariwisata.slice(0, 10).map((pariwisata) => (
                    <p key={pariwisata.name} className="border py-1 px-4 cursor-pointer rounded-full hover:border-blue-300">
                        {pariwisata.name}
                    </p>
                ))}
            </div>
        </div>
    )
}