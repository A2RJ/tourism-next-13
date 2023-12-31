"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import DiscountForm from "../../form";
import { DiscountType } from "@/types/package";
import { API_URL } from "@/action/api_url";

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Partial<DiscountType>>({
    discount_name: "",
    discount_percentage: 0,
  });

  const handleSubmit = ({
    discount_name,
    discount_percentage,
    start_date,
    end_date,
  }: Partial<DiscountType>) => {
    console.log({
      onSubmitEdit: {
        discount_name,
        discount_percentage,
        start_date,
        end_date,
      },
    });
  };

  useEffect(() => {
    const getDiscount = async () => {
      try {
        const response = await fetch(`${API_URL}/discount/${params.id}`);
        const responseData = await response.json();
        setData({
          discount_name: responseData.discount_name,
          discount_percentage: responseData.discount_percentage,
          start_date: responseData.start_date,
          end_date: responseData.end_date,
        });
      } catch (error) {
        console.error("Error fetching discount data:", error);
      }
    };

    getDiscount();
  }, [params.id]);

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">Edit Discount</h3>
      <Separator className="my-2" />
      <DiscountForm initialValues={data} onSubmit={handleSubmit} />
    </div>
  );
}
