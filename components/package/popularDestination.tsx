"use client";

import { useEffect, useState } from "react";
import { ApiResponse, PackageType } from "@/types/package";
import tourPackage from "@/action/package";
import { Pagination } from "@mantine/core";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { CardPackageCarousal } from "./cardPackageCarousal";
import { useSearchStore } from "@/state/useSearchStore";

export default function PopularDestinatipon() {
  const [activePage, setPage] = useState(1);
  const { keyword } = useSearchStore((state) => state);
  const [destination, setDestination] = useState<ApiResponse<PackageType>>();

  useEffect(() => {
    const fecth = async () => {
      const data = await tourPackage.get({
        page: activePage,
        per_page: 16,
        keyword,
      });
      setDestination(data);
    };
    fecth();
  }, [activePage, keyword]);

  return (
    <div className="mb-4 mt-6">
      <h4 className="font-extrabold pb-6">Popular Destination</h4>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {destination?.data.map((packageItem: PackageType, index: number) => (
          <CardPackageCarousal key={index} item={packageItem} />
        ))}
      </div>
      <div className="flex justify-end gap-4 items-center text-xs p-4 select-none">
        <Pagination
          onChange={setPage}
          total={destination?.meta.last_page || 0}
          position="center"
          nextIcon={IconChevronRight}
          previousIcon={IconChevronLeft}
        />
      </div>
    </div>
  );
}
