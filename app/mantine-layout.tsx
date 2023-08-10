"use client";

import { Children } from "@/types/layout";
import { MantineProvider } from "@mantine/core";
import useAuth from "@/state/useAuthStore";
import { useSession } from "next-auth/react";
import { useEffectOnce } from "usehooks-ts";

export default function MantineLayout({ children }: Children) {
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
      {children}
    </MantineProvider>
  );
}
