import Link from "next/link";
import { Button } from "../button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserButton from "./userButton";
import ToggleMenu from "./toggleMenu";

const getSession = async () => {
  const json = await fetch("http://localhost:3000/api/session", {
    method: "GET",
  });
  const result = await json.json();
  if (!result.ok)
    return {
      authenticated: false,
      session: null,
    };

  return result;
};

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div
      className="h-16 sticky top-0 z-40 backdrop-blur-sm border-b bg-white/30 text-sm py-3"
      id="navbar"
    >
      <nav className="flex lg:justify-end items-center justify-between w-full min-h-11">
        <Link href={"/"} className="block lg:hidden text-xl font-semibold">
          Travelin
        </Link>
        <ToggleMenu className="block lg:hidden" />
        <div className="hidden lg:block">
          {session ? (
            <UserButton username={session?.user?.name} />
          ) : (
            <div className="flex justify-center gap-4 items-center">
              <Link href={"/auth/sign-up"}>
                <p className="font-medium text-blue-500" aria-current="page">
                  Sign up
                </p>
              </Link>
              <Link href={"/auth/sign-in"}>
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
