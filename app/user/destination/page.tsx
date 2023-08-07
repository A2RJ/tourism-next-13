"use client";

import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { Button } from "@mantine/core";
import Link from "next/link";

type UserData = {
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export default function Page() {
  const tableHeaders = [
    "Package Name",
    "Tour Guide",
    "Email",
    "Phone",
    "Location",
    "Departure on",
    "Action",
  ];
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  function generateFakeDeparture() {
    const today = new Date();

    const randomDays = Math.floor(Math.random() * 7) + 1;
    const departureDate = new Date(today);
    departureDate.setDate(today.getDate() + randomDays);

    const year = departureDate.getFullYear();
    const month = String(departureDate.getMonth() + 1).padStart(2, "0");
    const day = String(departureDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const fakeDeparture = {
      date: formattedDate,
      time: "08:00",
      destination: "Kota X",
    };
    const output = `${fakeDeparture.date} at ${fakeDeparture.time} to ${fakeDeparture.destination}.`;
    return output;
  }
  const tableBodyColumns: ((dataItem: UserData) => React.ReactNode)[] = [
    (dataItem) => <>{dataItem.name}</>,
    (dataItem) => <>{dataItem.username}</>,
    (dataItem) => <>{dataItem.email}</>,
    (dataItem) => <>{dataItem.phone}</>,
    (dataItem) => <>{dataItem.address.city}</>,
    () => <>{generateFakeDeparture()}</>,
    (dataItem) => (
      <div className="grid gap-1">
        <Link href={`/agent/package/edit/${dataItem.name}`}>
          <Button variant="light">Edit</Button>
        </Link>
        <Link href={`/detail/${dataItem.name}`}>
          <Button className="bg-mantine-primary">Detail</Button>
        </Link>
        <Link href={`/maps`}>
          <Button className="bg-mantine-primary">Open map</Button>
        </Link>
        <Link href={`/maps`}>
          <Button className="bg-mantine-primary">Cancel Trip</Button>
        </Link>
      </div>
    ),
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            My Destination
          </h2>
        </div>
      </div>
      <Separator className="my-4" />
      <Table headers={tableHeaders} body={tableBodyColumns} apiUrl={apiUrl} />
    </>
  );
}
