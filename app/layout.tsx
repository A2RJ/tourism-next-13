import "@/styles/globals.css";
import { NextAuthProvider } from "@/components/auth/providers";
import { Children } from "@/types/layout";
import type { Metadata } from "next";
import MantineLayout from "./mantine-layout";

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
