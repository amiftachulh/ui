import { LuArrowDown, LuArrowUp, LuChevronsUpDown, LuEyeOff } from "react-icons/lu";
import { Column } from "@tanstack/react-table";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.ComponentProps<typeof styled.div> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  css,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <styled.div css={css}>{title}</styled.div>;
  }

  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            css={{
              ml: "-3",
              h: "8",
              "&[data-state=open]": {
                bg: "accent",
              },
            }}
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <LuArrowDown />
            ) : column.getIsSorted() === "asc" ? (
              <LuArrowUp />
            ) : (
              <LuChevronsUpDown />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <LuArrowUp />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <LuArrowDown />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <LuEyeOff />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </styled.div>
  );
}
