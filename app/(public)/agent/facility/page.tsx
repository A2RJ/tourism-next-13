"use client";

import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PlusCircle } from "lucide-react";

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      facility: "",
    },

    validate: {
      facility: (value) => (value ? null : "Facility is required"),
    },
  });

  const handleSubmit = ({ facility }: { facility: string }) => {
    console.log(facility);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Facility</h2>
          <p className="text-sm text-muted-foreground">
            Manage your tour package facility list easily.
          </p>
        </div>
        <div className="ml-auto mr-4">
          <Modal opened={opened} onClose={close} title="Input facility">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                withAsterisk
                label="Facility"
                placeholder="Hotel or accomodation"
                description="Please enter your facility information"
                {...form.getInputProps("facility")}
              />
              <Group position="right" mt="md">
                <Button type="submit" className="bg-mantine-primary">
                  Submit
                </Button>
              </Group>
            </form>
          </Modal>

          <Button
            onClick={open}
            className="bg-mantine-primary"
            leftIcon={<PlusCircle />}
          >
            Add Facility
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <Table />
    </>
  );
}
