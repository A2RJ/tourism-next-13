"use client";

import Table from "@/components/ui/table";
import { Button } from "@mantine/core";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

type UserData = {
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
};

export default function Page() {
  const tableHeaders = ["Name", "Username", "Email", "City", "Action"];
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const tableBodyColumns: ((item: UserData) => React.ReactNode)[] = [
    (item) => <>{item.name}</>,
    (item) => <>{item.username}</>,
    (item) => <>{item.email}</>,
    (item) => <>{item.address.city}</>,
    (item) => (
      <>
        <Link href={`/agent/package/edit/${item.name}`}>
          <Button variant="light">Edit</Button>
        </Link>
        <Link href={`/detail/${item.name}`}>
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
