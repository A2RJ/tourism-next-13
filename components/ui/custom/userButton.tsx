"use client";
 
import { signOut } from "next-auth/react";
import { Menu, Text } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconHome,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";

export default function UserButton({
  username,
}: {
  username: string | null | undefined;
}) {
  function getInitials(username: string | null | undefined) {
    const name = username || "AC";
    const words = name.split(" ");
    let initial = "";
    if (words.length > 0) {
      initial += words[0][0].toUpperCase();
      if (words.length > 1) {
        initial += words[1][0].toUpperCase();
      }
    }
    return initial;
  }
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <div className="border w-10 border-blue-400 h-10 ring-0 flex items-center justify-center rounded-full cursor-pointer">
          {getInitials(username)}
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{username}</Menu.Label>
        <Link href="/app">
          <Menu.Item icon={<IconHome size={14} />}>Dashboard</Menu.Item>
        </Link>
        <Link href="/app/profile">
          <Menu.Item icon={<IconUserCircle size={14} />}>Profile</Menu.Item>
        </Link>

        <Menu.Divider />

        <Menu.Label></Menu.Label>
        <Menu.Item
          color="red"
          icon={<IconLogout size={14} />}
          onClick={() => signOut()}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
