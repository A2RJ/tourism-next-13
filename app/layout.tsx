import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextAuthProvider } from "../components/auth/providers";
import { Children } from "@/types/layout";
import Head from "next/head";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import Navbar from "@/components/ui/custom/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelin",
  description: "Let's traveling with us",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <NextAuthProvider>
        <body className={`scroll-smooth ${inter.className}`}>
          <div className="container">
            <div className="border-t">
              <div className="bg-background">
                <div className="relative left-0 top-0">
                  <div className="w-64 h-screen border-r fixed lg:block hidden">
                    <Sidebar />
                  </div>
                  <div className="lg:ml-64 p-4">
                    <Navbar />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </NextAuthProvider>
    </html>
  );
}
