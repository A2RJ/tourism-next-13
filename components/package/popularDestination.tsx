import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { ListPariwisata } from "./pariwisata";
import { CardPackageCarousal } from "./cardPackageCarousal";

export default function PopularDestinatipon() {
  return (
    <div className="mb-4 mt-6">
      <h4 className="font-extrabold pb-6">Popular Destination</h4>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {ListPariwisata.slice(10, 19).map(
          ({ name, cover }: { name: string; cover: string }, index: number) => (
            <CardPackageCarousal key={index} name={name} cover={cover} />
          )
        )}
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
    </div>
  );
}
