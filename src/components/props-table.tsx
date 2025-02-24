import { LuInfo } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Chip } from "./ui/chip";
import { Popover } from "./ui/popover";
import { Table } from "./ui/table";

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
    <styled.div css={{ rounded: "md", borderWidth: "1px" }}>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head css={{ w: "100px" }}>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head css={{ textAlign: "right" }}>Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((d) => (
            <Table.Row key={d.prop}>
              <Table.Cell>
                <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
                  <Chip>{d.prop}</Chip>
                  <Popover.Root>
                    <Popover.Trigger className="group" css={{ cursor: "pointer" }}>
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
                    </Popover.Trigger>
                    <Popover.Content css={{ textStyle: "sm" }}>{d.description}</Popover.Content>
                  </Popover.Root>
                </styled.div>
              </Table.Cell>
              <Table.Cell>
                <Chip>{d.type}</Chip>
              </Table.Cell>
              <Table.Cell>
                <Chip>{d.default}</Chip>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </styled.div>
  );
}
