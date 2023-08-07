"use client";

import { useForm } from "@mantine/form";
import { Button, Center, Group, NumberInput, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { Discount } from "@/types/package";
import { Separator } from "@/components/ui/separator";

export default function DiscountForm({
  initialValues,
  onSubmit,
}: {
  initialValues: Partial<Discount>;
  onSubmit: (data: Partial<Discount>) => void;
}) {
  const form = useForm<Partial<Discount>>({
    initialValues: initialValues,

    validate: {
      discount_name: (value) => (!value ? "Discount name is required" : null),
      discount_percentage: (value) => {
        if (value === undefined) {
          return "Discount percentage is required";
        }
        const percentage = Number(value);
        if (percentage < 1 || percentage > 100) {
          return "Discount must be between 1 and 100";
        }
        if (typeof value !== "number") {
          return "Discount percentage must a number";
        }
        return null;
      },
      start_date: (value) => (!value ? "Start date is required" : null),
      end_date: (value) => (!value ? "End date is required" : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        withAsterisk
        label="Discount Name"
        maw={400}
        mx="auto"
        {...form.getInputProps("discount_name")}
      />
      <NumberInput
        label="Discount"
        withAsterisk
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            : "$ "
        }
        max={100}
        min={0}
        maw={400}
        mx="auto"
        {...form.getInputProps("discount_percentage")}
      />
      <DateTimePicker
        valueFormat="DD MMM YYYY hh:mm A"
        label="Pick Start Date"
        placeholder="Pick date and time"
        maw={400}
        mx="auto"
        {...form.getInputProps("start_date")}
      />
      <DateTimePicker
        valueFormat="DD MMM YYYY hh:mm A"
        label="Pick End Date"
        placeholder="Pick date and time"
        maw={400}
        mx="auto"
        {...form.getInputProps("end_date")}
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
