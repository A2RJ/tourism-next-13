"use client";

import { Separator } from "@/components/ui/separator";
import Table from "@/components/ui/table";
import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { number } from "zod";

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      discount: "",
    },

    validate: {
      discount: (value) => {
        const regex = /^[0-9]+$/;
        if (!regex.test(value)) {
          return "Invalid discount";
        }
        const numericValue = Number(value);
        if (numericValue < 1 || numericValue > 100) {
          return "Discount must be between 1 and 100";
        }
        return null;
      },
    },
  });

  const handleSubmit = ({ discount }: { discount: string }) => {
    console.log(discount);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Discount</h2>
          <p className="text-sm text-muted-foreground">Manage your discount.</p>
        </div>
        <div className="ml-auto mr-4">
          <Modal opened={opened} onClose={close} title="Input Discount">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                withAsterisk
                label="Discount"
                placeholder="50%"
                {...form.getInputProps("discount")}
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
            Add Discount
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  );
}
