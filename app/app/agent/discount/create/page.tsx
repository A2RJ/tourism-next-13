"use client";

import { Separator } from "@/components/ui/separator";
import DiscountForm from "../form";
import { DiscountType } from "@/types/package";
import discount from "@/action/discount/discount";
import { useSession } from "next-auth/react";
import { UserType } from "@/types/utils";

export default function Page() {
  const { data } = useSession();
  const handleSubmit = async (form: Partial<DiscountType>) => {
    try {
      // const result = await discount.post({
      //   form,
      //   token: data?.user?.token,
      // });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Add Discount</h3> {JSON.stringify(data)}
      <Separator className="my-2" />
      <DiscountForm onSubmit={handleSubmit} />
    </div>
  );
}
