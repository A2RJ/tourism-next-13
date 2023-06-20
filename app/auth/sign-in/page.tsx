"use client";

import GoogleSvg from "@/components/svg/googleSvg";
import { Input } from "@/components/ui/custom/input";
import { Password } from "@/components/ui/custom/password";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Credential = {
  email: string;
  password: string;
};
export default function Page() {
  const searchParams = useSearchParams();
  const { status } = useSession();
  const router = useRouter();
  const [credential, setCredential] = useState<Credential>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("tourismapp", credential);
    if (status == "authenticated") router.push("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mt-5 text-center pb-8">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
          Log in to your account
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-medium">Email</label>
          <Input
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={credential.email}
          />
        </div>
        <div className="relative">
          <Password
            text="Password"
            name="password"
            onChange={handleChange}
            value={credential.password}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="remember-me-checkbox"
              className="checkbox-item peer hidden"
            />
            <label
              htmlFor="remember-me-checkbox"
              className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
            ></label>
            <span>Remember me</span>
          </div>
          <a
            href="#"
            className="text-center text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
        <div className="text-red-500 text-center pt-2">
          {searchParams.get("error")?.includes("E_INVALID_AUTH_PASSWORD") && (
            <p>Invalid email or password</p>
          )}
        </div>
        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          Sign in
        </button>
      </form>
      <button
        className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        onClick={() => signIn("google")}
      >
        <GoogleSvg />
        Continue with Google
      </button>
      <p className="text-center">
        Don&apos;t have an account?{" "}
        <Link
          href={"/auth/sign-up"}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
