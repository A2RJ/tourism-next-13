"use client";

import FormPackage from "../form";
import { snakeToCamel } from "@/lib/utils";
import { API_URL } from "@/action/api_url";
import { PackageType } from "@/types/package";
import axios from "axios";

export default function Page() {
  const handleSubmit = async (value: Partial<PackageType>) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/tour-package`,
        snakeToCamel(value)
      );
      console.log(data);
    } catch (error: any) {
      if (error.response) {
        // Respons diterima, tetapi bukan kode 2xx (berhasil)
        if (error.response.status === 422) {
          console.log("Unprocessable Entity:", error.response.data);
          // Di sini Anda bisa mengakses error details yang diberikan oleh server
        } else {
          console.log("Other Error:", error.response.data);
        }
      } else if (error.request) {
        // Tidak ada respons
        console.log("No Response:", error.request);
      } else {
        // Terjadi error lainnya
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="px-3 pb-6">
        <h2 className="font-bold">Form input paket wisata</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus hic nulla atque error illum quis?
        </p>
      </div>
      <FormPackage onSubmit={handleSubmit} />;
    </>
  );
}
