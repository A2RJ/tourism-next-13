"use client";

import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Center,
} from "@mantine/core";
import GoogleSvg from "@/components/svg/googleSvg";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { baseAPIURL } from "@/lib/fecthAPI";
import axios from "axios";

type Credential = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      terms: true,
    },

    validate: {
      name: (val: any) =>
        type == "register" && val.length == 0 ? "Name is required" : null,
      email: (val: any) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val: any) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const onSubmit = async (values: Partial<Credential>) => {
    const { name, email, password, password_confirmation } = values;
    if (type == "register") {
      try {
        await axios.post(`${baseAPIURL}/auth/register`, {
          name,
          email,
          password,
          password_confirmation,
        });
        router.push("/");
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log({ request: error.request });
        } else {
          console.log("Error", error.message);
        }
      }
    } else {
      signIn("tourismapp", { email, password });
      if (status == "authenticated") router.push("/");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 fixed top-0 left-0 z-50 border-b bg-white">
      <Paper radius="md" p="xl" withBorder>
        <div
          className="flex justify-end mb-2 hover:cursor-pointer"
          onClick={() => router.back()}
        >
          <X />
        </div>
        <Text size="lg" weight={500}>
          Welcome to Mantine, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
          >
            <GoogleSvg />
            Continue with Google
          </button>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps("name")}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              {...form.getInputProps("email")}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
              radius="md"
            />

            {type === "register" && (
              <>
                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  {...form.getInputProps("password_confirmation")}
                  radius="md"
                />

                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                />
              </>
            )}

            <Center>
              {searchParams
                .get("error")
                ?.includes("E_INVALID_AUTH_PASSWORD") && (
                <Text fz="sm" c="red">
                  Invalid email or password, please check your credential
                </Text>
              )}
              {searchParams.get("error")?.includes("server error:") && (
                <Text fz="sm" c="red">
                  Ops, Server error
                </Text>
              )}
            </Center>
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" className="bg-[#4DABF7]">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
