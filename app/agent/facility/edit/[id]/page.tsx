"use client";

import { Separator } from "@/components/ui/separator";
import FacilityForm from "../../form";
import { Facility } from "@/types/package";

export default function Page() {
  const handleSubmit = ({ facility_name }: Partial<Facility>) => {
    console.log({ facility_name });
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Add Facility</h3>
      <Separator className="my-2" />
      <FacilityForm
        initialValues={{
          facility_name: "",
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
