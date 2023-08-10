"use client";

import { Facility } from "@/types/package";
import { Separator } from "@/components/ui/separator";
import FacilityForm from "@/app/agent/facility/form";

export default function Page() {
  const handleSubmit = ({ facility_name }: Partial<Facility>) => {
    console.log({ facility_name });
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Add Facility</h3>
      <Separator className="my-2" />
      <FacilityForm onSubmit={handleSubmit} />
    </div>
  );
}
