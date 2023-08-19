"use client";

import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "../button";
import {
  Map,
  Receipt,
  Package2,
  CreditCard,
  BellRing,
  ListChecks,
  Radio,
  Home,
  Percent,
  ToyBrick,
  LogOut,
  User2,
} from "lucide-react";

type Option =
  | "discover"
  | "tourist"
  | "agent"
  | "uts"
  | "admin"
  | "account"
  | "pemda";

type Action = "onClick";

type MenuItem = {
  name: string;
  href: string;
  icon: JSX.Element;
  action?: {
    type: Action;
    handler: () => void;
  };
};

type Menus = {
  discover?: MenuItem[];
  tourist?: MenuItem[];
  agent?: MenuItem[];
  uts?: MenuItem[];
  admin?: MenuItem[];
  account?: MenuItem[];
  pemda?: MenuItem[];
};

export default function Menu({ option }: { option: Option | undefined }) {
  const pathname = usePathname();
  const menus: Menus = {
    discover: [
      {
        name: "Browse",
        href: "/",
        icon: <Home />,
      },
      {
        name: "Nearest",
        href: "/nearest",
        icon: <Radio />,
      },
    ],
    tourist: [
      {
        name: "My Destination",
        href: "/app/user/destination",
        icon: <Map />,
      },
      {
        name: "Wish List",
        href: "/app/user/wish-list",
        icon: <ListChecks />,
      },
      {
        name: "Transaction",
        href: "/app/user/transaction",
        icon: <Receipt />,
      },
      {
        name: "Notification",
        href: "/app/user/notification",
        icon: <BellRing />,
      },
    ],
    agent: [
      {
        name: "Tour Package",
        href: "/app/agent/package",
        icon: <Package2 />,
      },
      {
        name: "Discount",
        href: "/app/agent/discount",
        icon: <Percent />,
      },
      {
        name: "Facility",
        href: "/app/agent/facility",
        icon: <ToyBrick />,
      },
      {
        name: "Reservation",
        href: "/app/agent/reservation",
        icon: <Receipt />,
      },
      {
        name: "Withdraw",
        href: "/app/agent/withdraw",
        icon: <CreditCard />,
      },
      {
        name: "Notification",
        href: "/app/agent/notification",
        icon: <BellRing />,
      },
    ],
    account: [
      {
        name: "Profile",
        href: "/app/profile",
        icon: <User2 />,
      },
      {
        name: "Logout",
        href: "#",
        icon: <LogOut />,
        action: {
          type: "onClick",
          handler: () => {
            signOut();
            redirect("/");
          },
        },
      },
    ],
  };

  return (
    option && (
      <div className="px-4 py-2">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          {option?.charAt(0).toUpperCase()}
          {option?.slice(1)}
        </h2>
        <div className="space-y-1">
          {menus[option]?.map(
            ({ name, href, icon: Icon, action }: MenuItem, index: number) => {
              const isActive = pathname === href;
              const url = action ? "#" : href;
              return (
                <Link key={index} href={url} onClick={action?.handler}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    className="w-full justify-start"
                  >
                    <span className="mr-2">
                      {React.cloneElement(Icon, { size: 16 })}
                    </span>
                    {name}
                  </Button>
                </Link>
              );
            }
          )}
        </div>
      </div>
    )
  );
}
