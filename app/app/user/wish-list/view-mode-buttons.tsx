import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction } from "react";
import { BsGridFill, BsTable } from "react-icons/bs";

const ViewModeButtons = ({
  viewMode,
  setView,
}: {
  viewMode: string;
  setView: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-x-2">
          View Mode {viewMode === "table" ? <BsTable /> : <BsGridFill />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select View Mode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={viewMode}
          onValueChange={setView}
          className="text-muted-foreground"
        >
          <DropdownMenuRadioItem value="table" className="flex gap-x-3">
            <BsTable /> Table
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" className="flex gap-x-3">
            <BsGridFill /> Grid
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ViewModeButtons;
