"use client";

import { useEffect, useState } from "react";
import { Button, Group, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Package } from "@/types/package";
import { Administrative } from "@/types/administrative";

export default function FormPackage({
  initialValues,
  onSubmit,
}: {
  initialValues?: Partial<Package>;
  onSubmit: (data: Partial<Package>) => void;
}) {
  const [administrative, setAdministrative] = useState<Administrative>({
    province: [],
    regency: [],
    district: [],
    village: [],
  });
  const form = useForm<Partial<Package>>({
    initialValues: {
      package_name: "",
      duration: "",
      unit: "",
      description: "",
      price: "",
      meeting_point_latitude: "",
      meeting_point_longitude: "",
      latitude: "",
      longitude: "",
      province_id: "",
      regency_id: "",
      district_id: "",
      village_id: "",
      discount_id: "",
    },

    validate: {
      package_name: (value) => (value ? null : "Package Name is required"),
      duration: (value) => (value ? null : "Duration is required"),
      unit: (value) => (value ? null : "Unit is required"),
      description: (value) => (value ? null : "Description is required"),
      price: (value) => (value ? null : "Price is required"),
      meeting_point_latitude: (value) =>
        value ? null : "Meeting Point Latitude is required",
      meeting_point_longitude: (value) =>
        value ? null : "Meeting Point Longitude is required",
      latitude: (value) => (value ? null : "Latitude is required"),
      longitude: (value) => (value ? null : "Longitude is required"),
      province_id: (value) => (value ? null : "Province is required"),
      regency_id: (value) => (value ? null : "Regency is required"),
      district_id: (value) => (value ? null : "District is required"),
      village_id: (value) => (value ? null : "Village is required"),
    },
  });

  const selectRegency = (value: null | string) => {
    if (!value) return;
    form.setValues({ province_id: value });
  };

  const selectDistrict = (value: null | string) => {
    if (!value) return;
    form.setValues({ regency_id: value });
  };

  const selectVillage = (value: null | string) => {
    if (!value) return;
    form.setValues({ district_id: value });
  };

  useEffect(() => {
    if (initialValues) {
      form.setValues({ ...initialValues });
    }
  }, [initialValues]);

  return (
    <div className="p-2">
      <form
        onSubmit={form.onSubmit(onSubmit)}
        className="flex flex-col gap-y-3"
      >
        <div className="flex w-full gap-3">
          <TextInput
            withAsterisk
            label="Package Name"
            {...form.getInputProps("package_name")}
            className="lg:w-[60%]"
          />
          <TextInput
            withAsterisk
            label="Duration"
            {...form.getInputProps("duration")}
            className="lg:w-[30%]"
          />
          <Select
            searchable
            clearable
            label="Time unit"
            nothingFound="No options"
            placeholder="Pick one"
            {...form.getInputProps("unit")}
            data={[
              { value: "hour", label: "Hour" },
              { value: "day", label: "Day" },
              { value: "week", label: "Week" },
            ]}
            className="lg:w-[10%]"
          />
        </div>
        <Textarea
          withAsterisk
          autosize
          minRows={5}
          label="Description"
          {...form.getInputProps("description")}
        />
        <div className="flex w-full gap-3">
          <TextInput
            withAsterisk
            label="Price"
            {...form.getInputProps("price")}
            className="lg:w-[50%]"
            type="number"
          />
          <Select
            searchable
            clearable
            label="Discount"
            nothingFound="No options"
            placeholder="Pick one"
            {...form.getInputProps("discount_id")}
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
            className="lg:w-[50%]"
          />
        </div>
        <div className="flex w-full gap-3">
          <TextInput
            withAsterisk
            label="Meeting Point Lalitude"
            {...form.getInputProps("meeting_point_latitude")}
            className="lg:w-[50%]"
          />
          <TextInput
            withAsterisk
            label="Meeting Point Longitude"
            {...form.getInputProps("meeting_point_longitude")}
            className="lg:w-[50%]"
          />
        </div>
        <div className="flex w-full gap-3">
          <TextInput
            withAsterisk
            label="Latitude"
            {...form.getInputProps("latitude")}
            className="lg:w-[50%]"
          />
          <TextInput
            withAsterisk
            label="Longitude"
            {...form.getInputProps("longitude")}
            className="lg:w-[50%]"
          />
        </div>
        <Select
          withAsterisk
          searchable
          clearable
          label="Province"
          nothingFound="No options"
          placeholder="Pick one"
          data={[
            { value: "1", label: "React" },
            { value: "2", label: "Angular" },
            { value: "3", label: "Svelte" },
            { value: "4", label: "Vue" },
          ]}
          onChange={selectRegency}
          error={form.errors?.province_id && "Pick at least one item"}
        />
        <Select
          withAsterisk
          searchable
          clearable
          label="Regency"
          nothingFound="No options"
          placeholder="Pick one"
          data={[
            { value: "1", label: "React" },
            { value: "2", label: "Angular" },
            { value: "3", label: "Svelte" },
            { value: "4", label: "Vue" },
          ]}
          onChange={selectDistrict}
          error={form.errors?.regency_id && "Pick at least one item"}
        />
        <Select
          withAsterisk
          searchable
          clearable
          label="District"
          nothingFound="No options"
          placeholder="Pick one"
          data={[
            { value: "1", label: "React" },
            { value: "2", label: "Angular" },
            { value: "3", label: "Svelte" },
            { value: "4", label: "Vue" },
          ]}
          onChange={selectVillage}
          error={form.errors?.district_id && "Pick at least one item"}
        />
        <Select
          withAsterisk
          searchable
          clearable
          label="Village"
          nothingFound="No options"
          placeholder="Pick one"
          {...form.getInputProps("village_id")}
          data={[
            { value: "1", label: "React" },
            { value: "2", label: "Angular" },
            { value: "3", label: "Svelte" },
            { value: "4", label: "Vue" },
          ]}
        />
        <Group position="right" mt="md">
          <Button type="submit" className="bg-mantine-primary">
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
}
