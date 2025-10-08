import { LuChevronRight, LuExternalLink } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/default/ui/item";

export default function ItemLink() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "md", flexDir: "column", gap: "4" }}>
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>Learn how to get started with our components.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <LuChevronRight className={css({ w: "4", h: "4" })} />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <LuExternalLink className={css({ w: "4", h: "4" })} />
          </ItemActions>
        </a>
      </Item>
    </styled.div>
  );
}
