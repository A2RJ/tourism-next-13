import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "../components/auth/providers";
import { Children } from "@/types/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelin",
  description: "Let's traveling with us",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={`scroll-smooth ${inter.className}`}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
