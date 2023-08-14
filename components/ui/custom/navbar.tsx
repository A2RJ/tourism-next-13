"use client";

import Link from "next/link";
import UserButton from "./userButton";
import ToggleMenu from "./toggleMenu";
import { useSession } from "next-auth/react";
import { Button } from "@mantine/core";
import { authOptions } from "@/lib/auth";

export default function Navbar() {
  const { data } = useSession();
  return (
    <div
      className="h-16 sticky top-0 z-40 backdrop-blur-sm border-b bg-white/30 text-sm py-3"
      id="navbar"
    >
      <nav className="flex lg:justify-between items-center justify-between w-full min-h-11">
        <Link href={"/"} className="text-xl font-semibold">
          Travelin
        </Link>
        <ToggleMenu className="block lg:hidden" />
        <div className="hidden lg:block">
          {data?.user ? (
            <UserButton username={data?.user?.name} />
          ) : (
            <div className="flex justify-center gap-4 items-center">
              <Link href={"/auth"}>
                <Button variant="outline">Sign Up</Button>
              </Link>
              <Link href={"/auth"}>
                <Button className="bg-mantine-primary">Sign In</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
