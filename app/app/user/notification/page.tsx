"use client";

import { Suspense, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { data } from "@/components/package/cardsCarousel";
import { CardPackageCarousal } from "@/components/package/cardPackageCarousal";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination } from "@mantine/core";
import ViewModeButtons from "../../agent/notification/view-mode-buttons";

export default function Page() {
  const [viewMode, setViewMode] = useState("table");

  return (
    <>
      <div className="flex items-center justify-between mt-5">
        <h2 className="text-2xl font-semibold tracking-tight">Wish List</h2>
        <ViewModeButtons viewMode={viewMode} setView={setViewMode} />
      </div>
      <Separator className="mt-4" />
      {viewMode === "table" ? (
        <Table />
      ) : (
        <Suspense fallback={<PackageListLoading />}>
          <>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {data.slice(0, 5).map((item) => (
                <CardPackageCarousal
                  cover={item.image}
                  name={item.title}
                  key={item.title}
                />
              ))}
            </div>
            <div className="flex justify-end mt-5">
              <Pagination total={10} />
            </div>
          </>
        </Suspense>
      )}
    </>
  );
}

const PackageListLoading = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.slice(0, 3).map((item) => (
        <div className="grid gap-3 mb-5" key={item.title}>
          <Skeleton className="aspect-video" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-7" />
          <Skeleton className="h-7" />
          <Skeleton className="h-7" />
          <Skeleton className="h-7 w-1/2" />
          <Skeleton className="h-8 w-1/3" />
        </div>
      ))}
    </div>
  );
};
