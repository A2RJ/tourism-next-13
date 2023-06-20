import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
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
      <body className={`scroll-smooth ${inter.className}`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
