import { LuBadgeCheck, LuChevronRight } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item";

export default function ItemDemo() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "md", flexDir: "column", gap: "6" }}>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>A simple item with title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <LuBadgeCheck className={css({ w: "5", h: "5" })} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <LuChevronRight className={css({ w: "4", h: "4" })} />
          </ItemActions>
        </a>
      </Item>
    </styled.div>
  );
}
