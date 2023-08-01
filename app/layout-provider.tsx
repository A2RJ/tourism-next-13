"use client";

import Footer from "@/components/ui/custom/footer";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Children } from "@/types/layout";
import { MantineProvider } from "@mantine/core";
import { usePathname } from "next/navigation";

export default function LayoutProvider({ children }: Children) {
  const pathname = usePathname();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      {pathname == "/auth" && children}
      <div className="container">
        <div className="border-t">
          <div className="bg-background">
            <div className="relative left-0 top-0">
              <Sidebar />
              <div className="lg:ml-64 ml-0 p-4 min-h-[calc(100vh-80px)]">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
