"use client";

import TransferList from "@/components/mantine/transferList";
import FormPackage from "@/components/package/form/form";
import InputFile from "@/components/ui/custom/inputFile";
import { Button, Tabs, Text } from "@mantine/core";
import { IconListCheck, IconPhoto } from "@tabler/icons-react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold">
          Add more detail for {decodeURI(params.slug)}
        </h2>
        <Button className="bg-mantine-primary">Preview package</Button>
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
          <FormPackage />
        </Tabs.Panel>

        <Tabs.Panel value="gallery" pt="xs" className="space-y-2">
          <TransferList title="Conveniently manage and arrange the list of product images" />
          <InputFile />
        </Tabs.Panel>

        <Tabs.Panel value="facility" pt="xs">
          <TransferList title="Customize product facilities according to your preferences" />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
