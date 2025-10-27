"use client";

import { ColumnDef } from "@tanstack/react-table";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Badge } from "@/registry/default/ui/badge";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { labels, priorities, statuses } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        css={{ transform: "translateY(2px)" }}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        css={{ transform: "translateY(2px)" }}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Task" />,
    cell: ({ row }) => <styled.div css={{ w: "80px" }}>{row.getValue("id")}</styled.div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <styled.div css={{ display: "flex", gap: "2" }}>
          {label && <Badge variant="outline">{label.label}</Badge>}
          <styled.span css={{ maxW: "500px", truncate: true, fontWeight: "medium" }}>
            {row.getValue("title")}
          </styled.span>
        </styled.div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue("status"));

      if (!status) {
        return null;
      }

      return (
        <styled.div css={{ display: "flex", w: "100px", alignItems: "center", gap: "2" }}>
          {status.icon && <status.icon className={css({ color: "muted.fg", w: "4", h: "4" })} />}
          <span>{status.label}</span>
        </styled.div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
    cell: ({ row }) => {
      const priority = priorities.find((priority) => priority.value === row.getValue("priority"));

      if (!priority) {
        return null;
      }

      return (
        <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
          {priority.icon && (
            <priority.icon className={css({ color: "muted.fg", w: "4", h: "4" })} />
          )}
          <span>{priority.label}</span>
        </styled.div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
