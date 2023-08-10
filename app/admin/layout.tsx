import "swiper/css";
import "swiper/css/pagination";

import { NextAuthProvider } from "@/components/auth/providers";
import { Children } from "@/types/layout";
import LayoutProvider from "./layout-provider";

export default function RootLayout({ children }: Children) {
  return (
    <NextAuthProvider>
      <body className={`scroll-smooth`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </NextAuthProvider>
  );
}
