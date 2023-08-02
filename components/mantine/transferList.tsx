"use client";

import { useState } from "react";
import {
  TransferList as TransferListMantine,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
  Group,
  Avatar,
  Text,
  Checkbox,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { Trash2 } from "lucide-react";

const initialValues: TransferListData = [
  [
    {
      value: "bender",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
    },

    {
      value: "carol",
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
    },
    {
      value: "bender0",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
    },

    {
      value: "carol1",
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
    },
    {
      value: "bender1",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
    },

    {
      value: "carol2",
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
    },
    {
      value: "bender2",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
    },

    {
      value: "carol3",
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
    },
    {
      value: "bender3",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
    },
    {
      value: "carol4",
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
    },
    {
      value: "bender4",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
    },
  ],
  [],
];

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    <Trash2
      className="w-5"
      color="#c2c2c2"
      onClick={(e) => {
        e.stopPropagation();
        alert(data.value);
      }}
    />
    <Avatar src={data.image} radius="xl" size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}></Text>
    </div>
    <Checkbox
      checked={selected}
      onChange={() => {}}
      tabIndex={-1}
      sx={{ pointerEvents: "none" }}
    />
  </Group>
);

export default function TransferList({ title }: { title: string }) {
  const [data, setData] = useState<TransferListData>(initialValues);
  return (
    <div className="border p-3 rounded">
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: "48rem", cols: 2, spacing: "sm" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
      >
        <p>{title}</p>
        <div>
          <Button className="bg-mantine-primary float-right">Save</Button>
        </div>
      </SimpleGrid>
      <TransferListMantine
        value={data}
        onChange={setData}
        searchPlaceholder="Search..."
        nothingFound="Nothing here"
        titles={["List of facility", "Package facility"]}
        breakpoint="sm"
        listHeight={300}
        itemComponent={ItemComponent}
        filter={(query, item) =>
          item.label.toLowerCase().includes(query.toLowerCase().trim())
        }
      />
    </div>
  );
}
