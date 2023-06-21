import { cn } from "@/lib/utils";
import Menu from "./menu";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <p className="text-2xl font-bold px-2">Travelin</p>
        </div>
        <Menu option="Discover" />
        <Menu option="User" />
        <Menu option="Agent" />
      </div>
    </div>
  );
}
