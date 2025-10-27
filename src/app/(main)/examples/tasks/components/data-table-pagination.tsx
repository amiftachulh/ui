import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";
import { Table } from "@tanstack/react-table";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <styled.div
      css={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: "2" }}
    >
      <styled.div css={{ color: "muted.fg", flex: "1", textStyle: "sm" }}>
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </styled.div>
      <styled.div css={{ display: "flex", alignItems: "center", spaceX: "6", lg: { spaceX: "8" } }}>
        <styled.div css={{ display: "flex", alignItems: "center", spaceX: "2" }}>
          <styled.p css={{ textStyle: "sm", fontWeight: "medium" }}>Rows per page</styled.p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger css={{ w: "70px", h: "8" }}>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </styled.div>
        <styled.div
          css={{
            display: "flex",
            w: "100px",
            alignItems: "center",
            justifyContent: "center",
            textStyle: "sm",
            fontWeight: "medium",
          }}
        >
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </styled.div>
        <styled.div css={{ display: "flex", alignItems: "center", spaceX: "2" }}>
          <Button
            variant="outline"
            size="icon"
            css={{ display: "none", w: "8", h: "8", lg: { display: "flex" } }}
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <styled.span css={{ srOnly: true }}>Go to first page</styled.span>
            <LuChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            css={{ w: "8", h: "8" }}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <styled.span css={{ srOnly: true }}>Go to previous page</styled.span>
            <LuChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            css={{ w: "8", h: "8" }}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <styled.span css={{ srOnly: true }}>Go to next page</styled.span>
            <LuChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            css={{ display: "none", w: "8", h: "8", lg: { display: "flex" } }}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <styled.span css={{ srOnly: true }}>Go to last page</styled.span>
            <LuChevronsRight />
          </Button>
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
