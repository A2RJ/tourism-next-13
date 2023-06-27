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
  Percent,
  ToyBrick,
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
        name: "Wish List",
        href: "/user/wish-list",
        icon: <ListChecks />,
      },
      {
        name: "My Destination",
        href: "/user/destination",
        icon: <Map />,
      },
      {
        name: "Transaction",
        href: "/user/transaction",
        icon: <Receipt />,
      },
      {
        name: "Notification",
        href: "/user/notification",
        icon: <BellRing />,
      },
    ],
    Agent: [
      {
        name: "Tour Package",
        href: "/agent/package",
        icon: <Package2 />,
      },
      {
        name: "Discount",
        href: "/agent/discount",
        icon: <Percent />,
      },
      {
        name: "Facility",
        href: "/agent/facility",
        icon: <ToyBrick />,
      },
      {
        name: "Reservation",
        href: "/agent/reservation",
        icon: <Receipt />,
      },
      {
        name: "Withdraw",
        href: "/agent/withdraw",
        icon: <CreditCard />,
      },
      {
        name: "Notification",
        href: "/agent/notification",
        icon: <BellRing />,
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
