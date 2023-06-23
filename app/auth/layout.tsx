"use client";
import { Children } from "@/types/layout";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Layout({ children }: Children) {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 fixed top-0 left-0 z-50 border-b bg-white">
      {children}
    </div>
  );
}
