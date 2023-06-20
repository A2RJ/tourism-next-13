import { Children } from "@/types/layout";
import Image from "next/image";

export default function Layout({ children }: Children) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
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
  );
}
