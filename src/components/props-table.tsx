import { LuInfo } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Badge } from "./ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

type PropsTableData = {
  name: string;
  description: string | null;
  type: string;
  default: string | null;
};

type PropsTableProps = {
  data: PropsTableData[];
};

export default function PropsTable({ data }: PropsTableProps) {
  return (
    <styled.div css={{ rounded: "md", borderWidth: "1px" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.name}>
              <TableCell>
                <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
                  <Badge variant="secondary">{d.name}</Badge>
                  <Popover>
                    <PopoverTrigger className="group">
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
                    <PopoverContent css={{ textStyle: "sm" }}>{d.description}</PopoverContent>
                  </Popover>
                </styled.div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{d.type}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{d.default}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </styled.div>
  );
}
