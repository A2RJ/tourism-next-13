import {
  BellRing,
  CreditCard,
  Home,
  LayoutGrid,
  Library,
  ListChecks,
  ListMusic,
  Map,
  Music2,
  Package2,
  Percent,
  PlayCircle,
  Radio,
  Receipt,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <p className="text-2xl font-bold px-2">Travelin</p>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Popular
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Browse
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Radio className="mr-2 h-4 w-4" />
              Nearest
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            User
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <ListChecks className="mr-2 h-4 w-4" />
              Wish List
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Map className="mr-2 h-4 w-4" />
              My Destination
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Receipt className="mr-2 h-4 w-4" />
              Transaction
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <BellRing className="mr-2 h-4 w-4" />
              Notification
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Agent
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Package2 className="mr-2 h-4 w-4" />
              Tour Package
              {/* (with: tab package and review) */}
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Receipt className="mr-2 h-4 w-4" />
              Reservation
              {/* with payment detail, total, optional with metric */}
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Withdraw
              {/* with bank account, withdraw log */}
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <BellRing className="mr-2 h-4 w-4" />
              Notification
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Bussiness Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
