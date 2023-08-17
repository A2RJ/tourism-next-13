"use client";

import { PACKAGE_URL } from "@/action/api_url";
import Table from "@/components/ui/table";
import { PackageType } from "@/types/package";
import { Button } from "@mantine/core";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const tableHeaders = [
    "Package Name",
    "Price",
    "Total Reservation",
    "Duration",
    "Action",
  ];
  const tableBodyColumns: ((item: PackageType) => React.ReactNode)[] = [
    (item) => <>{item.package_name}</>,
    (item) => <>RP. {item.price}</>,
    (item) => <>RP. {(item.price as any) * 10} (x10)</>,
    (item) => <>{item.duration}</>,
    (item) => (
      <>
        <Link href={`/app/agent/package/edit/${item.id}`}>
          <Button variant="light">Edit</Button>
        </Link>
        <Link href={`/detail/${item.id}`}>
          <Button className="bg-mantine-primary">Detail</Button>
        </Link>
      </>
    ),
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Package</h2>
          <p className="text-sm text-muted-foreground">
            Manage your tour package list easily.
          </p>
        </div>
        <div className="ml-auto">
          <Link href={"/agent/package/create"}>
            <Button className="bg-mantine-primary" leftIcon={<PlusCircle />}>
              Add Package
            </Button>
          </Link>
        </div>
      </div>
      <Table
        headers={tableHeaders}
        body={tableBodyColumns}
        apiUrl={PACKAGE_URL}
      />
    </>
  );
}
