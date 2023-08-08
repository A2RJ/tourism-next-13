"use client";

import Table from "@/components/ui/table";
import { baseAPIURL } from "@/lib/fecthAPI";
import { Package } from "@/types/package";
import { Button } from "@mantine/core";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const tableHeaders = ["Package Name", "Price", "Duration", "Action"];
  const apiUrl = `${baseAPIURL}/tour-package`;
  const tableBodyColumns: ((item: Package) => React.ReactNode)[] = [
    (item) => <>{item.package_name}</>,
    (item) => <>{item.price}</>,
    (item) => <>{item.duration}</>,
    (item) => (
      <>
        <Link href={`/agent/package/edit/${item.id}`}>
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
          <Link href={"/agent/package/input"}>
            <Button className="bg-mantine-primary" leftIcon={<PlusCircle />}>
              Add Package
            </Button>
          </Link>
        </div>
      </div>
      <Table headers={tableHeaders} body={tableBodyColumns} apiUrl={apiUrl} />
    </>
  );
}
