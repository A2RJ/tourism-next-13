"use client";

import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Wish List</h2>
        </div>
      </div>
      <Separator className="mt-4" />
    </>
  );
}
