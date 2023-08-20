"use client";

import PopularDestinatipon from "@/components/package/popularDestination";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcumb";
import { debounce } from "@/lib/utils";
import { useSearchStore } from "@/state/useSearchStore";
import { Select, TextInput } from "@mantine/core";
import { Search } from "lucide-react";

export default async function Page() {
  const { setKeyword } = useSearchStore((state) => state);
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", url: "#" },
    { label: "Discover", url: "#" },
    { label: "Popular" },
  ];

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-12 mb-2 gap-2">
        <Select
          className="col-span-3"
          placeholder="Category"
          searchable
          clearable
          data={[
            { value: "15", label: "Category 1" },
            { value: "50", label: "Category 2" },
            { value: "100", label: "Category 3" },
          ]}
          onChange={(e) => {}}
        />
        <TextInput
          className="col-span-9"
          placeholder="Search"
          rightSection={<Search className="w-5 text-slate-400" />}
          onChange={debounce((e) => {
            setKeyword(e.target.value);
          }, 500)}
        />
      </div>
      <PopularDestinatipon />
    </div>
  );
}
