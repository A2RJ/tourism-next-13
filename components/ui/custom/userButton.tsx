"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

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
    <DropdownMenu>
      <DropdownMenuTrigger className="border w-10 border-blue-400 h-10 ring-0 rounded-full">
        {getInitials(username)}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
