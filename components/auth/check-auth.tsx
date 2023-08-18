"use client";

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useEffectOnce } from "usehooks-ts";
import useAuth from "@/state/useAuthStore";

interface CheckAuthProps {
  children: ReactNode;
}

const CheckAuth = ({ children }: CheckAuthProps) => {
  const { data } = useSession();
  const { setToken } = useAuth((state) => state);

  useEffect(() => {
    setToken(data?.user.access_token.token || false);
  }, [data?.user.access_token.token]);

  return <>{children}</>;
};

export default CheckAuth;
