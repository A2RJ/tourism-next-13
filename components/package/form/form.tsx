"use client";

import { useState } from "react";
import { Button, Group, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Package } from "@/types/package";
import { Administrative } from "@/types/administrative";

export default function FormPackage() {
  const [administrative, setAdministrative] = useState<Administrative>({
    province: [],
    regency: [],
    district: [],
    village: [],
  });
  const form = useForm<Partial<Package>>({
    initialValues: {
      packgeName: "",
      duration: "",
      description: "",
      price: "",
      meetingPointLatitude: "",
      meetingPointLongitude: "",
      latitude: "",
      longitude: "",
      provinceId: "",
      regencyId: "",
      districtId: "",
      villageId: "",
      discountId: "",
    },

    validate: {
      packgeName: (value) => (value ? null : "Package Name is required"),
      duration: (value) => (value ? null : "Duration is required"),
      description: (value) => (value ? null : "Description is required"),
      price: (value) => (value ? null : "Price is required"),
      meetingPointLatitude: (value) =>
        value ? null : "Meeting Point Latitude is required",
      meetingPointLongitude: (value) =>
        value ? null : "Meeting Point Longitude is required",
      latitude: (value) => (value ? null : "Latitude is required"),
      longitude: (value) => (value ? null : "Longitude is required"),
      provinceId: (value) => (value ? null : "Province is required"),
      regencyId: (value) => (value ? null : "Regency is required"),
      districtId: (value) => (value ? null : "District is required"),
      villageId: (value) => (value ? null : "Village is required"),
    },
  });

  const handleSubmit = (value: Partial<Package>) => {
    console.log({ onSubmit: value });
  };

  const selectRegency = (value: null | string) => {
    form.setValues({ provinceId: value });
  };

  const selectDistrict = (value: null | string) => {
    form.setValues({ regencyId: value });
  };

  const selectVillage = (value: null | string) => {
    form.setValues({ districtId: value });
  };

  console.log(form.errors);

  return (
    <div className="p-2">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-y-3"
      >
        <div className="flex w-full gap-3">
          <TextInput
            withAsterisk
            label="Package Name"
            {...form.getInputProps("packgeName")}
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
            {...form.getInputProps("discountId")}
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
          />
          <Select
            searchable
            clearable
            label="Discount"
            nothingFound="No options"
            placeholder="Pick one"
            {...form.getInputProps("discountId")}
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
            {...form.getInputProps("meetingPointLatitude")}
            className="lg:w-[50%]"
          />
          <TextInput
            withAsterisk
            label="Meeting Point Longitude"
            {...form.getInputProps("meetingPointLongitude")}
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
        />
        <Select
          withAsterisk
          searchable
          clearable
          label="Village"
          nothingFound="No options"
          placeholder="Pick one"
          {...form.getInputProps("villageId")}
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
