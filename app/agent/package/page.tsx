"use client";

import { useState, useEffect } from "react";
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

  const tableBodyColumns: ((dataItem: UserData) => React.ReactNode)[] = [
    (dataItem) => <>{dataItem.name}</>,
    (dataItem) => <>{dataItem.username}</>,
    (dataItem) => <>{dataItem.email}</>,
    (dataItem) => <>{dataItem.address.city}</>,
    (dataItem) => (
      <div className="flex gap-1">
        <Link href="/agent/package/edit">
          <Button variant="light">Edit</Button>
        </Link>
        <Link href={`/agent/package/add-more-detail/${dataItem.name}`}>
          <Button variant="outline">Add more detail</Button>
        </Link>
      </div>
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
