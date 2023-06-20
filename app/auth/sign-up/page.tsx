"use client";

import GoogleSvg from "@/components/svg/googleSvg";
import { Input } from "@/components/ui/custom/input";
import { Password } from "@/components/ui/custom/password";
import { baseAPIURL } from "@/lib/fecthAPI";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Page() {
  const router = useRouter();
  const [state, setState] = useState<{
    loading: boolean;
    error: object[];
    formValues: FormValues;
  }>({
    loading: false,
    error: [],
    formValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, loading: true, error: [] }));

    try {
      const { name, email, password, password_confirmation } = state.formValues;
      await axios.post(`${baseAPIURL}/auth/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      setState((prevState) => ({ ...prevState, loading: false }));
      router.push("/");
    } catch (error: any) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.response?.data?.errors || [],
      }));
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log({ request: error.request });
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      formValues: { ...prevState.formValues, [name]: value },
    }));
  };

  const { loading, error, formValues } = state;

  return (
    <>
      <div className="mt-5 text-center pb-8">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
          Log in to your account
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {error.length > 0 && (
          <ul>
            {error.map((error: any, index: number) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        )}
        <div>
          <label className="font-medium">Full Name</label>
          <Input
            type="text"
            required
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <Input
            type="email"
            required
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Password
            text="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Password
            text="Confirm password"
            name="password_confirmation"
            value={formValues.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          disabled={loading}
        >
          {loading ? "loading..." : "Sign up"}
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
        Have an account?{" "}
        <Link
          href={"/auth/sign-in"}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sing in
        </Link>
      </p>
    </>
  );
}
