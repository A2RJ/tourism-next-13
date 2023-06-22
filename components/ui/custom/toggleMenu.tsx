"use client";

import { cn } from "@/lib/utils";
import useToggleMenuStore from "@/state/useToogleMenu";
import React from "react";

export default function ToggleMenu({ className }: { className?: string }) {
  const { toggle, setToggle } = useToggleMenuStore((state) => state);

  return (
    <button
      onClick={setToggle}
      className={cn("relative group overflow-hidden ", className)}
    >
      <div className="relative flex items-center justify-center rounded-full w-10 h-10 transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              toggle ? "translate-x-10" : ""
            }`}
          />
          <div
            className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
              toggle ? "translate-x-10 delay-75" : ""
            }`}
          />
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              toggle ? "translate-x-10 delay-150" : ""
            }`}
          />
          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
              toggle ? "-translate-x-10" : ""
            } group-focus:translate-x-0 flex w-0 group-focus:w-12`}
          >
            <div
              className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                toggle ? "rotate-45 delay-300" : ""
              }`}
            />
            <div
              className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                toggle ? "-rotate-45 delay-300" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
