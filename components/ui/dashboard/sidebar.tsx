"use client";

import { cn } from "@/lib/utils";
import Menu from "./menu";
import useToggleMenuStore from "@/state/useToogleMenu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useSession } from "next-auth/react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const { data } = useSession();
  const pathname = usePathname();
  const { toggle, setToggle } = useToggleMenuStore((state) => state);
  const mediaQuery = useMediaQuery("(min-width: 1024px)");
  const shouldShowSidebar = mediaQuery ? true : toggle;

  useEffect(() => {
    setToggle();
  }, [pathname, setToggle]);
  return (
    <div
      className={cn(
        "pb-12 w-64 h-screen border-r fixed transition-transform overflow-scroll scrollbar-none ",
        shouldShowSidebar
          ? "block z-50 bg-white translate-x-0 duration-700 "
          : "hidden -translate-x-full ",
        className
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <p className="text-2xl font-bold px-2">Travelin</p>
        </div>
        <Menu option="discover" />
        <Menu option={data?.user.role} />
        <Menu option="account" />
      </div>
    </div>
  );
}
