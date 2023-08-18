"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import CheckAuth from "./check-auth";

interface NextAuthProviderProps {
  children: ReactNode;
}

const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return (
    <SessionProvider>
      <CheckAuth>{children}</CheckAuth>
    </SessionProvider>
  );
};

export default NextAuthProvider;
