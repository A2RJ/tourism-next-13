"use client";

import {
  FileInput,
  FileInputProps,
  Group,
  Center,
  rem,
  TextInput,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

function Value({ file }: { file: File }) {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: `${rem(3)} ${rem(7)}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <IconPhoto size={rem(14)} style={{ marginRight: rem(5) }} />
      <span
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          maxWidth: rem(200),
          display: "inline-block",
        }}
      >
        {file.name}
      </span>
    </Center>
  );
}

const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (!value) return;
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return <Value file={value} />;
};
export default function InputFile() {
  return (
    <div className="border p-4 pb-12 rounded">
      <p>Easily and quickly upload your preferred package images</p>
      <FileInput
        label="File"
        placeholder="Select file"
        valueComponent={ValueComponent}
      />
      <TextInput label="Name" placeholder="Input location name" />
      <div className="my-3">
        <Button className="bg-mantine-primary float-right">Upload</Button>
      </div>
    </div>
  );
}
