"use client";

import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { Button, Center, Group, NumberInput, TextInput } from "@mantine/core";
import { DateInput, DatePicker, DateTimePicker } from "@mantine/dates";
import { Discount } from "@/types/package";

export default function DiscountForm({
  initialValues,
  onSubmit,
}: {
  initialValues: Partial<Discount>;
  onSubmit: (data: Partial<Discount>) => void;
}) {
  const form = useForm<Partial<Discount>>({
    initialValues: {
      discount_name: "",
      discount_percentage: 0,
      start_date: new Date(),
      end_date: new Date(),
      ...initialValues,
    },

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

  useEffect(() => {
    form.setValues({
      discount_name: initialValues.discount_name,
      discount_percentage: initialValues.discount_percentage,
      start_date:
        initialValues.start_date &&
        new Date(`${initialValues.start_date} GMT+0800`),
      end_date:
        initialValues.end_date &&
        new Date(`${initialValues.end_date} GMT+0800`),
    });
  }, [initialValues]);

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
        mx="auto"
        max={100}
        min={0}
        maw={400}
        {...form.getInputProps("discount_percentage")}
      />
      <DateTimePicker
        label="Start"
        placeholder="Pick date and time"
        maw={400}
        mx="auto"
        defaultValue={new Date(`${form.values.start_date} GMT+0800`)}
        {...form.getInputProps("start_date")}
      />
      <DateTimePicker
        label="End"
        placeholder="Pick date and time"
        maw={400}
        mx="auto"
        defaultValue={new Date(`${form.values.end_date} GMT+0800`)}
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
