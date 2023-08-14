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
          <p>Conveniently manage and arrange the list of product images</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputFile />
            <DragAndDrop />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="facility" pt="xs">
          <TransferList title="Customize product facilities according to your preferences" />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
