"use client";
import { Children } from "@/types/layout";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Layout({ children }: Children) {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 fixed top-0 left-0 z-50 opacity-75  backdrop-blur-xl border-b bg-blue-50">
      <div className="bg-white p-7 rounded-xl">
        <p
          onClick={() => router.back()}
          className="flex cursor-pointer justify-end"
        >
          <X />
        </p>
        <div className="max-w-sm w-full text-gray-600 space-y-5 relative">
          <div className="text-center">
            <Image
              alt="logo"
              src="https://floatui.com/logo.svg"
              width={150}
              height={0}
              className="mx-auto h-auto"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
