import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "../components/auth/providers";
import { Children } from "@/types/layout";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import Navbar from "@/components/ui/custom/navbar";
import Footer from "@/components/ui/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelin",
  description: "Let's traveling with us",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={`scroll-smooth ${inter.className}`}>
          <div className="container">
            <div className="border-t">
              <div className="bg-background">
                <div className="relative left-0 top-0">
                  <Sidebar />
                  <div className="lg:ml-64 ml-0 p-4">
                    <Navbar />
                    {children}
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </body>
      </NextAuthProvider>
    </html>
  );
}
