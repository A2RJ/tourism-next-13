"use client";

import { Sidebar } from "@/components/ui/dashboard/sidebar";
import useAuth from "@/state/useAuthStore";
import { Children } from "@/types/layout";
import { MantineProvider } from "@mantine/core";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffectOnce } from "usehooks-ts";

export default function LayoutProvider({ children }: Children) {
  const pathname = usePathname();
  const { data } = useSession();
  const user = useAuth((state) => state.user);
  const setUser = useAuth((state) => state.setUser);
  const deleteEverything = useAuth((state) => state.deleteEverything);

  useEffectOnce(() => {
    if (!data?.user) {
      deleteEverything();
    } else {
      const name = data.user.name || "";
      const email = data.user.email || "";
      setUser({ name, email, token: "token" });
    }
    console.log({ user });
  });

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
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
