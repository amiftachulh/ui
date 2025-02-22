import { LuInfo } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { Chip } from "./ui/chip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

type PropsTableData = {
  prop: string;
  description: string | null;
  type: string;
  default: string | null;
};

type PropsTableProps = {
  data: PropsTableData[];
};

export default function PropsTable({ data }: PropsTableProps) {
  return (
    <div className={css({ rounded: "md", borderWidth: "1px" })}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={css({ w: "100px" })}>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className={css({ textAlign: "right" })}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.prop}>
              <TableCell>
                <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
                  <Chip>{d.prop}</Chip>
                  <Popover>
                    <PopoverTrigger className={cx("group", css({ cursor: "pointer" }))}>
                      <LuInfo
                        className={css({
                          w: "4",
                          h: "4",
                          color: "zinc.800",
                          transition: "colors",
                          _dark: {
                            color: "zinc.400",
                          },
                          _groupHover: {
                            color: "fg",
                          },
                        })}
                      />
                    </PopoverTrigger>
                    <PopoverContent className={css({ textStyle: "sm" })}>
                      {d.description}
                    </PopoverContent>
                  </Popover>
                </div>
              </TableCell>
              <TableCell>
                <Chip>{d.type}</Chip>
              </TableCell>
              <TableCell>
                <Chip>{d.default}</Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
