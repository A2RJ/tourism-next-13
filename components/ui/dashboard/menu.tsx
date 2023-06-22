"use client";

import { usePathname } from "next/navigation";
import {
  Map,
  Receipt,
  User,
  Package2,
  CreditCard,
  BellRing,
  LayoutGrid,
  ListChecks,
  Radio,
  Home,
} from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import React from "react";

type Option = "Discover" | "User" | "Agent" | "Uts" | "Admin";

type MenuItem = {
  name: string;
  href: string;
  icon: JSX.Element;
};

type Menus = {
  Discover: MenuItem[];
  User: MenuItem[];
  Agent: MenuItem[];
  Uts: MenuItem[];
  Admin: MenuItem[];
};

export default function Menu({ option }: { option: Option }) {
  const pathname = usePathname();
  const menus: Menus = {
    Discover: [
      // {
      //   name: "Popular",
      //   href: "/dashboard",
      //   icon: <Home />,
      // },
      {
        name: "Browse",
        href: "/dashboard",
        icon: <Home />,
      },
      {
        name: "Nearest",
        href: "/dashboard/nearest",
        icon: <Radio />,
      },
    ],
    User: [
      {
        name: "Wish List",
        href: "/dashboard/user/wish-list",
        icon: <ListChecks />,
      },
      {
        name: "My Destination",
        href: "/dashboard/user/destination",
        icon: <Map />,
      },
      {
        name: "Transaction",
        href: "/dashboard/user/transaction",
        icon: <Receipt />,
      },
      {
        name: "Notification",
        href: "/dashboard/user/notification",
        icon: <BellRing />,
      },
      {
        name: "User",
        href: "/dashboard/user/profile",
        icon: <User />,
      },
    ],
    Agent: [
      {
        name: "Tour Package",
        href: "/dashboard/agent/package",
        icon: <Package2 />,
      },
      {
        name: "Reservation",
        href: "/dashboard/agent/reservation",
        icon: <Receipt />,
      },
      {
        name: "Withdraw",
        href: "/dashboard/agent/withdraw",
        icon: <CreditCard />,
      },
      {
        name: "Notification",
        href: "/dashboard/agent/notification",
        icon: <BellRing />,
      },
      {
        name: "Bussiness Profile",
        href: "/dashboard/agent/profile",
        icon: <User />,
      },
    ],
    Uts: [],
    Admin: [],
  };

  return (
    <div className="px-4 py-2">
      <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
        {option}
      </h2>
      <div className="space-y-1">
        {menus[option].map(({ name, href, icon: Icon }, index) => {
          const isActive = pathname === href;
          return (
            <Link key={index} href={href}>
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
        })}
      </div>
    </div>
  );
}
