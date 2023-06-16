import { ListPariwisata } from "@/components/Home/pariwisata";
import { ChevronRight, MapPin, Navigation } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function BasedLocation() {
    return (
        <>
            <div className="mb-4 mt-6">
                <h4 className="font-extrabold pb-6">Based on your location</h4>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    {ListPariwisata.slice(10, 20).map((pariwisata) => (
                        <div key={pariwisata.name} className="min-h-[300px] w-full border rounded-xl p-1">
                            <Image
                                alt="Image"
                                src={`${pariwisata.cover}`}
                                className="rounded-xl object-cover w-full h-64"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                            <div className="my-5 px-3">
                                <h4 className="font-semibold">Travel {pariwisata.name}</h4>
                                <div className="flex gap-1 items-center ">
                                    <MapPin className="w-3" color="#fa0000" />
                                    <p className="flex text-sm">
                                        Jl. sama kamu...
                                        <span className="text-blue-600">(5km)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-xs p-4">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <ChevronLeft color="#4b4949" className="w-5" />
                        <p>Previous</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <p>Next</p>
                        <ChevronRight color="#4b4949" className="w-5" />
                    </div>
                </div>
            </div>
            <div className="mb-4 mt-6">
                <h4 className="font-extrabold pb-2">Based on your location</h4>
                <div className="h-60 border rounded-lg flex justify-center items-center">
                    <Button>
                        <Navigation className="mr-2" />
                        Turn on your location
                    </Button>
                </div>
            </div>
        </>
    )
}