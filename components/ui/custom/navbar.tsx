"use client";

import Link from "next/link";
import { Button } from "../button";
import UserButton from "./userButton";
import ToggleMenu from "./toggleMenu";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
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
          {session.data?.user ? (
            <UserButton username={session?.data?.user?.name} />
          ) : (
            <div className="flex justify-center gap-4 items-center">
              <Link href={"/auth"}>
                <p className="font-medium text-blue-500" aria-current="page">
                  Sign up
                </p>
              </Link>
              <Link href={"/auth"}>
                <Button className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300">
                  Sign in
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
