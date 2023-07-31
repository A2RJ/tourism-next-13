import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import type { Metadata } from "next";
import { NextAuthProvider } from "../components/auth/providers";
import { Children } from "@/types/layout";
import LayoutProvider from "./layout-provider";

export const metadata: Metadata = {
  title: "Travelin",
  description: "Let's traveling with us",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={`scroll-smooth`}>
          <LayoutProvider>{children}</LayoutProvider>
        </body>
      </NextAuthProvider>
    </html>
  );
}
