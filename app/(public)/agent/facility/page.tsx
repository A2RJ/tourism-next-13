"use client";

import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { baseAPIURL } from "@/lib/fecthAPI";
import { Facility } from "@/types/package";
import { Button } from "@mantine/core";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const tableHeaders = ["Facility Name", "Action"];
  const apiUrl = `${baseAPIURL}/facility`;
  const tableBodyColumns: ((item: Facility) => React.ReactNode)[] = [
    (item) => <>{item.facility_name}</>,
    (item) => (
      <>
        <Link href={`/agent/facility/edit/${item.id}`}>
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
          <h2 className="text-2xl font-semibold tracking-tight">Facility</h2>
          <p className="text-sm text-muted-foreground">
            Manage your tour package facility list easily.
          </p>
        </div>
        <div className="ml-auto mr-4">
          <Link href={`/agent/facility/create`}>
            <Button className="bg-mantine-primary" leftIcon={<PlusCircle />}>
              Add Facility
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="my-4" />
      <Table headers={tableHeaders} body={tableBodyColumns} apiUrl={apiUrl} />
    </>
  );
}
