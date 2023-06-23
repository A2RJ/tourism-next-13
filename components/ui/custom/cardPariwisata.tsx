"use client";

import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";

type CardPariwisata = {
  name: string;
  cover: string;
};

export default function CardPariwisata({ name, cover }: CardPariwisata) {
  return (
    <div
      key={name}
      className="min-h-[300px] w-full border rounded-xl p-1 hover:border-blue-300 hover:cursor-pointer animate-in duration-300"
    >
      <Swiper
        mousewheel={false}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper rounded-t-xl object-cover w-full h-64"
      >
        <SwiperSlide>
          <Image
            alt="Image"
            src={`${cover}`}
            className="object-cover w-full h-64"
            width={0}
            height={0}
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Image"
            src={`${cover}`}
            className="object-cover w-full h-64"
            width={0}
            height={0}
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Image"
            src={`${cover}`}
            className="object-cover w-full h-64"
            width={0}
            height={0}
            sizes="100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Image"
            src={`${cover}`}
            className="object-cover w-full h-64"
            width={0}
            height={0}
            sizes="100vw"
          />
        </SwiperSlide>
      </Swiper>
      <Link href={`/detail?slug=${name}`}>
        <div className="my-5 px-3 h-28">
          <div className="flex justify-between h-14">
            <h4 className="font-semibold">Travel {name} Lorem ipsum.</h4>
            <span className="mt-1">
              <span className="flex items-center text-xs font-semibold">
                <Star className="h-4" />
                4.78
              </span>
            </span>
          </div>
          <div className="flex gap-1 items-center ">
            <MapPin className="w-3" color="#fa0000" />
            <p className="flex text-sm text-slate-500">
              Jl. sama kamu...
              <span className="text-blue-600">(5km)</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
