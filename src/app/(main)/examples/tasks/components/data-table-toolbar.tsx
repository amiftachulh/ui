"use client";

import { LuX } from "react-icons/lu";
import { Table } from "@tanstack/react-table";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <styled.div css={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <styled.div css={{ display: "flex", flex: "1", alignItems: "center", gap: "2" }}>
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
          css={{ w: "150px", h: "8", lg: { w: "250px" } }}
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button variant="ghost" size="sm" onClick={() => table.resetColumnFilters()}>
            Reset
            <LuX />
          </Button>
        )}
      </styled.div>
      <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
        <DataTableViewOptions table={table} />
        <Button size="sm">Add Task</Button>
      </styled.div>
    </styled.div>
  );
}
