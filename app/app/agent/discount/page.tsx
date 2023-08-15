"use client";

import { DISCOUNT_URL } from "@/action/api_url";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { DiscountType } from "@/types/package";
import { Button } from "@mantine/core";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const tableHeaders = [
    "Discount Name",
    "Percentage",
    "Start",
    "End",
    "Action",
  ];
  const tableBodyColumns: ((item: DiscountType) => React.ReactNode)[] = [
    (item) => <>{item.discount_name}</>,
    (item) => <>{item.discount_percentage}%</>,
    (item) => <>{item.start_date}</>,
    (item) => <>{item.end_date}</>,
    (item) => (
      <>
        <Link href={`/agent/discount/edit/${item.id}`}>
          <Button variant="light">Edit</Button>
        </Link>
        <Button className="bg-mantine-primary" onClick={() => alert(item.id)}>
          Delete
        </Button>
      </>
    ),
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Discount</h2>
          <p className="text-sm text-muted-foreground">Manage your discount.</p>
        </div>
        <div className="ml-auto mr-4">
          <Link href="/agent/discount/create">
            <Button className="bg-mantine-primary" leftIcon={<PlusCircle />}>
              Add Discount
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="my-4" />
      <Table
        headers={tableHeaders}
        body={tableBodyColumns}
        apiUrl={`${DISCOUNT_URL}/admin`}
      />
    </>
  );
}
