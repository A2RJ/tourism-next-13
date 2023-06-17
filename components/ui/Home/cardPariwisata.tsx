import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardPariwisata = {
    name: string;
    cover: string;
};

export default function CardPariwisata({ name, cover }: CardPariwisata) {
    return (
        <Link href={`/public/detail?slug=${name}`}>
            <div
                key={name}
                className="min-h-[300px] w-full border rounded-xl p-1 hover:border-blue-300 hover:cursor-pointer hover:shadow-lg animate-in duration-300"
            >
                <Image
                    alt="Image"
                    src={`${cover}`}
                    className="rounded-xl object-cover w-full h-64"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <div className="my-5 px-3">
                    <h4 className="font-semibold">Travel {name}</h4>
                    <div className="flex gap-1 items-center ">
                        <MapPin className="w-3" color="#fa0000" />
                        <p className="flex text-sm">
                            Jl. sama kamu...
                            <span className="text-blue-600">(5km)</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
