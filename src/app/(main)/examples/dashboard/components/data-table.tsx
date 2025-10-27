"use client";

import * as React from "react";
import {
  TbChevronDown,
  TbChevronLeft,
  TbChevronRight,
  TbChevronsLeft,
  TbChevronsRight,
  TbCircleCheckFilled,
  TbDotsVertical,
  TbGripVertical,
  TbLayoutColumns,
  TbLoader,
  TbPlus,
  TbTrendingUp,
} from "react-icons/tb";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { useMediaQuery } from "@/registry/default/hooks/use-media-query";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Separator } from "@/registry/default/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
});

// Create a separate component for the drag handle
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({
    id,
  });

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      css={{ color: "muted.fg", w: "7", h: "7", _hover: { bg: "transparent" } }}
    >
      <TbGripVertical className={css({ color: "muted.fg", w: "3", h: "3" })} />
      <styled.span css={{ srOnly: true }}>Drag to reorder</styled.span>
    </Button>
  );
}

const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "select",
    header: ({ table }) => (
      <styled.div css={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </styled.div>
    ),
    cell: ({ row }) => (
      <styled.div css={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </styled.div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "header",
    header: "Header",
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />;
    },
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Section Type",
    cell: ({ row }) => (
      <styled.div css={{ w: "32" }}>
        <Badge variant="outline" css={{ color: "muted.fg", px: "1.5" }}>
          {row.original.type}
        </Badge>
      </styled.div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" css={{ color: "muted.fg", px: "1.5" }}>
        {row.original.status === "Done" ? (
          <TbCircleCheckFilled
            className={css({ fill: "green.500", _dark: { fill: "green.400" } })}
          />
        ) : (
          <TbLoader />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "target",
    header: () => <styled.div css={{ w: "full", textAlign: "right" }}>Target</styled.div>,
    cell: ({ row }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: `Saving ${row.original.header}`,
            success: "Done",
            error: "Error",
          });
        }}
      >
        <Label htmlFor={`${row.original.id}-target`} css={{ srOnly: true }}>
          Target
        </Label>
        <Input
          css={{
            w: "16",
            h: "8",
            bg: "transparent",
            borderColor: "transparent",
            textAlign: "right",
            shadow: "none",
            _hover: {
              bg: "input/30",
              _dark: { bg: "input/30" },
            },
            _focusVisible: {
              bg: "bg",
              borderWidth: "1px",
              _dark: { bg: "input/30" },
            },
            _dark: { bg: "transparent" },
          }}
          defaultValue={row.original.target}
          id={`${row.original.id}-target`}
        />
      </form>
    ),
  },
  {
    accessorKey: "limit",
    header: () => <styled.div css={{ w: "full", textAlign: "right" }}>Limit</styled.div>,
    cell: ({ row }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: `Saving ${row.original.header}`,
            success: "Done",
            error: "Error",
          });
        }}
      >
        <Label htmlFor={`${row.original.id}-limit`} css={{ srOnly: true }}>
          Limit
        </Label>
        <Input
          css={{
            w: "16",
            h: "8",
            bg: "transparent",
            borderColor: "transparent",
            textAlign: "right",
            shadow: "none",
            _hover: {
              bg: "input/30",
              _dark: { bg: "input/30" },
            },
            _focusVisible: {
              bg: "bg",
              borderWidth: "1px",
              _dark: { bg: "input/30" },
            },
            _dark: { bg: "transparent" },
          }}
          defaultValue={row.original.limit}
          id={`${row.original.id}-limit`}
        />
      </form>
    ),
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer",
    cell: ({ row }) => {
      const isAssigned = row.original.reviewer !== "Assign reviewer";

      if (isAssigned) {
        return row.original.reviewer;
      }

      return (
        <>
          <Label htmlFor={`${row.original.id}-reviewer`} css={{ srOnly: true }}>
            Reviewer
          </Label>
          <Select>
            <SelectTrigger
              css={{ w: "9.5rem", "& .select__value": { display: "block", truncate: true } }}
              size="sm"
              id={`${row.original.id}-reviewer`}
            >
              <SelectValue placeholder="Assign reviewer" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
              <SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
            </SelectContent>
          </Select>
        </>
      );
    },
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            css={{ color: "muted.fg", display: "flex", w: "8", h: "8", _open: { bg: "muted" } }}
            size="icon"
          >
            <TbDotsVertical />
            <styled.span css={{ srOnly: true }}>Open menu</styled.span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" css={{ w: "32" }}>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="danger">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

function DraggableRow({ row }: { row: Row<z.infer<typeof schema>> }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      css={{
        pos: "relative",
        zIndex: "0",
        "&[data-dragging=true]": { zIndex: "10", opacity: "0.8" },
      }}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function DataTable({ data: initialData }: { data: z.infer<typeof schema>[] }) {
  const [data, setData] = React.useState(() => initialData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const sortableId = React.useId();
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const dataIds = React.useMemo<UniqueIdentifier[]>(() => data?.map(({ id }) => id) || [], [data]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  }

  return (
    <Tabs
      defaultValue="outline"
      css={{
        w: "full",
        display: "flex",
        flexDir: "column",
        justifyContent: "flex-start",
        gap: "6",
      }}
    >
      <styled.div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "4",
          lg: { px: "6" },
        }}
      >
        <Label htmlFor="view-selector" css={{ srOnly: true }}>
          View
        </Label>
        <Select defaultValue="outline">
          <SelectTrigger
            css={{
              display: "flex",
              w: "fit",
              "@container main (width >= 56rem)": { display: "none" },
            }}
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="past-performance">Past Performance</SelectItem>
            <SelectItem value="key-personnel">Key Personnel</SelectItem>
            <SelectItem value="focus-documents">Focus Documents</SelectItem>
          </SelectContent>
        </Select>
        <TabsList
          css={{
            display: "none",
            borderBottomWidth: "0",
            "& .badge": {
              w: "5",
              h: "5",
              rounded: "full",
              px: "1",
            },
            "@container main (width >= 56rem)": { display: "flex" },
          }}
        >
          <TabsTrigger value="outline">Outline</TabsTrigger>
          <TabsTrigger value="past-performance">
            Past Performance <Badge variant="secondary">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="key-personnel">
            Key Personnel <Badge variant="secondary">2</Badge>
          </TabsTrigger>
          <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
        </TabsList>
        <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <TbLayoutColumns />
                <styled.span css={{ display: "none", lg: { display: "inline" } }}>
                  Customize Columns
                </styled.span>
                <styled.span css={{ lg: { display: "none" } }}>Columns</styled.span>
                <TbChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" css={{ w: "56" }}>
              {table
                .getAllColumns()
                .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      css={{ textTransform: "capitalize" }}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <TbPlus />
            <styled.span css={{ display: "none", lg: { display: "inline" } }}>
              Add Section
            </styled.span>
          </Button>
        </styled.div>
      </styled.div>
      <TabsContent
        value="outline"
        css={{
          pos: "relative",
          display: "flex",
          flexDir: "column",
          gap: "4",
          overflow: "auto",
          px: "4",
          lg: { px: "6" },
        }}
      >
        <styled.div css={{ overflow: "hidden", rounded: "lg", borderWidth: "1px" }}>
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <Table>
              <TableHeader css={{ bg: "muted/25", pos: "sticky", top: "0", zIndex: "10" }}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody css={{ "& .table__cell:first": { w: "8" } }}>
                {table.getRowModel().rows?.length ? (
                  <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} css={{ h: "24", textAlign: "center" }}>
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </styled.div>
        <styled.div
          css={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: "4" }}
        >
          <styled.div
            css={{
              color: "muted.fg",
              display: "none",
              flex: "1",
              textStyle: "sm",
              lg: { display: "flex" },
            }}
          >
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </styled.div>
          <styled.div
            css={{ display: "flex", w: "full", alignItems: "center", gap: "8", lg: { w: "fit" } }}
          >
            <styled.div
              css={{ display: "none", alignItems: "center", gap: "2", lg: { display: "flex" } }}
            >
              <Label htmlFor="rows-per-page" css={{ textStyle: "sm", fontWeight: "medium" }}>
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger size="sm" css={{ w: "20" }} id="rows-per-page">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
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
                w: "fit",
                alignItems: "center",
                justifyContent: "center",
                textStyle: "sm",
                fontWeight: "medium",
              }}
            >
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </styled.div>
            <styled.div
              css={{ ml: "auto", display: "flex", alignItems: "center", gap: "2", lg: { ml: "0" } }}
            >
              <Button
                variant="outline"
                css={{ display: "none", h: "8", w: "8", p: "0", lg: { display: "flex" } }}
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <styled.span css={{ srOnly: true }}>Go to first page</styled.span>
                <TbChevronsLeft />
              </Button>
              <Button
                variant="outline"
                css={{ w: "8", h: "8" }}
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <styled.span css={{ srOnly: true }}>Go to previous page</styled.span>
                <TbChevronLeft />
              </Button>
              <Button
                variant="outline"
                css={{ w: "8", h: "8" }}
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <styled.span css={{ srOnly: true }}>Go to next page</styled.span>
                <TbChevronRight />
              </Button>
              <Button
                variant="outline"
                css={{ display: "none", h: "8", w: "8", lg: { display: "flex" } }}
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <styled.span css={{ srOnly: true }}>Go to last page</styled.span>
                <TbChevronsRight />
              </Button>
            </styled.div>
          </styled.div>
        </styled.div>
      </TabsContent>
      <TabsContent
        value="past-performance"
        css={{ display: "flex", flexDir: "column", px: "4", lg: { px: "6" } }}
      >
        <styled.div
          css={{
            aspectRatio: "16/9",
            w: "full",
            flex: "1",
            rounded: "lg",
            borderWidth: "1px",
            borderStyle: "dashed",
          }}
        ></styled.div>
      </TabsContent>
      <TabsContent
        value="key-personnel"
        css={{ display: "flex", flexDir: "column", px: "4", lg: { px: "6" } }}
      >
        <styled.div
          css={{
            aspectRatio: "16/9",
            w: "full",
            flex: "1",
            rounded: "lg",
            borderWidth: "1px",
            borderStyle: "dashed",
          }}
        ></styled.div>
      </TabsContent>
      <TabsContent
        value="focus-documents"
        css={{ display: "flex", flexDir: "column", px: "4", lg: { px: "6" } }}
      >
        <styled.div
          css={{
            aspectRatio: "16/9",
            w: "full",
            flex: "1",
            rounded: "lg",
            borderWidth: "1px",
            borderStyle: "dashed",
          }}
        ></styled.div>
      </TabsContent>
    </Tabs>
  );
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      <DrawerTrigger asChild>
        <Button variant="link" css={{ color: "fg", w: "fit", px: "0", textAlign: "left" }}>
          {item.header}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader css={{ gap: "1" }}>
          <DrawerTitle>{item.header}</DrawerTitle>
          <DrawerDescription>Showing total visitors for the last 6 months</DrawerDescription>
        </DrawerHeader>
        <styled.div
          css={{
            display: "flex",
            flexDir: "column",
            gap: "4",
            overflowY: "auto",
            px: "4",
            textStyle: "sm",
          }}
        >
          {!isMobile && (
            <>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 0,
                    right: 10,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="var(--color-mobile)"
                    fillOpacity={0.6}
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
              <Separator />
              <styled.div css={{ display: "grid", gap: "2" }}>
                <styled.div
                  css={{ display: "flex", gap: "2", lineHeight: "none", fontWeight: "medium" }}
                >
                  Trending up by 5.2% this month{" "}
                  <TbTrendingUp className={css({ w: "4", h: "4" })} />
                </styled.div>
                <styled.div css={{ color: "muted.fg" }}>
                  Showing total visitors for the last 6 months. This is just some random text to
                  test the layout. It spans multiple lines and should wrap around.
                </styled.div>
              </styled.div>
              <Separator />
            </>
          )}
          <styled.form css={{ display: "flex", flexDir: "column", gap: "4" }}>
            <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
              <Label htmlFor="header">Header</Label>
              <Input id="header" defaultValue={item.header} />
            </styled.div>
            <styled.div
              css={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4" }}
            >
              <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
                <Label htmlFor="type">Type</Label>
                <Select defaultValue={item.type}>
                  <SelectTrigger id="type" css={{ w: "full" }}>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Table of Contents">Table of Contents</SelectItem>
                    <SelectItem value="Executive Summary">Executive Summary</SelectItem>
                    <SelectItem value="Technical Approach">Technical Approach</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Capabilities">Capabilities</SelectItem>
                    <SelectItem value="Focus Documents">Focus Documents</SelectItem>
                    <SelectItem value="Narrative">Narrative</SelectItem>
                    <SelectItem value="Cover Page">Cover Page</SelectItem>
                  </SelectContent>
                </Select>
              </styled.div>
              <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={item.status}>
                  <SelectTrigger id="status" css={{ w: "full" }}>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Done">Done</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Not Started">Not Started</SelectItem>
                  </SelectContent>
                </Select>
              </styled.div>
            </styled.div>
            <styled.div
              css={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4" }}
            >
              <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
                <Label htmlFor="target">Target</Label>
                <Input id="target" defaultValue={item.target} />
              </styled.div>
              <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
                <Label htmlFor="limit">Limit</Label>
                <Input id="limit" defaultValue={item.limit} />
              </styled.div>
            </styled.div>
            <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
              <Label htmlFor="reviewer">Reviewer</Label>
              <Select defaultValue={item.reviewer}>
                <SelectTrigger id="reviewer" css={{ w: "full" }}>
                  <SelectValue placeholder="Select a reviewer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                  <SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
                  <SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
                </SelectContent>
              </Select>
            </styled.div>
          </styled.form>
        </styled.div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Done</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
