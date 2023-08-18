import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Children } from "@/types/layout";
import MantineLayout from "@/components/mantine/mantine-layout";
import NextAuthProvider from "@/components/auth/providers";

export const metadata: Metadata = {
  title: "Travelin",
  description: "Let's traveling with us",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextAuthProvider>
          <MantineLayout>
            <div className="container scroll-smooth">{children}</div>
          </MantineLayout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
