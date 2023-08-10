"use client";

import Link from "next/link";
import { Button, Tabs, Text } from "@mantine/core";
import { IconListCheck, IconPhoto } from "@tabler/icons-react";
import DragAndDrop from "@/components/mantine/dragAndDrop";
import TransferList from "@/components/mantine/transferList";
import FormPackage from "../../form";
import InputFile from "@/components/ui/custom/inputFile";
import { useEffect, useState } from "react";
import { Package } from "@/types/package";

export default function Page({ params }: { params: { slug: string } }) {
  const [edit, setEdit] = useState<Partial<Package>>({});

  useEffect(() => {}, [params.slug]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="font-bold">
          Add more detail for {decodeURI(params.slug)}
        </h2>
        <div className="flex justify-end">
          <Link href={`/detail/${params.slug}`}>
            <Button className="bg-mantine-primary">Preview package</Button>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="package">
        <Tabs.List>
          <Tabs.Tab value="package" icon={<IconPhoto size="0.8rem" />}>
            Package
          </Tabs.Tab>
          <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="facility" icon={<IconListCheck size="0.8rem" />}>
            Facility
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="package" pt="xs">
          <FormPackage onSubmit={() => {}} />
        </Tabs.Panel>

        <Tabs.Panel value="gallery" pt="xs" className="space-y-2">
          {/* <TransferList title="Conveniently manage and arrange the list of product images" /> */}
          <p>Conveniently manage and arrange the list of product images</p>
          <DragAndDrop
          // data={[
          //   {
          //     symbol: "A",
          //     name: "Lokasi A",
          //     link: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          //   },
          //   {
          //     symbol: "B",
          //     name: "Lokasi B",
          //     link: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          //   },
          //   {
          //     symbol: "C",
          //     name: "Lokasi C",
          //     link: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          //   },
          //   {
          //     symbol: "D",
          //     name: "Lokasi D",
          //     link: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          //   },
          //   {
          //     symbol: "E",
          //     name: "Lokasi E",
          //     link: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          //   },
          // ]}
          />
          <InputFile />
        </Tabs.Panel>

        <Tabs.Panel value="facility" pt="xs">
          <TransferList title="Customize product facilities according to your preferences" />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
