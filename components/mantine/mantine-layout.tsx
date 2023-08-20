"use client";

import { Children } from "@/types/layout";
import { MantineProvider } from "@mantine/core";

export default function MantineLayout({ children }: Children) {
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
