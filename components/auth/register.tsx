"use client";

import { baseAPIURL } from "@/lib/fecthAPI";
import axios from "axios";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Register() {
  let [loading, setLoading] = useState<boolean>(false);
  let [error, setError] = useState<object[]>([]);
  let [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError([]);
    try {
      const { name, email, password, password_confirmation } = formValues;
      await axios.post(`${baseAPIURL}/auth/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      setLoading(false);
      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data);
        setError(error.response.data.errors);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log({ request: error.request });
      } else {
        console.log("Error", error.message);
      }
    }
  };

  const ErrorList = ({ errors }: any) => {
    return (
      <ul>
        {errors.map((error: any, index: number) => (
          <li key={index}>{error.message}</li>
        ))}
      </ul>
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        rowGap: 10,
      }}
    >
      <ErrorList errors={error} />
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="password_confirmation">Konfirmasi Password</label>
      <input
        required
        type="password"
        name="password_confirmation"
        value={formValues.password_confirmation}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <button
        style={{
          backgroundColor: `${loading ? "#ccc" : "#3446eb"}`,
          color: "#fff",
          padding: "1rem",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "loading..." : "Register"}
      </button>
    </form>
  );
}
