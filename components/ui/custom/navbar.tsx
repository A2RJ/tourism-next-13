import Link from "next/link";
import { Button } from "../button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div
      className="h-16 sticky top-0 z-50 backdrop-blur-sm border-b bg-white/30 text-sm py-3"
      id="navbar"
    >
      <div className="container flex justify-between">
        <div className="my-auto">
          <h4 className="font-extrabold text-2xl">Travelin</h4>
        </div>
        <div className="my-auto grid grid-cols-4 gap-3">
          <Link href="/">Home</Link>
          <Link href="/public/browse">Browse</Link>
          <a href="#">Wish list</a>
          <a href="#">About us</a>
        </div>
        <div className="my-auto grid grid-cols-2 gap-2">
          {session ? (
            <Link href={"/admin"}>Dashboard</Link>
          ) : (
            <>
              <Link href={"/auth/sign-up"}>
                <Button variant={"outline"} className="border-blue-800">
                  Sign up
                </Button>
              </Link>
              <Link href={"/auth/sign-in"}>
                <Button className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Sign in
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
