"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PodcastEmptyPlaceholder } from "@/components/ui/dashboard/podcast-empty-placeholder";
import { useToggle } from "@mantine/hooks";
import Table from "./table";

export default function Page() {
  const [type, toggle] = useToggle([
    "package",
    "facility",
    "discount",
  ] as const);

  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="package" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger
              value="package"
              className="relative"
              onClick={() => toggle("package")}
            >
              Package
            </TabsTrigger>
            <TabsTrigger value="facility" onClick={() => toggle("facility")}>
              Facility
            </TabsTrigger>
            <TabsTrigger value="discount" onClick={() => toggle("discount")}>
              Discount
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto mr-4">
            <Button className="bg-mantine-primary hover:bg-blue-600 hover:shadow-lg">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add {type}
            </Button>
          </div>
        </div>
        <TabsContent
          value="package"
          className="border-none p-0 outline-none min-h-[80%]"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Package</h2>
              <p className="text-sm text-muted-foreground">
                Manage your tour package list easily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <Table />
        </TabsContent>
        <TabsContent
          value="discount"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                New Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Your favorite podcasts. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <PodcastEmptyPlaceholder />
        </TabsContent>
      </Tabs>
    </div>
  );
}
