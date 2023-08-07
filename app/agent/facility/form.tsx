"use client";

import { useForm } from "@mantine/form";
import { Button, Center, Group, TextInput } from "@mantine/core";
import { Facility } from "@/types/package";

export default function FacilityForm({
  initialValues,
  onSubmit,
}: {
  initialValues: Partial<Facility>;
  onSubmit: (data: Partial<Facility>) => void;
}) {
  const form = useForm<Partial<Facility>>({
    initialValues: initialValues,

    validate: {
      facility_name: (value) => (!value ? "Facility name is required" : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        withAsterisk
        label="Facility Name"
        maw={400}
        mx="auto"
        {...form.getInputProps("facility_name")}
      />
      <Center>
        <Group position="right" mt="md">
          <Button type="submit" className="bg-mantine-primary">
            Submit
          </Button>
        </Group>
      </Center>
    </form>
  );
}
