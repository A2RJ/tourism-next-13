"use client";

import { Separator } from "@/components/ui/separator";
import FacilityForm from "../../form";
import { Facility } from "@/types/package";
import { useEffect, useState } from "react";
import { baseAPIURL } from "@/lib/fecthAPI";

export default function Page({ params }: { params: { id: string } }) {
  const [edit, setEdit] = useState<Partial<Facility>>({ facility_name: "" });
  const handleSubmit = ({ facility_name }: Partial<Facility>) => {
    console.log({ facility_name });
  };

  useEffect(() => {
    const getFacility = async () => {
      try {
        const response = await fetch(`${baseAPIURL}/facility/${params.id}`);
        const responseData = await response.json();
        setEdit({
          facility_name: responseData.facility_name,
        });
      } catch (error) {
        console.error("Error fetching discount data:", error);
      }
    };

    getFacility();
  }, [params.id]);

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Add Facility</h3>
      <Separator className="my-2" />
      <FacilityForm
        initialValues={{
          facility_name: edit.facility_name,
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
