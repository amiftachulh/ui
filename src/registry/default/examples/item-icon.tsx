import { LuShieldAlert } from "react-icons/lu";
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

export default function ItemIcon() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "lg", flexDir: "column", gap: "6" }}>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <LuShieldAlert />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>New login detected from unknown device.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </styled.div>
  );
}
