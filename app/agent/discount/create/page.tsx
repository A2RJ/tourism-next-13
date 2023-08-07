"use client";

import { Discount } from "@/types/package";
import { Separator } from "@/components/ui/separator";
import DiscountForm from "../form";

export default function Page() {
  const handleSubmit = ({
    discount_name,
    discount_percentage,
    start_date,
    end_date,
  }: Partial<Discount>) => {
    console.log({ discount_name, discount_percentage, start_date, end_date });
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Add Discount</h3>
      <Separator className="my-2" />
      <DiscountForm
        initialValues={{
          discount_name: "",
          discount_percentage: 0,
          end_date: "",
          start_date: "",
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
