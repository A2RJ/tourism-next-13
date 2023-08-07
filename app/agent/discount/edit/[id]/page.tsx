"use client";

import { Discount } from "@/types/package";
import { Separator } from "@/components/ui/separator";
import DiscountForm from "../../form";

export default function Page({ params }: { params: { id: string } }) {
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
      <h3 className="font-bold">Edit Discount</h3>
      <Separator className="my-2" />
      <DiscountForm
        initialValues={{
          discount_name: params.id,
          discount_percentage: 10,
          end_date: "",
          start_date: "",
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
