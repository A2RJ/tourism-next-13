"use client";

import { Suspense, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import ViewModeButtons from "./view-mode-buttons";
import { data } from "@/components/package/cardsCarousel";
import { CardPackageCarousal } from "@/components/package/cardPackageCarousal";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination } from "@mantine/core";

export default function Page() {
  const [viewMode, setViewMode] = useState("table");

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Notification
          </h2>
        </div>
      </div>
      <Separator className="mt-4" />
    </>
  );
}
