"use client";

import Table from "@/components/ui/table";
import { baseAPIURL } from "@/lib/fecthAPI";
import { Package } from "@/types/package";
import { Button } from "@mantine/core";
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
        <Button variant="light">Delete</Button>
      </>
    ),
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            My Wish List
          </h2>
        </div>
      </div>
      <Table headers={tableHeaders} body={tableBodyColumns} apiUrl={apiUrl} />
    </>
  );
}
