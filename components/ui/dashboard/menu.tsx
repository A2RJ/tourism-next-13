"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
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
import { Button } from "../button";
import { LogIn } from "lucide-react";

type Option =
  | "Discover"
  | "User"
  | "Agent"
  | "Uts"
  | "Admin"
  | "Account"
  | "Pemda";

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
  Discover?: MenuItem[];
  User?: MenuItem[];
  Agent?: MenuItem[];
  Uts?: MenuItem[];
  Admin?: MenuItem[];
  Account?: MenuItem[];
  Pemda?: MenuItem[];
};

export default function Menu({ option }: { option: Option }) {
  const pathname = usePathname();
  const menus: Menus = {
    Discover: [
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
    User: [
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
    Agent: [
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
    Account: [
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
          },
        },
      },
      {
        name: "Login",
        href: "/auth",
        icon: <LogIn />,
      },
    ],
  };

  return (
    <div className="px-4 py-2">
      <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
        {option}
      </h2>
      <div className="space-y-1">
        {menus[option] ? (
          menus[option]?.map(
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
          )
        ) : (
          <p>No menu items found for {option}</p>
        )}
      </div>
    </div>
  );
}
