"use client";

import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import {
  Button,
  Group,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
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
      <Separator className="mt-4" />
      <Table />
    </>
  );
}
